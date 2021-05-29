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

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <HomeRouter />
            <QuestRouter />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
