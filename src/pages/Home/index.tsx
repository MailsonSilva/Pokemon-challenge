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
let newLimit = 0;

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingList, setLoadingList] = useState(false);
  const [limit, setLimit] = useState(30);
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
    await api.get(`pokemon?limit=${limit}`)
    .then((response) => {
      setPokemons(response.data.results);
    })
    .catch((error) => {
      Alert.alert('Location error', `${(error.code, error.message)}`);
    });
    setLoading(false);
    setLoadingList(false);
    newLimit = limit + 30;
    setLimit(newLimit);
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
    // Define a numeração do pokemon
    const url = item.url;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    // Pega a imagem do pokemon de acordo com sua numeração
    return(
        <ButtonCard onPress={() => DetailPage(pokemonIndex)}>
            <Card name={item.name}/>
        </ButtonCard>
    ) ;
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
          renderItem={renderItem}
          keyExtractor={(item: Pokemon) => item.name}
        />
      </Container>
    )
  );
}

export default Home;
