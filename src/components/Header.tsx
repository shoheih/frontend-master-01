import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  background-color: #000;
  font-size: 2rem;
  font-weight: bold;
  padding: 0.5em;
  text-align: center;
  color: #fff;
`;

interface Props {
  title: string;
}

export const Header: React.FunctionComponent<Props> = props => {
  const { title } = props;

  return (
    <Wrapper>
      <h1>{title.toUpperCase()}</h1>
    </Wrapper>
  );
};
