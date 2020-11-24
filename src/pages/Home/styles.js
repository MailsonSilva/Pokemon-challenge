import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Pokemon } from './index';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
  background: ${Colors.primary};
`;

export const ContainerBody = styled.View`
  margin: 0 10px 0 10px;
`;

export const PokemonList = styled.FlatList`
  padding: 10px 0;
`;
