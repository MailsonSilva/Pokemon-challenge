import React, { useEffect, useState } from 'react';
import { Container, ContainerBody, PokemonList } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Card from '../../components/Card';
import { ScrollView, Alert, FlatList, Text, TouchableOpacity } from 'react-native';
import api from '../../services/api';


export interface Pokemon {
  // count: number;
  // next: string;
  // previous: null,
  // results: [
  //       {
  //         name: string,
  //         url: string
  //       }
  // ]

    name: string;
    url: string;

};

let pokemonIndex = 1, counter = 1;

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    api.get()
    .then((response) => {
      setPokemons(response.data.results);
    })
    .catch((error) => {
      Alert.alert('Location error', `${(error.code, error.message)}`);
    });
  },[]);

  const renderItem = (data) => {
    // Define a numeração do pokemon
    const url = data.item.url;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    // Pega a imagem do pokemon de acordo com sua numeração
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    return(
        <TouchableOpacity onPress={() => {}}>
            <Card
              pokemonIndex={pokemonIndex}
              img={imageUrl}
              name={data.item.name}
            />
        </TouchableOpacity>
    ) ;
}

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


        {/* <Card pokemon={pokemons}/> */}

        {/* <ScrollView>
          {pokemons.map((pokemon, index)=>{
            return(
            // <Text key={index}>{pokemon.name}</Text>
              <Card key={index} pokemon={pokemon}/>
            )
          })}
        </ScrollView> */}

      </ContainerBody>

      <PokemonList
          numColumns={2}
          data={pokemons}
          extraData={pokemonIndex}
          refreshing={true}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />

    </Container>
  );
}

export default Home;
