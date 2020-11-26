import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  align-items: center;
  padding: 10px;
  width: 60%;
  height: 380px;
  border-radius: 10px;
  background: ${Colors.grayEasy};
  overflow: hidden;
`;

export const TextContainerCount = styled.View`
  margin-right: auto;
`;

export const TextCount = styled.Text`
  font-size: 20px;
  font-family: RobotoSlab_500Medium;
  color: ${Colors.grayHard};
`;

export const ImageContainer = styled.View`
  border-radius: 100px;
  margin-top: -30px;
`;

export const ImagePoke = styled.Image`
  width: 150px;
  height: 150px;
`;

export const TextContainerName = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const TextNamePokemon = styled.Text`
  font-size: 26px;
  margin-top: -10px;
  font-family: RobotoSlab_500Medium;
  color: ${Colors.orangeLight};
`;

export const Measures = styled.View`
  align-items: center;
  flex-direction: row;
  width: 70%;
  justify-content: space-between;
  margin-top: 10px;
`;

export const MeasuresKG = styled.View`
  align-items: center;
`;

export const MeasuresKGText = styled.Text`
  font-size: 20px;
  color: ${Colors.fill};
  font-family: RobotoSlab_400Regular;
`;

export const MeasuresKGWeigth = styled.Text`
  font-size: 16px;
  color: ${Colors.grayHard};
  font-family: RobotoSlab_400Regular;
`;

export const MeasuresM = styled.View`
  align-items: center;
`;

export const MeasuresMText = styled.Text`
  font-size: 20px;
  color: ${Colors.fill};
  font-family: RobotoSlab_400Regular;
`;

export const MeasuresMHeight = styled.Text`
  font-size: 16px;
  color: ${Colors.grayHard};
  font-family: RobotoSlab_400Regular;
`;

export const StatsTest = styled.Text`
  font-size: 20px;
  margin: 5px;
  margin-bottom: 15px;
  color: ${Colors.fill};
  font-family: RobotoSlab_500Medium;
`;
