import axios from 'axios';
import { Picture } from '../interfaces/Picture';

// TODO: Move api_key to .env
const DEFAULT_QUERY_PARAMS = `api_key=hawGIn53fZK5JPcAxldEbFLmKCCG6uLpYWR6Jb4x`;

const client = axios.create({
  baseURL: 'https://api.nasa.gov'
});

function fetchAPOD(date: string): Promise<Picture> {
  return client
    .get<Picture>(`/planetary/apod?${DEFAULT_QUERY_PARAMS}&date=${date}`)
    .then((res) => res.data);
}

const NasaService = {
  fetchAPOD
}

export default NasaService;
