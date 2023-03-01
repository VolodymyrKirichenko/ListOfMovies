import React, { FC } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia, MenuItem,
  Typography,
} from '@mui/material';
import { Movie } from '../typeDefs/typedefs';
import { GenreOfFilm } from '../GenreOfFilm/GenreOfFilm';
import { CardMenu } from '../CardMenu/CardMenu';

interface Props {
  movie: Movie,
  onDelete: () => void,
}

export const MovieCardSelected: FC<Props> = (props) => {
  const { onDelete, movie } = props;

  return (
    <Card sx={{ display: 'flex', marginBottom: 1, position: 'relative' }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={movie.image}
        alt={movie.title}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {movie.releaseDate}
          </Typography>
        </CardContent>

        <Box sx={{ display: 'flex', pl: 2 }}>
          <Typography variant="subtitle1" component="div">
            Genre:
          </Typography>
          {movie.genres.map((genre) => (
            <GenreOfFilm key={genre.id} genreName={genre.name} />
          ))}
        </Box>

        <Box sx={{ display: 'flex', p: 2 }}>
          <Typography variant="subtitle1" component="div">
            Length:
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {movie.runtime}
          </Typography>
        </Box>
      </Box>

      <CardMenu>
        <MenuItem onClick={onDelete}>
          Delete
        </MenuItem>
      </CardMenu>
    </Card>
  );
};
