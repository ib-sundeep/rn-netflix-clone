import path from 'path';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

export const ImageSizes = {
  poster: 'w500',
  card: 'w342',
};

export function generateImageUrl(imagePath, size) {
  return path.join(IMAGE_BASE_URL, size, imagePath);
}
