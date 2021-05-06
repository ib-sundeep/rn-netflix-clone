import Api from 'utils/api';
import secrets from '../secrets';

const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = secrets.TMDB_API_KEY;

const tmdbApi = new Api({
  baseUrl: API_BASE,
  searchParams: { api_key: API_KEY },
});

export default tmdbApi;
