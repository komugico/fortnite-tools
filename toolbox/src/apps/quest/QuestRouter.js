import React from 'react';
import { Route } from "react-router-dom";
import { Provider } from 'react-redux';

import QuestListContainer from './containers/QuestListContainer';
import QuestListStore from './stores/questlist/store';

class QuestRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route exact path="/quest/list">
                    <Provider store={QuestListStore}>
                        <QuestListContainer />
                    </Provider>
                </Route>
            </div>
        )
    }
}

export default QuestRouter;