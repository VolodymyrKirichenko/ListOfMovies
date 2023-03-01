import {
  Card,
  CardContent,
  CardMedia, MenuItem,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import { CardMenu } from '../CardMenu/CardMenu';
import { Movie } from '../typeDefs/typedefs';

const CardIndo = styled(CardContent)(({ theme }) => ({
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}));

interface Props {
  movie: Movie,
  onCardSelect: () => void,
}

export const MovieCard: FC<Props> = (props) => {
  const { onCardSelect, movie } = props;

  return (
    <Card sx={{ maxWidth: 200, height: 400, position: 'relative' }}>
      <CardMenu>
        <MenuItem onClick={onCardSelect}>
          Add
        </MenuItem>
      </CardMenu>

      <CardMedia
        component="img"
        height="260"
        image={movie.image}
        alt={movie.title}
      />

      <CardIndo>
        <Typography variant="h6" gutterBottom>
          {movie.title}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ 'font-size': 12 }}
          gutterBottom
        >
          {movie.releaseDate}
        </Typography>
      </CardIndo>
    </Card>
  );
};
