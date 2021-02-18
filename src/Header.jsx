import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  header: {
    background: '#0181FF',
    color: '#FFFFFF',
  },
  title: {
    flexGrow: 2,
    fontSize: '40px',
  },
  titleBar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '125px',
    margin: '0 10px',
  },
  trial: {
    background: '#1E1E1E',
    height: '25px',
    width: '175px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeader: {
    background: '#1E1E1E',
    height: '100px',
    fontSize: '25px',
  }
});

export const Header = ({ page }) => {
  const styles = useStyles();
  return (
    <div className={styles.header}>
      <div className={styles.titleBar}>
        <div className={styles.title}>DEMO Streaming</div>
        <div>Log in</div>
        <div className={styles.trial}>Start your free trial</div>
      </div>
      <div className={styles.subHeader}>
        Popular {page}
        <Link to='/'>Home</Link>
      </div>
    </div>
  )
};
