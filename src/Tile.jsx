import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import placeholder from '../assets/placeholder.png';

const useStyles = makeStyles({
  tile: {
    background: '#1E1E1E',
    backgroundImage: `url(${placeholder})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: '#FFFFFF',
    height: 250,
    width: 150,
    margin: 5,
  },
  subTitle: {
    height: 10,
    color: '#1E1E1E',
    display: 'flex',
    justifyContent: 'flex-end',
  }
});

export const Tile = ({ resourceType }) => {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.tile}>Popular {resourceType}</div>
      <div className={styles.subTitle}>{resourceType}</div>
    </div>
  );
};
