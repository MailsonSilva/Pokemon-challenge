import React, { useEffect, useState } from 'react';
import { Container, ContainerBody } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Card from '../../components/Card';
import { ScrollView, Alert, FlatList, Text } from 'react-native';
import api from '../../services/api';


interface Pokemon {
  count: number;
  next: string;
  previous: null,
  results: [
        {
          name: string,
          url: string
        }
  ]
};

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    api.get()
    .then((response) => {
      setPokemons(response.data);
    })
    .catch((error) => {
      Alert.alert('Location error', `${(error.code, error.message)}`);
    });
  },[]);

  return (
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

        {/* <FlatList
          data={pokemons}
          keyExtractor={pokemon => pokemon.results[0].name}
          renderItem={({item: pokemon}) => {
            <Text>{pokemon.results[0].name}</Text>
          }}
        /> */}

        <ScrollView>
          {pokemons.map((pokemon, index)=>{
            return(
            <Text key={index}>{pokemon.results[index].name}</Text>

            )
          })}
        </ScrollView>

      </ContainerBody>
    </Container>
  );
}

export default Home;
