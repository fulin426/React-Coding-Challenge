import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ResourceTile } from './ResourceTile';
import { getEntriesAfterYear, sortEntriesByTitle, getSeriesEntries, getTopResults } from './utilities';

import sample from '../feed/sample.json';

const useStyles = makeStyles({
  series: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export const Series = () => {
  const styles = useStyles();
  const entries = sample.entries;
  const entriesAfter2010 = getEntriesAfterYear(entries, 2010);
  const seriesEntries = getSeriesEntries(entriesAfter2010);
  const seriesResults = getTopResults(seriesEntries);
  const sortedSeries = sortEntriesByTitle(seriesResults);
  return (
    <div className={styles.series}>
      {sortedSeries.map((movie, index) => <ResourceTile entry={movie} key={index} />)}
    </div>
  )
}
