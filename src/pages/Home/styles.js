import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
  background: ${Colors.primary};
`;

export const ContainerBody = styled.View`
  margin: 0 10px;
`;

export const ButtonCard = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const PokemonList = styled.FlatList`
    margin: 5px;
`;
