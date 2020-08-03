import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => (
        <Link to={`/movies/${movie.id}`} key={`{movieDetails-${index}`}>
          <MovieCard id={movie.id} addToSavedList={props.addToSavedList} />
        </Link>
      ))}
    </div>
  );
};

// function MovieDetails({ movie }) {
//   const { title, director, metascore } = movie;
//   return (
//     <Link to={`/movies/${movie.id}`}>
//       <div className="movie-card">
//         <h2>{title}</h2>
//         <div className="movie-director">
//           Director: <em>{director}</em>
//         </div>
//         <div className="movie-metascore">
//           Metascore: <strong>{metascore}</strong>
//         </div>
//       </div>
//     </Link>
//   );
// }

export default MovieList;
