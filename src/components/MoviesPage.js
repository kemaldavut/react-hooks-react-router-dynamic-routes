import React from "react";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  return (
    <div> 
      <MoviesList movies={movies} />
      <Route exact path={match.url}>
      <h1>Movies Page</h1>
      </Route>
      <Route path={`${match.url}/:movieId`}>
      <MovieShow movies={movies} />
      </Route>
      </div>
  );
}
export default MoviesPage;
