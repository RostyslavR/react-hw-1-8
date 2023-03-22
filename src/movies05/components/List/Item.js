import { Link, useLocation } from 'react-router-dom';

export const Item = ({ id, title }) => {
  const location = useLocation();

  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <p>{title}</p>
    </Link>
  );
};
