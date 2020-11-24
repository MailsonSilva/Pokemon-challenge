import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerCard = styled.Text`
  margin: 10px 0 0;
  padding: 20px;
  flex-direction: row;
  background: ${Colors.tertiary}
`;

export const TextCount = styled.Text`
  font-size: 16px;
  color: ${Colors.white};
`;

export const TextName = styled.Text`
  font-size: 16px;
  color: ${Colors.white};
`;

