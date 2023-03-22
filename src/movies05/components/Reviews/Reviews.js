import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewsById } from "../../services/movieDbAPI";

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviewsById(movieId).then((response) =>
      setReviews(response.results)
    );
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.length === 0 ? (
          <li>
            <p>We don`t find reviews for you</p>
          </li>
        ) : (
          reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
