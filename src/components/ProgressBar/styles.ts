import styled, {css} from 'styled-components/native';
import Colors from '../../styles/Colors';

interface ContainerProps {
  progressA: Number;
}

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

export const ContainerProgress = styled.View`
  justify-content: center;
`;

export const InfoValue = styled.View`
  position: absolute;
`;

export const ValueText = styled.Text<ContainerProps>`
  font-size: 14px;
  color: ${Colors.fill};
  font-family: RobotoSlab_400Regular;
  margin-left: ${props => props.progressA}px;
`;

