import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;

export const Infocontainer = styled.Text`
  flex: 1;
`;

export const InfoText = styled.Text`
  font-size: 20px;
  color: ${Colors.fill};
  font-family: RobotoSlab_400Regular;
`;
