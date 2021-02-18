import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { Footer } from './Footer';
import { Tile } from './Tile';
import { Movies } from './Movies';
import { Series } from './Series';

const RESOURCE_TYPES = ['Movies', 'Series'];

const useStyles = makeStyles({
  tileContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
});

export const Home = ({ page }) => {
  const styles = useStyles();
  return (
    <Router>
      <Link to='/'></Link>
      <div className={styles.tileContainer}>
        {RESOURCE_TYPES.map((resourceType, index) => <Link to={`/${resourceType.toLowerCase()}`} key={index}><Tile resourceType={resourceType} /></Link>)}
      </div>
      <Movies/>
      <Series/>
      <Footer />
      <Switch>
        <Route path='/'>
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/series'>
          <Series />
        </Route>
      </Switch>
    </Router>
  );
};
