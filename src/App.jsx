import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Home } from './Home';
import { Header } from './Header';

const useStyles = makeStyles({
  app: {
    fontFamily: 'sans-serif',
  },
});

export const App = () => {
  const styles = useStyles();
  return (
    <div className={styles.app}>
      <Header />
      <Home />
    </div>
  );
};
