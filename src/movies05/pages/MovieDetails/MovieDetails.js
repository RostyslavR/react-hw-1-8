import { useState, useEffect, Suspense } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { getMovieById } from "../../services/movieDbAPI";
import { MovieInfo } from "../../components/MovieInfo/MovieInfo";
import { Link } from "../../components/App/App.styled";

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (movieId === "") {
      return;
    }

    getMovieById(movieId)
      .then((data) => {
        setMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  return (
    movie && (
      <main>
        <Link to={location.state?.from ?? "/"}> Back to the movie list</Link>
        <h1>About this movie</h1>
        <MovieInfo movie={movie} />
        <h2>Additional information</h2>
        <Link to="cast" state={{ from: location.state?.from ?? "/" }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: location.state?.from ?? "/" }}>
          Reviews
        </Link>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    )
  );
};
