import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
    <Router>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    </Router>
, document.getElementById('root'));


