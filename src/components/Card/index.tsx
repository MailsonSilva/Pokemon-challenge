import React from 'react';
import { Text } from 'react-native';

import { Container, ContainerCard, TextCount, TextName } from './styles';

interface Pokemon {
  count: number;
  next: string;
  previous: null,
  results: [
        {
          name: string,
          url: string
        }
  ]
};

const Card: React.FC<Pokemon> = ({pokemon}) => {
  return (
    <Container >
      <ContainerCard >
        <TextCount ># 1</TextCount>
        <TextName >sss</TextName>
      </ContainerCard>

    </Container>
  );
}

export default Card;
