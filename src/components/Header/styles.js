import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  padding: 40px 20px 15px;
  background: ${Colors.background};

  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Text = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 16px;
`;
