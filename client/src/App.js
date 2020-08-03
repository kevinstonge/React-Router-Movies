import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";

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
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <Route>
      <div>
        <SavedList
          list={
            [
              /* This is stretch */
            ]
          }
        />
        <div>Replace this Div with your Routes</div>
      </div>
    </Route>
  );
};

export default App;
