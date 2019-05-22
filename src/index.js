import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import App from './App';
import Album from './components/Album';
import { AlbumProvider } from './AlbumContext';

ReactDOM.render(
    <AlbumProvider>
        <Router>
            <App path="/" />
            <Album path="album" />
        </Router>
    </AlbumProvider>,
    document.getElementById('root')
);
