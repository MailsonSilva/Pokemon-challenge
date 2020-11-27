import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import CardDetail from '../../components/CardDetail';
import { ScrollView } from 'react-native';
import Card from '../../components/Card';
import {
  Container,
  ContainerCard,
  Icon,
  BackButton,
  TextBack,
  ContainerCard2,
  ContainerCardFamily,
  FamilyText,
  PokemonList
} from './styles';

interface Pokemon {
  pokemonIndex: number;
  name: string;
  img: string;
};

let numColumns=2;

const Details: React.FC = () => {
  const [pokemonDetail, setpokemonDetail] = useState<Pokemon>();
  const [pokeFamily, setPokeFamily] = useState<Pokemon[]>([]);
  const route = useRoute();
  const navigation = useNavigation();

  const pokeIndex = route.params.pokemonIndex;

  const imageUrl0 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`;

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

  const renderItem = ({item}) => {
    // Define a numeração do pokemon
    const url = item.url;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    // Pega a imagem do pokemon de acordo com sua numeração
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;


    return(
      <Card
        pokemonIndex={pokemonIndex}
        img={imageUrl}
        name={item.name}
      />
    ) ;
  }

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

      <ScrollView keyboardShouldPersistTaps="handled" style={{margin: 10}}>
        <ContainerCard>
          <CardDetail
            pokemonIndex={pokeIndex}
            img={imageUrl0}
            name={pokemonDetail}
          />

          <ContainerCardFamily>
            <FamilyText>Family Tree</FamilyText>
          </ContainerCardFamily>

          <PokemonList
            numColumns={numColumns}
            data={pokeFamily}
            extraData={pokeIndex}
            showsVerticalScrollIndicator={false}
            // renderItem={renderItem}
            keyExtractor={(item: Pokemon) => item.name}
          />

          <ContainerCard2>

          </ContainerCard2>
        </ContainerCard>
      </ScrollView>
    </Container>
  );
}

export default Details;
