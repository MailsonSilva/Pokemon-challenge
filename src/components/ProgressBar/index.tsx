import React, { useEffect, useState } from 'react';
import * as Progress from 'react-native-progress';
import Colors from '../../styles/Colors';
import { Container, Infocontainer,InfoText ,InfoValue,ValueText,ContainerProgress} from './styles';

interface ProgressBar {
  progress: Number;
  info: string;
}


const ProgressBarr: React.FC<ProgressBar> = ({progress, info,...rest}) => {
  const [progressA, setProgressA] = useState(0);
  const [indeterminate, setIndeterminate] = useState(true);

  useEffect(()=>{
    animate();
  },[]);

  const animate = () => {
    let aux: number=0;
    setTimeout(() => {
      setIndeterminate(false);
      setInterval(() => {
        if (aux < progress) {
          aux += 1;
        }
        setProgressA(progress);
      }, 500);
    }, 1500);
  }

  return (
    <Container {...rest}>
      <Infocontainer>
        <InfoText>{info}</InfoText>
      </Infocontainer>

      <ContainerProgress>
        <Progress.Bar
          progress={progressA*0.01}
          indeterminate={indeterminate}
          color={Colors.orangeLight}
          width={180}
          height={12}
          borderRadius={8}
          borderWidth={0}
          unfilledColor={Colors.fill}

        />
        <InfoValue>
          <ValueText progressA={progressA}>{progressA}/100</ValueText>
        </InfoValue>
      </ContainerProgress>


    </Container>
  );
}

export default ProgressBarr;
