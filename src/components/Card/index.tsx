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
   TextTypePokemon,
   IndicatorView
  } from './styles';

interface Pokemon {
  name: string;
};

const Card: React.FC<Pokemon> = ({name, ...rest}) => {
  const [id, setId] = useState(0);
  const [imageUrl, setimageUrl] = useState('');
  const [types, setTypes] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTypes();
  },[]);

  const loadTypes = async() => {
    const response = await api.get(`pokemon/${name}`);
    const {id} = response.data;
    const tipos = response.data.types.map(item =>' '+ item.type.name).toString();
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    setId(id);
    setimageUrl(imageUrl);
    setTypes(tipos);
    setLoading(false);
  }

  return (
    loading ? (
      <IndicatorView>
        <ActivityIndicator size="large" />
      </IndicatorView>
    ) : (
      <Container {...rest} >
          <TextContainerCount>
            <TextCount># {id}</TextCount>
          </TextContainerCount>

          <ImageContainer>
            <ImagePoke  source={{ uri: imageUrl }} />
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
