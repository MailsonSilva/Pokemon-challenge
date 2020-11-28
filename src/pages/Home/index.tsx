import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { Container, ContainerBody, PokemonList, ButtonCard } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Card from '../../components/Card';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

export interface Pokemon {
  name: string;
  url: string;
};

let pokemonIndex = 1, numColumns=3;

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const DetailPage = (pokemonIndex:Number) => {
    navigation.navigate('Details', {pokemonIndex});
  }

  const loadPokemons = async() => {
    await api.get(`pokemon/`)
    .then((response) => {
      setPokemons(response.data.results);
    })
    .catch((error) => {
      Alert.alert('Location error', `${(error.code, error.message)}`);
    });
    setLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  },[]);


  const renderItem = ({item}) => {
    // Define a numeração do pokemon
    const url = item.url;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    // Pega a imagem do pokemon de acordo com sua numeração
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

    return(
        <ButtonCard onPress={() => DetailPage(pokemonIndex)}>
            <Card
              pokemonIndex={pokemonIndex}
              img={imageUrl}
              name={item.name}
            />
        </ButtonCard>
    ) ;
  }

  return (
    loading ? (
      <ActivityIndicator size="large" />
    ) : (
      <Container>
        <Header>POKÉMON CHALLENGE</Header>
        <ContainerBody>
          <Input
            name="search"
            placeholder="Digite o nome do Pokémon"
            icon="search"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </ContainerBody>

        <PokemonList
          numColumns={numColumns}
          data={pokemons}
          extraData={pokemonIndex}
          // refreshing={true}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item: Pokemon) => item.name}
        />
      </Container>
    )
  );
}

export default Home;
