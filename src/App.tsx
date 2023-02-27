import { FC } from 'react';
import {
  CssBaseline,
  Container, Box,
} from '@mui/material';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Navigation } from './components/navigation/Navigation';
import { Home } from './pages/Home/Home';
import { Settings } from './pages/Settings/Settings';
import { Recommend } from './pages/Recommend/Recommend';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />

      <Box sx={{
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
      >
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="recommend" element={<Recommend />} />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
};
