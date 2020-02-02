import React from 'react';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { MovieList } from './components/movie/MovieList';
import { MovieProvider } from './hooks/useMovies';

const App: React.FC = () => {
  return (
    <MovieProvider>
      <Header title={'hooked'} />
      <Search />
      <MovieList />
    </MovieProvider>
  );
};

export default App;
