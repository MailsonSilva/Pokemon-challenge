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

interface Pokemon {
  pokemonIndex: number;
  name: string;
  img: string;
  types: {
    type: [
      name: string,
    ]
  };
};


const CardDetail: React.FC<Pokemon> = ({pokemonIndex, name, img, ...rest}) => {
  const [types, setTypes] = useState<Pokemon[]>([]);

  const loadTypes = async() => {
    const response = await api.get(`pokemon/${pokemonIndex}`);

    const tipos = response.data.types.map(item =>' '+ item.type.name).toString();
    setTypes(tipos);
  }

  useEffect(() => {
    loadTypes();

  },[]);

  return (
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
            <MeasuresKGText>69 KG</MeasuresKGText>
            <MeasuresKGWeigth>Weigth</MeasuresKGWeigth>
          </MeasuresKG>

          <MeasuresM>
            <MeasuresMText>0.7 M</MeasuresMText>
            <MeasuresMHeight>Height</MeasuresMHeight>
          </MeasuresM>
        </Measures>

        <StatsTest>Stats</StatsTest>

        <ProgressBar progress={0.9} info="HP" />
        <ProgressBar progress={0.5} info="ATK" />
        <ProgressBar progress={0.6} info="DEF" />
        <ProgressBar progress={0.8} info="SPD" />

    </Container>
  );
}

export default CardDetail;
