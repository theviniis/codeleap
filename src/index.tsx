import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles';
import { ThemeProvider } from 'styled-components';
import { themes } from './themes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.light}>
      <App />
      <GlobalStyles/>
    </ThemeProvider>
  </React.StrictMode>
);
