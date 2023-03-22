import { Box } from "../Common/Box.styled";
export const Button = ({ onClick }) => {
  return (
    <Box>
      <button type="button" onClick={onClick}>
        Load more
      </button>
    </Box>
  );
};
