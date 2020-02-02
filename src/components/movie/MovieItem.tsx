import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  width: 215px;
  padding: 0 1.5rem;
  margin-bottom: 4rem;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const Poster = styled.img`
  width: 100%;
  margin: 2rem 0 1rem;
`;

const Year = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;

export interface MovieItemProps {
  id: string;
  title: string;
  year: string;
  poster: string;
}

export const MovieItem: React.FunctionComponent<MovieItemProps> = props => {
  const { title, year, poster } = props;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Poster src={poster} />
      <Year>{`(${year})`}</Year>
    </Wrapper>
  );
};
