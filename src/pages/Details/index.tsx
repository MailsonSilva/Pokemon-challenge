import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import CardDetail from '../../components/CardDetail';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import Card from '../../components/Card';
import {
  Container,
  ContainerCard,
  Icon,
  BackButton,
  TextBack,
  ContainerCardFamily,
  FamilyText,
  ContainerFamily
} from './styles';

interface Pokemon {
  params: {
    pokemonIndex: number;
  }

  name: string;
  img: string;
};

let numColumns=2;

const Details: React.FC = () => {
  const [pokemonDetail, setpokemonDetail] = useState<Pokemon>();
  const [pokeFamily, setPokeFamily] = useState<Pokemon[]>([
    {params:{pokemonIndex:1}, name: 'a', img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`},
    {params:{pokemonIndex:2}, name: 'b', img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`},
    {params:{pokemonIndex:3}, name: 'c', img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png`},
    {params:{pokemonIndex:4}, name: 'd', img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`},
    {params:{pokemonIndex:5}, name: 'e', img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png`},
    {params:{pokemonIndex:6}, name: 'f', img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png`},
  ]);
  const [loading, setLoading] = useState(true);
  const route = useRoute<Pokemon | any>();
  const navigation = useNavigation();

  const pokeIndex = route.params.pokemonIndex;

  const imageUrl0 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`;

  // const loadDetail = async() => {
  //   const response = await api.get(`pokemon/${pokeIndex}/`);
  //   // setpokemonDetail(response.data.forms);
  //   const pokemonName = response.data.forms.map(item => item.name).toString();
  //   setpokemonDetail(pokemonName);
  //   console.log(pokemonName);

  // }

  useEffect(() => {
  //   // loadDetail();
    setLoading(false);
  },[pokeIndex]);

  const backHome = () => {
    navigation.goBack();
  }

  return (
    loading ? (
      <ActivityIndicator size="large" />
    ) : (
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

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {
                pokeFamily.map((item, index) =>(
                  <ContainerFamily  key={item.name}>
                    <Card
                      pokemonIndex={item.params.pokemonIndex}
                      img={item.img}
                      name={item.name}
                    />
                  </ContainerFamily>
                ))
              }
            </ScrollView>
          </ContainerCard>
        </ScrollView>
      </Container>
    )
  );
}

export default Details;
