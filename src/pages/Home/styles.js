import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
  background: ${Colors.primary};
`;

export const ContainerBody = styled.View`
  margin: 0 10px 10px 10px;
`;

export const PokemonList = styled.FlatList`
  padding: 5px 5px;
`;
