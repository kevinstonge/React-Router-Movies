import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => (
        <Link to={`/movies/${movie.id}`} key={`{movieDetails-${index}`}>
          <MovieCard
            id={movie.id}
            addToSavedList={props.addToSavedList}
            removeFromSavedList={props.removeFromSavedList}
            saved={props.saved}
          />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
