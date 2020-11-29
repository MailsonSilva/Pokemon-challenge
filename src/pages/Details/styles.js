import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import Colors from '../../styles/Colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${Colors.primary};
`;

export const Icon = styled(Feather)`
  margin-right: 5px;
  color: ${Colors.orangeLight};
`;

export const TextBack = styled.Text`
  font-size: 16px;
  font-family: RobotoSlab_400Regular;
  color: ${Colors.orange};
`;

export const ContainerCard = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 10px;
`;

export const BackButton = styled.TouchableOpacity`
  margin: 10px 0 0 15px;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
`;

export const ContainerCardFamily = styled.View`
  width: 100%;
  margin: 25px 0;
`;

export const FamilyText = styled.Text`
  color: ${Colors.fill};
  font-size: 24px;
  font-family: RobotoSlab_400Regular;
`;

export const ContainerFamily = styled.View`
  margin: 5px;
`;

export const IndicatorView = styled.View`
  flex:1;
  align-Self: center;
  justify-content: center;
`;
