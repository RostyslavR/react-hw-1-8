import { Box } from "../../components/App/App.styled";
import noImage from "../../services/noImage.png";

export const MovieInfo = ({ movie }) => {
  const {
    title,
    overview,
    genres,
    release_date,
    first_air_date,
    poster_path,
    vote_average,
  } = movie;

  const userScore = Math.round(vote_average * 10);

  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : noImage;

  return (
    <>
      <Box>
        <img src={imgUrl} alt={title} width="200" />
        <div>
          <h2>
            {title} {(first_air_date || release_date).slice(0, 4)}
          </h2>

          <p>User Score: {userScore}%</p>

          <h3>Overview</h3>
          <p>{overview}</p>

          <h3>Genres</h3>
          <p>{genres.map(({ name }) => name).join(", ")}</p>
        </div>
      </Box>
      <hr />
    </>
  );
};
