import React from 'react';
import { Button, Container, Icon, Menu } from 'semantic-ui-react';

export const Navigation: React.FC = React.memo(() => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item
          header
        >
          <Icon name='home' />
        </Menu.Item>

        <Menu.Item>
          Activities
        </Menu.Item>

        <Menu.Item>
          <Button content="Create Activity" positive />
        </Menu.Item>
      </Container>
    </Menu>
  );
})
