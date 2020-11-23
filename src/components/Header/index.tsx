import React from 'react';
import { Image } from 'react-native';
import { Container, TextInput } from './styles';
import Logo from '../../assets/logo.png';

const Header: React.FC = ({...rest}) => {
  return (
    <Container>
        <Image source={Logo}  resizeMode="stretch" />
      <TextInput {...rest}/>
    </Container>
  );
}

export default Header;
