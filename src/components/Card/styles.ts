import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
  background: red;
`;

export const ContainerCard = styled.TouchableOpacity`
  margin: 10px 0 0;
  padding: 20px;
  background: ${Colors.tertiary};
`;

export const ImagePoke = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 90px;
  margin-top: 26px;
  align-self: center;
`;

export const TextCount = styled.Text`
  font-size: 16px;
  color: ${Colors.white};
`;

export const TextName = styled.Text`
  font-size: 16px;
  color: ${Colors.white};
`;

