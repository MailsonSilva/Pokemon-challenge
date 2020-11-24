import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerCard = styled.TouchableOpacity`
  padding: 15px 45px;
  margin: 6px 8px;
  border-radius: 10px;
  background: ${Colors.tertiary};
`;

export const TextContainerCount = styled.View`
  position: absolute;
  margin: 10px;
`;

export const TextCount = styled.Text`
  font-size: 16px;
  color: ${Colors.white};
`;

export const ImagePoke = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 10px;
`;

export const TextContainerName = styled.View`
  align-items: center;
`;

export const TextName = styled.Text`
  font-size: 16px;
  color: ${Colors.white};
`;

