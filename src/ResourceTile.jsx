import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  resourceTile: {
    color: '#1E1E1E',
    height: 250,
    width: 150,
    display: 'flex',
    flexDirection: 'column',
    margin: 5,
  },
  title: {
    height: 10,
  }
});

export const ResourceTile = ({ entry }) => {
  const styles = useStyles();
  return (
    <div className={styles.resourceTile}>
      <img src={entry.images['Poster Art'].url} height={250} width={150}/>
      <div className={styles.title}>{entry.title}</div>
    </div>
  );
};
