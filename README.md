# React-Coding-Challenge

View home, movies, and series information.

## Usage

These instructions will get you a copy of this project on your local machine up and running for development and testing purposes.

### Installation Overview

1. run npm install in root directory
1. run npm start
1. visit localhost:8080 in your browseer

### Notes

I had issues with routing the different views with React Router in the two to four hour time span. As a result, I am currently rendering the home, movies, and series pages at the same time. I also did not spin up a server to fetch the json file and style as much to the screens due to aforementioned issues.

- How did you decide on the technical and architectural choices used as part of your solution?

I used functional React components since there wasn't any really complicated state to account for. I also used material UI hooks for styling since they provide an object notation that is easily extensible.

I decided to use React Router to route between the home, movies, and series pages to provide navigation between the different views.

I would have spun up an express server to fetch json file, which would have included error handling and a state for loading.

- Are there any improvements you could make to your submission?

I would troubleshoot the React Router issue to render the views separately. I would have also added the express server and styled the components more closely to the given screens.

- What would you do differently if you were allocated more time?

I would choose another approach to render the different views such as conditional rendering instead of using React Router.
