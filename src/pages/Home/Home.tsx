import { FC } from 'react';
import {
  Box,
  Grid,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { movies } from '../../stories/stub';
import { MovieCardSelected } from '../../components/MovieCardSelected/MovieCardSelected';

export const Home: FC = () => {
  const SelectedMovies = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    // height: 'calc(100vh - 140px)',
    height: 600,
    position: 'sticky',
    top: theme.spacing(2),
    overflow: 'scroll',
  }));

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3}>
            Filters section
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper elevation={3}>
            <Box sx={{ flexGrow: 1, padding: 1, height: 5000 }}>
              <Grid container spacing={2}>
                {movies.map((movie) => (
                  <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                    <MovieCard movie={movie} onCardSelect={() => ({})} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <SelectedMovies elevation={3}>
            {movies.map((movie) => (
              <MovieCardSelected key={movie.id} movie={movie} onDelete={() => ({})} />
            ))}
          </SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  );
};
