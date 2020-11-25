import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  background: ${Colors.grayEasy};
  overflow: hidden;
`;

export const TextContainerCount = styled.View`
  margin-right: auto;
`;

export const TextCount = styled.Text`
  font-size: 16px;
  color: ${Colors.grayHard};
`;

export const ImageContainer = styled.View`

`;

export const ImagePoke = styled.Image`
  width: 100px;
  height: 100px;
`;

export const TextContainerName = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const TextName = styled.Text`
  font-size: 14px;
  color: ${Colors.fill};
`;

export const TextNamePokemon = styled.Text`
  font-size: 14px;
  color: ${Colors.orangeLight};
`;

export const TextContainerType = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 2px;
`;

export const TextType = styled.Text`
  font-size: 14px;
  color: ${Colors.fill};
`;

export const TextTypePokemon = styled.Text`
  font-size: 12px;
  color: ${Colors.orangeLight};
`;
