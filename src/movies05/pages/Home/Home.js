import { useState, useEffect } from "react";
import { getTrandingMovies } from "../../services/movieDbAPI";
import { List } from "../../components/List/List";

export const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrandingMovies().then((data) => setMovieList(data.results));
  }, []);

  return (
    <main>
      <h1>Trending in today</h1>
      <List movies={movieList} />
    </main>
  );
};
