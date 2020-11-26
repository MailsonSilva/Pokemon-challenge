import React from 'react';
import * as Progress from 'react-native-progress';
import Colors from '../../styles/Colors';
import { Container, Infocontainer,InfoText } from './styles';

interface ProgressBar {
  progress: number;
  info: string;
}

const ProgressBarr: React.FC<ProgressBar> = ({progress, info,...rest}) => {
  return (
    <Container {...rest}>
      <Infocontainer>
        <InfoText>{info}</InfoText>
      </Infocontainer>

      <Progress.Bar
        progress={progress}
        color={Colors.orangeLight}
        width={180}
        height={12}
        borderRadius={8}
      />
    </Container>
  );
}

export default ProgressBarr;
