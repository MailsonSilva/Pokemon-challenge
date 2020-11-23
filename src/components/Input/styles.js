import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${Colors.tertiary};
  margin-top: 15px;
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
  color: ${Colors.grayHard};
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
  color: ${Colors.grayHard}
`;
