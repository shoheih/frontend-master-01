import React, { useState, useContext, createContext } from 'react';
import { MovieItemProps } from '../components/movie/MovieItem';
import { OMDb, ResponseData } from '../apis/OMDb';

interface ProviderProps {
  children: React.ReactNode;
}

interface ContextProps {
  movies: MovieItemProps[];
  isLoading: boolean;
  fetchMovies(keyword: string): void;
}

const Ctx = createContext<ContextProps>({} as ContextProps);

const MovieProvider = ({ children }: ProviderProps) => {
  const [movies, setMovies] = useState<MovieItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (keyword: string) => {
    setIsLoading(true);
    const response = await OMDb.get('', {
      params: {
        s: keyword
      }
    });
    setIsLoading(false);

    const responseData: ResponseData = response.data;

    if (!responseData.Search) {
      setMovies([]);
      return;
    }

    setMovies(
      responseData.Search.map(data => {
        return {
          id: data.imdbID,
          title: data.Title,
          year: data.Year,
          poster: data.Poster
        };
      })
    );
  };

  return (
    <Ctx.Provider
      value={{
        movies,
        isLoading,
        fetchMovies
      }}
    >
      {children}
    </Ctx.Provider>
  );
};

const useMovie = () => useContext(Ctx);

export { MovieProvider, useMovie };
