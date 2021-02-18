import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Home } from './Home';

const useStyles = makeStyles({
  app: {
    fontFamily: 'sans-serif',
  },
});

export const App = () => {
  const styles = useStyles();
  return (
    <div className={styles.app}>
      <Home page={'Titles'}/>
    </div>
  );
};
