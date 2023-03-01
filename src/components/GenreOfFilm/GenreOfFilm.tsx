import { FC } from 'react';
import { Typography } from '@mui/material';

interface Props {
  genreName: string;
}

export const GenreOfFilm: FC<Props> = (props) => {
  const { genreName } = props;

  return (
    <Typography variant="subtitle1" color="text.secondary" component="div">
      (
      {genreName}
      )
    </Typography>
  );
};
