import React from 'react';
import * as Progress from 'react-native-progress';
import { Container } from './styles';

const ProgressBarr: React.FC = () => {
  return (
    <Container>
      <Progress.Bar progress={0.3} width={200} height={12} borderRadius={8}/>
    </Container>
  );
}

export default ProgressBarr;
