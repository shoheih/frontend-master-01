import React, { useState, FormEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useMovie } from '../hooks/useMovies';

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 1rem 0;
`;

const Input = styled.input`
  width: 25em;
  height: 1.5em;
  font-size: 1.6rem;
  padding: 0.5em 0.2em;
  border: 1px solid #000;
`;

const Button = styled.button`
  width: 5em;
  font-size: 1.2rem;
  color: #000;
  border: 2px solid #000;
  margin-left: 1rem;
`;

const Sentence = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

export const Search: React.FunctionComponent = () => {
  const [keyword, setKeyword] = useState('iron man');
  const { fetchMovies } = useMovie();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (keyword) {
      fetchMovies(keyword);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <>
      <Wrapper onSubmit={handleSubmit}>
        <Input type="text" value={keyword} onChange={handleChange} />
        <Button type="submit">search</Button>
      </Wrapper>
      <Sentence>Sharing a few of our favourite movies</Sentence>
    </>
  );
};
