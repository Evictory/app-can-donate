import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';

import NavItem from '../../components/NavItem';
import BackgroundImage from '../../assets/BackgroundMenu.png';

import { Container, Icon, Menu, Background } from './styles';

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
    <>
      <Background source={BackgroundImage}>
        <Container>
          {validPaths.map((item) => {
            return (
              <>
                <Menu key={uuidv4()}>
                  <Icon key={uuidv4()}>{item.icon}</Icon>
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
      </Background>
    </>
  );
};

export default Links;
