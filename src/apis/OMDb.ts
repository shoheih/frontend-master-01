import axios from 'axios';

const APIKEY = '36a91bf9';

type Search = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type ResponseData = {
  Search?: Search[];
  totalResults?: string;
  Error?: string;
  Reponse: 'True' | 'False';
};

export const OMDb = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${APIKEY}`
});
