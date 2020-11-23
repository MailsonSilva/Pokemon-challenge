import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  padding: 40px 20px 15px;
  background: ${Colors.background};

  display: flex;
  flex-direction: row;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 16px;
`;
