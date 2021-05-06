import React, { createContext, useContext, useEffect, useState } from 'react';

import tmdbApi from 'api/tmdb';

const DetailsContext = createContext({
  data: null,
  isLoading: false,
  error: null,
});

export function useDetailsState() {
  return useContext(DetailsContext);
}

export function DetailsProvider({ id, mediaType, ...remainingProps }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchDetails() {
    setLoading(true);
    setError(null);

    try {
      const json = await tmdbApi.get(`/${mediaType}/${id}`, {
        append_to_response: 'recommendations,videos',
      });
      json.media_type = mediaType;
      setData(json);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <DetailsContext.Provider
      value={{ data, isLoading, setLoading, error }}
      {...remainingProps}
    />
  );
}
