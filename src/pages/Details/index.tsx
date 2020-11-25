import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import api from '../../services/api';

import { Container, ContainerCard } from './styles';

interface Pokemon {
  pokemonIndex: number;
  name: string;
  img: string;
};

const Details: React.FC = () => {
  const [pokemonDetail, setpokemonDetail] = useState<Pokemon[]>([]);
  const route = useRoute();

  const pokeIndex = route.params.pokemonIndex;

  const loadDetail = async() => {
    const response = await api.get(pokeIndex + '/');

    setpokemonDetail(response.data.results);

    console.log(pokemonDetail);
  }

  useEffect(() => {
    loadDetail();       // console.log(types);
  },[]);

  // const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`;

  return (
    <Container>
      <Header>POKÉMON CHALLENGE</Header>

      <ContainerCard>
          {/* <Card
            pokemonIndex={pokeIndex}
            img={imageUrl}
            name={'nome'}
          /> */}
      </ContainerCard>
    </Container>
  );
}

export default Details;
