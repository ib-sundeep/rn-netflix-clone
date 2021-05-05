import React from 'react';

import { DetailsProvider } from 'providers/details';
import Details from './Details';

function DetailScreen({ route }) {
  const { id, mediaType } = route.params;
  return (
    <DetailsProvider id={id} mediaType={mediaType}>
      <Details />
    </DetailsProvider>
  );
}

export default DetailScreen;
