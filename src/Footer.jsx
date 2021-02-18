import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import facebookwhite from '../assets/social/facebook-white.svg';
import twitterwhite from '../assets/social/twitter-white.svg';
import instagramwhite from '../assets/social/instagram-white.svg';
import appstore from '../assets/store/app-store.svg';
import playstore from '../assets/store/play-store.svg';
import windowsstore from '../assets/store/windows-store.svg';

const useStyles = makeStyles({
  footer: {
    background: '#1E1E1E',
    color: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  link: {
    borderRight: 'solid 1px #FFFFFF',
    paddingRight: '5px',
    margin: '0 10px',
  },
  socialStorContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export const Footer = () => {
  const styles = useStyles();
  return (
    <div className={styles.footer}>
      <div className={styles.linkContainer}>
        <div className={styles.link}>Home</div>
        <div className={styles.link}>Terms and Conditions</div>
        <div className={styles.link}>Privacy Policy</div>
        <div className={styles.link}>Collection Statement</div>
        <div className={styles.link}>Help</div>
        <div className={styles.link}>Manage Account</div>
      </div>
      <div>
        Copyright 2016 Demo Streaming. All Rights Reserved.
      </div>
      <div className={styles.socialStorContainer}>
        <div>
          <img src={facebookwhite} height={50} width={50}/>
          <img src={twitterwhite} height={50} width={50}/>
          <img src={instagramwhite} height={50} width={50}/>
        </div>
        <div>
          <img src={appstore} height={50} width={150}/>
          <img src={playstore} height={50} width={150}/>
          <img src={windowsstore} height={50} width={150}/>
        </div>
      </div>
    </div>
  );
};
