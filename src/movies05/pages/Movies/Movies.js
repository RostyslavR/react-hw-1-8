import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar/SeachBar";
import { getMoviesByQuery } from "../../services/movieDbAPI";
import { List } from "../../components/List/List";

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([]);

  const handlerSearch = (q) => {
    setSearchParams({ q: q });
  };

  useEffect(() => {
    const q = searchParams.get("q");
    if (q === null || q === "") {
      setMovieList([]);
      return;
    }
    getMoviesByQuery(q).then((data) => setMovieList(data.results));
  }, [searchParams]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main>
        <h1>Find a movie</h1>
        <SearchBar
          query={searchParams.get("q") ?? ""}
          onSubmit={handlerSearch}
        />
        {movieList.length !== 0 && <List movies={movieList} />}
      </main>
    </Suspense>
  );
};
