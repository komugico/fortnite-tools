/* ========================================================================== */
/* React-Redux                                                                */
/* ========================================================================== */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

/* ========================================================================== */
/* App Routers                                                                */
/* ========================================================================== */
import HomeRouter from './apps/home/HomeRouter';
import QuestRouter from './apps/quest/QuestRouter';

/* ========================================================================== */
/* Leaflet                                                                    */
/* ========================================================================== */
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <HomeRouter />
            <QuestRouter />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
