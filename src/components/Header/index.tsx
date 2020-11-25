import React from 'react';
import { Image } from 'react-native';
import { Container, Text } from './styles';
import Logo from '../../assets/logo.png';

const Header: React.FC = ({...rest}) => {
  return (
    <Container>
        <Image source={Logo}  resizeMode="stretch" />
      <Text {...rest}/>
    </Container>
  );
}

export default Header;
