import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
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

const Card: React.FC<Pokemon> = ({pokemonIndex, name, img, ...rest}) => {
  const [types, setTypes] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  const loadTypes = async() => {
    const response = await api.get(`pokemon/${pokemonIndex}`);

    const tipos = response.data.types.map(item =>' '+ item.type.name).toString();
    setTypes(tipos);
    setLoading(false);
  }

  useEffect(() => {
    loadTypes();
  },[]);

  return (
    loading ? (
      <ActivityIndicator size="large" />
    ) : (
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
            <TextTypePokemon>{types}</TextTypePokemon>
          </TextContainerType>
      </Container>
    )
  );
}

export default Card;
