import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { Tile } from './Tile';
import { Header } from './Header';
import { Footer } from './Footer';
import { Movies } from './Movies';
import { Series } from './Series';

const useStyles = makeStyles({
  app: {
    fontFamily: 'sans-serif',
    position: 'relative',
    minHeight: '100vh',
  },
  tileContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
});

const RESOURCE_TYPES = ['movies', 'series'];

export const App = () => {
  const styles = useStyles();
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <div className={styles.tileContainer}>
          {RESOURCE_TYPES.map((resourceType, index) => <Link to={`/${resourceType.toLowerCase()}`} key={index}><Tile resourceType={resourceType} /></Link>)}
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/series" component={Series} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
