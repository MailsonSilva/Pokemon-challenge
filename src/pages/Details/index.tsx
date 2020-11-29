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
  ContainerFamily,
  IndicatorView
} from './styles';

interface Pokemon {
  name: string;
};

const Details: React.FC = () => {
  const [pokeFamily, setPokeFamily] = useState([]);
  const [loading, setLoading] = useState(false);
  const route = useRoute<Pokemon | any>();
  const navigation = useNavigation();

  const pokeIndex = route.params.pokemonIndex;

  useEffect(() => {
    loadDetail();
  },[]);

  const loadDetail = async() => {
    if (loading) return;

    setLoading(true);
    const response = await api.get(`pokemon-species/${pokeIndex}/`);
    const evolvesFrom = response.data.evolves_from_species;

    if (!evolvesFrom) {
      const response = await api.get(`evolution-chain/${pokeIndex}/`);

      const evolutions = response.data.chain.evolves_to;
      let evolutionTo2 = evolutions[0].evolves_to[0].species.name;
      const evolutionTo1 = evolutions[0].species.name;
      let nameEvolutions :Pokemon[] | any = [];
      nameEvolutions.push(evolutionTo1, evolutionTo2);

      setPokeFamily(nameEvolutions);
    }
    // else {
    //   const evolves_from = evolvesFrom.name;
    //   const response = await api.get(`evolution-chain/${pokeIndex}/`);

    //   const evolutions = response.data.chain.evolves_to;
    //   const evolutionTo2 = evolutions[0].evolves_to[0].species.name;
    //   let nameEvolutions :Pokemon[] | any = [];
    //   nameEvolutions.push(evolves_from, evolutionTo2);

    //   console.log(evolves_from);
    //   setPokeFamily(nameEvolutions);
    // }

    setLoading(false);
  }

  const backHome = () => {
    navigation.goBack();
  }

  return (
    loading ? (
      <IndicatorView>
        <ActivityIndicator size="large" color="red"/>
      </IndicatorView>
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

        <ScrollView showsVerticalScrollIndicator={false} style={{margin: 10}}>
          <ContainerCard>
            <CardDetail pokemonIndex={pokeIndex}/>

            <ContainerCardFamily>
              <FamilyText>Family Tree</FamilyText>
            </ContainerCardFamily>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {
                pokeFamily.map((item) =>(
                  <ContainerFamily key={item}>
                    <Card name={item}/>
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
