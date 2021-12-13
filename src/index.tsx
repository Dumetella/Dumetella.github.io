import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyles from './styles/global';
import DarkTheme from './styles/Themes/DarkTheme';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </ React.StrictMode>,
  document.getElementById('root')
);

