import React from 'react';
import { Container, ContainerCard, ImagePoke, TextCount, TextName } from './styles';

interface Pokemon {
  pokemonIndex: number;
  name: string;
  img: string;
};

const Card: React.FC<Pokemon> = ({pokemonIndex, name, img, ...rest}) => {

  return (
    <Container >
      <ContainerCard >
        <TextCount># {pokemonIndex}</TextCount>
        <ImagePoke  source={{ uri: img }} />
        <TextName>{name}</TextName>
      </ContainerCard>

    </Container>
  );
}

export default Card;
