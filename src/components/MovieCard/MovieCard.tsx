import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { FC } from 'react';
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
    <Card sx={{ maxWidth: 180, position: 'relative' }}>
      <CardMenu onCardSelect={onCardSelect} />

      <CardMedia
        component="img"
        height="250"
        image={movie.image}
        alt={movie.title}
      />

      <CardIndo>
        <Typography variant="h6" gutterBottom>
          {movie.title}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          {movie.releaseDate}
        </Typography>
      </CardIndo>
    </Card>
  );
};
