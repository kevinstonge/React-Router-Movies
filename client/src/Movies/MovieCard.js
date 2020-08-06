import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieCard = (props) => {
  const [movie, setMovie] = useState();
  let { id } = useParams();
  if (id === undefined) {
    id = props.id;
  }
  useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => {
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        {props.detailed === true ? (
          <Fragment>
            <h3>Actors</h3>

            {stars.map((star) => (
              <div key={star} className="movie-star">
                {star}
              </div>
            ))}
          </Fragment>
        ) : null}
      </div>
      {props.saved.filter((e) => e.id === movie.id).length === 0 ? (
        <div
          className="save-button"
          onClick={(e) => props.addToSavedList(e, movie.id, title)}
        >
          Save
        </div>
      ) : (
        <div
          className="unsave-button"
          onClick={(e) => props.removeFromSavedList(e, movie.id, title)}
        >
          Unsave
        </div>
      )}
    </div>
  );
};

export default MovieCard;
