import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';

import {
  BeehiveHeartPhoto,
  HeartSmilePhoto,
  HeartZipPhoto,
  QuestionPhoto,
  FormPhoto,
} from '../../assets/index';

import NavItem from '../../components/NavItem';
import BackgroundImage from '../../assets/BackgroundMenu.png';

import { Container, Icon, Menu, Background } from './styles';

const Links: React.FC = () => {
  const navigation = useNavigation();
  const validPaths = [
    {
      link: 'Quem pode doar?',
      children: 'Quem pode doar?',
      icon: BeehiveHeartPhoto,
    },
    { link: 'Curiosidades', children: 'Curiosidades', icon: HeartSmilePhoto },
    { link: 'Quero doar!', children: 'Quero doar', icon: HeartZipPhoto },
    {
      link: 'Deixe seu contato!',
      children: 'Deixe seu contato',
      icon: FormPhoto,
    },
    {
      link: 'Dúvidas frequentes',
      children: 'Dúvidas frequentes',
      icon: QuestionPhoto,
    },
    { link: 'Desenvolvedores', children: 'Contato', icon: BeehiveHeartPhoto },
    {
      link: 'Depoimento',
      children: 'Deixe seu depoimento',
      icon: HeartSmilePhoto,
    },
    {
      link: 'Depoimentos',
      children: 'Veja os depoimentos',
      icon: FormPhoto,
    },
  ];

  return (
    <>
      <Background source={BackgroundImage}>
        <Container>
          {validPaths.map((item, index) => {
            return (
              <>
                <Menu key={`${uuidv4()}${index}`}>
                  <Icon source={item.icon} key={`${uuidv4()}${index}`} />
                  <NavItem
                    key={`${uuidv4()}${item.link}`}
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
