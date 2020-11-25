import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {
   Container,
   TextContainerCount,
   TextCount,
   ImageContainer,
   ImagePoke,
   TextContainerName,
   TextNamePokemon,
   TextName,
   TextContainerType,
   TextType,
   TextTypePokemon
  } from './styles';

interface Pokemon {
  pokemonIndex: number;
  name: string;
  img: string;
};

interface TypePokemon {
  types: {
    name: string,
  }
}[]

const Card: React.FC<Pokemon> = ({pokemonIndex, name, img, ...rest}) => {
  const [types, setTypes] = useState<TypePokemon[]>([]);

  const loadTypes = async() => {
    const response = await api.get(pokemonIndex + '/');

    setTypes(response.data.types);

    console.log(types.map(t=>t.name));
  }

  useEffect(() => {
    loadTypes();
    // console.log(types);
  },[]);

  return (
    <Container {...rest} >
        <TextContainerCount>
          <TextCount># {pokemonIndex}</TextCount>
        </TextContainerCount>

        <ImageContainer>
          <ImagePoke  source={{ uri: img }} />
        </ImageContainer>

        <TextContainerName>
          <TextName>Name: </TextName>
          <TextNamePokemon>{name}</TextNamePokemon>
        </TextContainerName>

        <TextContainerType>
          <TextType>Type: </TextType>
          <TextTypePokemon>{types.map(type => type.name)}</TextTypePokemon>
        </TextContainerType>
    </Container>
  );
}

export default Card;
