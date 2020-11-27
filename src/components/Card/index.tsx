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

const Card: React.FC<Pokemon> = ({pokemonIndex, name, img, ...rest}) => {
  const [types, setTypes] = useState<Pokemon[]>([]);

  const loadTypes = async() => {
    const response = await api.get(`pokemon/${pokemonIndex}`);

    const tipos = response.data.types.map(item =>' '+ item.type.name).toString();
    setTypes(tipos);
  }

  useEffect(() => {
    loadTypes();

  },[]);

  // const typeName = types.map(type => type.damage_relations.half_damage_to[0].name);

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
          <TextTypePokemon>{types}</TextTypePokemon>
        </TextContainerType>
    </Container>
  );
}

export default Card;
