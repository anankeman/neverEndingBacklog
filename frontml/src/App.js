import './App.css';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import Questions from './components/Questions';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#990099',
    },
    secondary: {
      main: '#5ABAB7',
    },
  }
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <AppBar position="relative">
        <Toolbar>
          
          <Typography variant="h6" color="inherit" noWrap>
            NeverEnding Study backlog
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route exact path="/" element={<Loader />}/>
        <Route path="/questions" element={<Questions />}/>
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
