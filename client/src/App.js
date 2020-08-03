import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState(["loading"]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then((response) => {
          setMovieList(response.data);
        })
        .catch((error) => {
          setMovieList([{ title: "server error" }]);
          console.error(error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <Router>
      <div>
        <SavedList
          list={
            [
              /* This is stretch */
            ]
          }
        />
        <Switch>
          <Route exact path="/">
            <MovieList movies={movieList} />
          </Route>
          <Route path="/movies/:id">
            <Movie />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
