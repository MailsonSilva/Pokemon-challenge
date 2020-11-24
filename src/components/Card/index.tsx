import React from 'react';
import {
   Container,
   ContainerCard,
   TextContainerCount,
   ImagePoke,
   TextContainerName,
   TextCount,
   TextName } from './styles';

interface Pokemon {
  pokemonIndex: number;
  name: string;
  img: string;
};

const Card: React.FC<Pokemon> = ({pokemonIndex, name, img, ...rest}) => {

  return (
    <Container >
      <ContainerCard >
        <TextContainerCount>
          <TextCount># {pokemonIndex}</TextCount>
        </TextContainerCount>

        <ImagePoke  source={{ uri: img }} />

        <TextContainerName>
          <TextName>{name}</TextName>
        </TextContainerName>
      </ContainerCard>

    </Container>
  );
}

export default Card;
