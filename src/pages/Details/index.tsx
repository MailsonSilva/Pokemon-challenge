import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import api from '../../services/api';

import { Container, PokemonDetail, ContainerCard } from './styles';
import { Text } from 'react-native';

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

    setpokemonDetail(response.data);

    console.log(response.data.results);
  }

  useEffect(() => {
    loadDetail();
    // console.log(types);
  },[]);

  const renderItem = ({item}) => {
    // Define a numeração do pokemon
    const url = item.url;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    // Pega a imagem do pokemon de acordo com sua numeração
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`;

    return(
        <ContainerCard>
            {/* <Card
              pokemonIndex={pokeIndex}
              img={imageUrl}
              name={item.name}
            /> */}
        </ContainerCard>
    ) ;
  }

  return (
    <Container>
      <Header>POKÉMON CHALLENGE</Header>

      <PokemonDetail
          // columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={1}
          data={pokemonDetail}
          extraData={pokeIndex}
          refreshing={true}
          renderItem={({item})=>{
            <Text>
              {item.name}
            </Text>
          }}
          keyExtractor={(item: Pokemon) => item.name}
        />
    </Container>
  );
}

export default Details;
