import React from 'react';
import { useNavigation } from '@react-navigation/native';

import NavItem from '../../components/NavItem';
import { Container, Icon, Menu } from './styles';

const Links: React.FC = () => {
  const navigation = useNavigation();
  const validPaths = [
    { link: 'WhoCanDonate', children: 'Quem pode doar?', icon: 'Test1' },
    { link: 'Curiosities', children: 'Curiosidades', icon: 'Test2' },
    { link: 'IwantToDonate', children: 'Quero doar', icon: 'Test3' },
    { link: 'LetYourContact', children: 'Deixe seu contato', icon: 'Test4' },
    { link: 'FAQ', children: 'Dúvidas frequentes', icon: 'Test5' },
    { link: 'Contact', children: 'Contato', icon: 'Test6' },
  ];
  return (
    <Container>
      {validPaths.map((item) => {
        return (
          <>
            <Menu>
              <Icon>{item.icon}</Icon>
              <NavItem
                key={item.link}
                onPress={() => navigation.navigate(item.link)}>
                {item.children}
              </NavItem>
            </Menu>
          </>
        );
      })}
    </Container>
  );
};

export default Links;
