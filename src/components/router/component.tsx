import React from 'react';
import {
  Container,
  Content,
  Footer,
  Header,
  FlexboxGrid,
  Icon,
  IconButton,
} from 'rsuite';

import { NameScreen } from '../../store/navigation/types';
import NavTop from '../navtop/container';
import Modal from '../modal/container';
import Main from '../main/container';
import Settings from '../settings/container';

export interface propsRouterType {
  screen: NameScreen;
}

const getScreen = (screen: NameScreen) => {
  switch (screen) {
    case NameScreen.Main:
      return <Main />;
    case NameScreen.Settings:
      return <Settings />;
    default:
      return <Main />;
  }
};

export function CRouter(props: propsRouterType) {
  const { screen } = props;
  return (
    <Container className="full-height">
      <Header>
        <NavTop />
      </Header>
      <Content>
        {getScreen(screen)}
      </Content>
      <Footer className="footer">
        <FlexboxGrid justify="space-between" align="middle">
          <FlexboxGrid.Item colspan={2}>
            <IconButton
              appearance="primary"
              color="blue"
              size="lg"
              circle
              icon={<Icon icon="github" />}
              target="_blank"
              rel="noopener"
              href="//github.com/Aleksandr09332/project-manager"
            />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={8} className="text-align-right">
            <small>
              Проект сделан в учебных целях
            </small>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Footer>
      <Modal />
    </Container>
  );
}
