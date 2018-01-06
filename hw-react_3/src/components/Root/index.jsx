import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

const Root = () => (
    <BrowserRouter basename="Homeworks/hw-react_3/build/">
        <App />
    </BrowserRouter>
);

export default Root;
