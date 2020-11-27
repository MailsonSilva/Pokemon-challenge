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
  name: string;
  img: string;
  height: Number;
  weight: Number;
};


const CardDetail: React.FC<Pokemon> = ({pokemonIndex, name, img, ...rest}) => {
  const [loading, setLoading] = useState(true);
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

    const {height} = response.data;
    const {weight} = response.data;

    setheight(height);
    setweight(weight);

    const stats = response.data.stats.map(stats => stats.base_stat);
    const statsSeparados = stats.toString().split(',', 6);

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
            <ImagePoke source={{ uri: img }}/>
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
