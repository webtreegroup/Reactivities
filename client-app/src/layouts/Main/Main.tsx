import React from 'react';
import { Navigation } from 'core/components';
import { ActivitiesList } from 'shared/components';
import styles from './Main.module.css';
import { Container, Grid } from 'semantic-ui-react';

export const Main: React.FC = React.memo(() => {
  return (
    <div className={styles.wrapper}>
      <Navigation />

      <Container>
        <Grid>
          <Grid.Column width="10">
            <ActivitiesList />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
});
