import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput, Icon } from './styles';
import Colors from '../../styles/Colors';


interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <Icon
        name={icon}
        size={20}
      />
      <TextInput placeholderTextColor={Colors.grayHard} {...rest} />
    </Container>
  );
};

export default Input;
