import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert} from 'react-native';
import { Container, ContainerBody, PokemonList, ButtonCard, IndicatorView } from './styles';
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
  const [loadingList, setLoadingList] = useState(false);
  const [limit, setLimit] = useState(0);
  const navigation = useNavigation();


  const DetailPage = (pokemonIndex:Number) => {
    navigation.navigate('Details', {pokemonIndex});
  }

  useEffect(() => {
    loadPokemons();
  },[]);

  const loadPokemons = async() => {
    if (loadingList) return;

    setLoadingList(true);
    await api.get(`pokemon?limit=30&offset=${limit}`)
    .then((response) => {

      setPokemons(response.data.results);

      setLoading(false);
      setLoadingList(false);
      setLimit(limit + 30);
    })
    .catch((error) => {
      Alert.alert('Location error', `${(error.code, error.message)}`);
    });
  };

  const renderFooter = () => {
    if (!loadingList) return null;
    return (
      <IndicatorView>
        <ActivityIndicator size="large" color="#FFF"/>
      </IndicatorView>
    );
  };

  const renderItem = ({item}) => {
    Define a numeração do pokemon
    const url = item.url;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    return(
        <ButtonCard onPress={() => DetailPage(1)}>
          <Card name={item.name}/>
        </ButtonCard>
    ) ;
  }

  const FindPokemon = async(value) => {
    if (!value !== '') {
      console.log(value);
      const response = await api.get(`pokemon/${value}`);
      setPokemons(response.data.name);
    }
  }

  return (
    loading ? (
      <IndicatorView>
        <ActivityIndicator size="large" color="#FFF"/>
      </IndicatorView>
    ) : (
      <Container>
        <Header>POKÉMON CHALLENGE</Header>
        <ContainerBody>
          <Input
            name="search"
            placeholder="Digite o nome do Pokémon"
            icon="search"
            autoCorrect={false}
            onChangeText={(value) => FindPokemon(value.toLocaleLowerCase())}
            autoCapitalize="none"
          />
        </ContainerBody>

        <PokemonList
          numColumns={numColumns}
          data={pokemons}
          extraData={pokemonIndex}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          showsVerticalScrollIndicator={false}
          refresh={true}
          renderItem={renderItem}
          keyExtractor={(item: Pokemon) => item.name}
        />
      </Container>
    )
  );
}

export default Home;
