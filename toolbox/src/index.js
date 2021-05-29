/* ========================================================================== */
/* React-Redux                                                                */
/* ========================================================================== */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

/* ========================================================================== */
/* App Routers                                                                */
/* ========================================================================== */

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
