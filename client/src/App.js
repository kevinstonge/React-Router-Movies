import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import MovieCard from "./Movies/MovieCard";

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then((response) => {
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (e, id, title) => {
    e.preventDefault();
    e.stopPropagation();
    if (saved.filter((movie) => movie.id === id).length === 0) {
      setSaved([...saved, { id: id, title: title }]);
    }
  };

  const removeFromSavedList = (e, id, title) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved(saved.filter((movie) => movie.id !== id));
  };

  // This is stretch. Prevent the same movie from being "saved" more than once

  return (
    <Router>
      <div>
        <SavedList list={[...saved]} />
        <Switch>
          <Route exact path="/">
            <MovieList
              movies={movieList}
              addToSavedList={addToSavedList}
              removeFromSavedList={removeFromSavedList}
              saved={saved}
            />
          </Route>
          <Route path="/movies/:id">
            <MovieCard
              detailed={true}
              addToSavedList={addToSavedList}
              removeFromSavedList={removeFromSavedList}
              saved={saved}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
