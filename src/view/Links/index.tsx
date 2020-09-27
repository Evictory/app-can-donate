import React from 'react';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';

import NavItem from '../../components/NavItem';

const Links: React.FC = () => {
  const navigation = useNavigation();
  const validPaths = [
    { link: 'WhoCanDonate', children: 'Quem pode doar?' },
    { link: 'Curiosities', children: 'Curiosidades' },
    { link: 'IwantToDonate', children: 'Quero doar' },
    { link: 'LetYourContact', children: 'Deixe seu contato' },
    { link: 'FAQ', children: 'Dúvidas frequentes' },
    { link: 'Contact', children: 'Contato' },
  ];
  return (
    <Container>
      {validPaths.map((item) => {
        return (
          <NavItem
            key={item.link}
            onPress={() => navigation.navigate(item.link)}>
            {item.children}
          </NavItem>
        );
      })}
    </Container>
  );
};

export default Links;
