import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/router';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './Theme/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <CssBaseline></CssBaseline>
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
