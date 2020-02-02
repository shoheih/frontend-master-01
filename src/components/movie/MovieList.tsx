import React from 'react';
import { MovieItem } from './MovieItem';
import styled from 'styled-components';
import { useMovie } from '../../hooks/useMovies';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 860px;
  padding: 5rem 0;
  margin: 0 auto;
`;

const LoadingMessage = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`;

const ErrorMessage = styled.p`
  font-size: 20px;
  text-align: center;
  color: #cc0000;
  margin-top: 50px;
`;

export const MovieList: React.FunctionComponent = () => {
  const { movies, isLoading } = useMovie();

  const renderMovieList = () => {
    if (isLoading) {
      return <LoadingMessage>Loading...</LoadingMessage>;
    } else if (!movies.length) {
      return <ErrorMessage>Movie not found...</ErrorMessage>;
    } else {
      return (
        <List>
          {movies.map(({ id, title, year, poster }) => (
            <MovieItem
              key={id}
              id={id}
              title={title}
              year={year}
              poster={poster}
            />
          ))}
        </List>
      );
    }
  };

  return <>{renderMovieList()}</>;
};
