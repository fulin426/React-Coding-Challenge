import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ResourceTile } from './ResourceTile';
import { getEntriesAfterYear, sortEntriesByTitle, getMovieEntries, getTopResults } from './utilities';

import sample from '../feed/sample.json';

const useStyles = makeStyles({
  movies: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export const Movies = () => {
  const styles = useStyles();
  const entries = sample.entries;
  const entriesAfter2010 = getEntriesAfterYear(entries, 2010);
  const movieEntries = getMovieEntries(entriesAfter2010);
  const moviesResults = getTopResults(movieEntries);
  const sortedMovies = sortEntriesByTitle(moviesResults);
  return (
    <div className={styles.movies}>
      {sortedMovies.map((movie, index) => <ResourceTile entry={movie} key={index} />)}
    </div>
  )
}
