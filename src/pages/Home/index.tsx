import React from 'react';
import { Container, ContainerBody } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';


const Home: React.FC = () => {
  return (
    <Container>
      <Header>POKÉMON CHALLENGE</Header>
      <ContainerBody>
        <Input
          name="search"
          placeholder="Digite o nome do Pokémon"
          icon="search"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </ContainerBody>
    </Container>
  );
}

export default Home;
