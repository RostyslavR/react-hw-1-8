import { Item } from './Item';

export const List = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Item {...movie} />
        </li>
      ))}
    </ul>
  );
};
