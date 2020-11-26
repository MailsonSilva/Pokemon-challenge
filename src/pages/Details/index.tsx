import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import CardDetail from '../../components/CardDetail';


import { Container, ContainerCard,Icon, BackButton,TextBack} from './styles';
import { ScrollView } from 'react-native';

interface Pokemon {
  pokemonIndex: number;
  name: string;
  img: string;
};

const Details: React.FC = () => {
  const [pokemonDetail, setpokemonDetail] = useState<Pokemon>();
  const route = useRoute();
  const navigation = useNavigation();

  const pokeIndex = route.params.pokemonIndex;

  const loadDetail = async() => {
    const response = await api.get(`pokemon/${pokeIndex}/`);
    // setpokemonDetail(response.data.forms);
    const pokemonName = response.data.forms.map(item => item.name).toString();
    setpokemonDetail(pokemonName);
  }

  useEffect(() => {
    loadDetail();
  },[]);

  const backHome = () => {
    navigation.goBack();
  }

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`;

  return (
    <Container>
      <Header>POKÉMON CHALLENGE</Header>

      <BackButton onPress={backHome} >
        <Icon
          name='arrow-left'
          size={20}
        />
        <TextBack>Back</TextBack>
      </BackButton>

      <ScrollView keyboardShouldPersistTaps="handled">
        <ContainerCard>
            <CardDetail
              pokemonIndex={pokeIndex}
              img={imageUrl}
              name={pokemonDetail}
            />
        </ContainerCard>
      </ScrollView>
    </Container>
  );
}

export default Details;
