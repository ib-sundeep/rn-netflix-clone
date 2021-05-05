import Api from 'utils/api';

const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = 'bf5d6ab1275f7718a41332fb3218bd17';

const tmdbApi = new Api({
  baseUrl: API_BASE,
  searchParams: { api_key: API_KEY },
});

export default tmdbApi;
