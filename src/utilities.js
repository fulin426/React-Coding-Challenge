export const getEntriesAfterYear = (entriesArray, year) => {
  return entriesArray.filter((entry) => entry.releaseYear >= year);
}

export const sortEntriesByTitle = (entriesArray) => {
  return entriesArray.sort((a, b) => a.title - b.title);
}

export const getMovieEntries = (entriesArray) => {
  return entriesArray.filter((entry) => entry.programType === 'movie');
}

export const getSeriesEntries = (entriesArray) => {
  return entriesArray.filter((entry) => entry.programType === 'series');
}

export const getTopResults = (entriesArray) => {
  const results = entriesArray.length > 21 ? entriesArray.slice(0, 21) : entriesArray;
  return results;
}