import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import ProgressBar from '../../components/ProgressBar';
import {
   Container,
   TextContainerCount,
   TextCount,
   ImageContainer,
   ImagePoke,
   TextContainerName,
   TextNamePokemon,
   Measures,
   MeasuresKG,
   MeasuresKGText,
   MeasuresKGWeigth,
   MeasuresM,
   MeasuresMText,
   MeasuresMHeight,
   StatsTest
  } from './styles';
import { ActivityIndicator } from 'react-native';

interface Pokemon {
  pokemonIndex: number;
};


const CardDetail: React.FC<Pokemon> = ({pokemonIndex, ...rest}) => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [imageUrl, setimageUrl] = useState('');
  const [height, setheight] = useState(0);
  const [weight, setweight] = useState(0);
  const [hp, setHp] = useState(0);
  const [atk, setAtk] = useState(0);
  const [def, setDef] = useState(0);
  const [spd, setSpd] = useState(0);

  useEffect(() => {
    loadTypes();
  },[]);

  const loadTypes = async() => {
    const response = await api.get(`pokemon/${pokemonIndex}`);

    const {name}   = response.data;
    const {height} = response.data;
    const {weight} = response.data;
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    const stats = response.data.stats.map(stats => stats.base_stat);
    const statsSeparados = stats.toString().split(',', 6);

    setName(name);
    setimageUrl(imageUrl);
    setheight(height);
    setweight(weight);
    setHp(statsSeparados[5]);
    setAtk(statsSeparados[4]);
    setDef(statsSeparados[3]);
    setSpd(statsSeparados[0]);
    setLoading(false);
  };

  return (
    loading ? (
      <ActivityIndicator size="large" />
    ) : (
      <Container {...rest} >
          <TextContainerCount>
            <TextCount># {pokemonIndex}</TextCount>
          </TextContainerCount>

          <ImageContainer>
            <ImagePoke source={{ uri: imageUrl }}/>
          </ImageContainer>

          <TextContainerName>
            <TextNamePokemon>{name}</TextNamePokemon>
          </TextContainerName>

          <Measures>
            <MeasuresKG>
              <MeasuresKGText>{height} KG</MeasuresKGText>
              <MeasuresKGWeigth>Weigth</MeasuresKGWeigth>
            </MeasuresKG>

            <MeasuresM>
              <MeasuresMText>{weight} M</MeasuresMText>
              <MeasuresMHeight>Height</MeasuresMHeight>
            </MeasuresM>
          </Measures>

          <StatsTest>Stats</StatsTest>

          <ProgressBar progress={hp} info="HP" />
          <ProgressBar progress={atk} info="ATK" />
          <ProgressBar progress={def} info="DEF" />
          <ProgressBar progress={spd} info="SPD" />

      </Container>
    )
  );
}

export default CardDetail;
