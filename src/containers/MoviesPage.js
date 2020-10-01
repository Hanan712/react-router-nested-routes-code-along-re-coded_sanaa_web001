// .src/containers/MoviesPage.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from './MovieShow';
import MoviesNew from './MoviesNew';

const MoviesPage = ({ match, movies }) => (
  <div> */
  const MoviesPage = ({ match, movies }) =>
  <div>
  <Switch>
    <MoviesList movies={movies} />
  </div>
  <Route path={`${match.url}/new`} component={MoviesNew} />
   <Route path={`${match.url}/:movieId`} component={MovieShow}/>
   <Route exact path={match.url} render={() => (
     <h3>Please select a Movie from the list.</h3>
   )}/>
 </Switch>
</div>;
)

export default MoviesPage
