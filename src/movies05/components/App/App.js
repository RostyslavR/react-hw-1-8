import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// import { Home } from 'pages/Home/Home';
// import { Movies } from 'pages/Movies/Movies';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import { Cast } from 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';

import { Container, Header, Link } from "./App.styled";

const Home = lazy(() =>
  import("../../pages/Home/Home").then((module) => {
    return { ...module, default: module.Home };
  })
);

const Movies = lazy(() =>
  import("../../pages/Movies/Movies").then((module) => {
    return { ...module, default: module.Movies };
  })
);
const MovieDetails = lazy(() =>
  import("../../pages/MovieDetails/MovieDetails").then((module) => {
    return { ...module, default: module.MovieDetails };
  })
);
const Cast = lazy(() =>
  import("../Cast/Cast").then((module) => {
    return { ...module, default: module.Cast };
  })
);
const Reviews = lazy(() =>
  import("../Reviews/Reviews").then((module) => {
    return { ...module, default: module.Reviews };
  })
);

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/"> Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
