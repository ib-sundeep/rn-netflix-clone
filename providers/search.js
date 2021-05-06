import React, { createContext, useContext, useState } from 'react';

import { filterPreferredResults } from 'utils/tmdb';
import tmdbApi from 'api/tmdb';

const SearchContext = createContext({
  kw: '',
  results: [],
  isLoading: false,
  error: null,
});

const ActionsContext = createContext({
  fetchResults: () => {},
  setKw: () => {},
});

export function useSearchState() {
  return useContext(SearchContext);
}

export function useSearchActions() {
  return useContext(ActionsContext);
}

export function SearchProvider(props) {
  const [kw, setKw] = useState('');
  const [searchedKw, setSearchedKw] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchResults() {
    if (isLoading) return;

    if (kw.length === 0) {
      setSearchedKw(kw);
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const json = await tmdbApi.get('/search/multi', { query: kw });
      setSearchedKw(kw);
      setResults(filterPreferredResults(json.results));
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }

  return (
    <ActionsContext.Provider value={{ fetchResults, setKw }}>
      <SearchContext.Provider
        value={{ kw, searchedKw, isLoading, results, error }}
        {...props}
      />
    </ActionsContext.Provider>
  );
}
