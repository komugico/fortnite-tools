  
import React from 'react';
import { Route } from "react-router-dom";

import HomeContainer from './containers/HomeContainer.js';

class HomeRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route exact path="/">
                    <HomeContainer />
                </Route>
            </div>
        )
    }
}

export default HomeRouter;