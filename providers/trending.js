import React, { createContext, useContext, useEffect, useState } from 'react';

import { filterPreferredResults } from 'utils/tmdb';
import tmdbApi from 'api/tmdb';

const TrendingContext = createContext({
  trending: [],
  error: null,
  isLoading: false,
});

export function useTrendingState() {
  return useContext(TrendingContext);
}

export function TrendingProvider(props) {
  const [trending, setTrending] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadTrending() {
    setLoading(true);
    setError(null);

    try {
      const json = await tmdbApi.get('/trending/all/day');
      setTrending(filterPreferredResults(json.results));
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadTrending();
  }, []);

  return (
    <TrendingContext.Provider
      value={{ trending, isLoading, error }}
      {...props}
    />
  );
}
