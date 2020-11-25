import React, { NamedExoticComponent, useEffect, useState } from 'react';
import { Alert } from 'react-native';
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

interface TyPokemon {
  types: {
    type: {
      name: string,
    }
  };
};

interface TypePokemon {
  damage_relations: {
    double_damage_from: [
      {
        name: string,
      }
    ],
    double_damage_to: [],
    half_damage_from: [],
    half_damage_to: [
      {
        name: string,
      },
      {
        name: string,
      }
    ],
    no_damage_from: [
      {
        name: string,
      }
    ],
    no_damage_to: [
      {
        name: string,
      }
    ]
  },
}

const Card: React.FC<Pokemon> = ({pokemonIndex, name, img, ...rest}) => {
  const [types, setTypes] = useState<TyPokemon[]>([]);

  const loadTypes = async() => {
    const response = await api.get(`pokemon/${pokemonIndex}`);

    setTypes(response.data.types[0].type.name);

  }

  useEffect(() => {
    loadTypes();
    console.log(types);
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
