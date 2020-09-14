import React from 'react';
import {
  Container,
  Content,
  Footer,
  Header,
} from 'rsuite';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import NavTop from '../navtop/container';
import Modal from '../modal/container';
import Main from '../main/container';
import Settings from '../settings/container';

export default function CRouter() {
  return (
    <Router>
      <Container className="full-height">
        <Header>
          <NavTop />
        </Header>
        <Content>
          <Switch>
            <Route path="/settings" component={Settings} />
            <Route path="/" component={Main} />
          </Switch>
        </Content>
        <Footer className="footer-text">
          <small>
            Проект сделан в учебных целях
          </small>
        </Footer>
        <Modal />
      </Container>
    </Router>
  );
}
