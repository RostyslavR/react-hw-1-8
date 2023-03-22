import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCreditsById } from "../../services/movieDbAPI";
import { List } from "./Cast.styled";
import noImage from "../../services/noImage.png";

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCreditsById(movieId).then((response) => setCast(response.cast));
  }, [movieId]);

  return (
    <List>
      {cast.length !== 0 &&
        cast.map((actor) => (
          <li key={actor.id}>
            <h3>{actor.name}</h3>
            <p>{actor.character}</p>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : noImage
              }
              alt="poster"
              width="100"
            />
          </li>
        ))}
      {cast.length === 0 && <p>We don't know anyone from the cast</p>}
    </List>
  );
};
