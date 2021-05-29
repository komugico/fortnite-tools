/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import * as actions from './actions';
import * as logics from './logics';
import * as C from './constants';

/* ========================================================================== */
/* Reducer                                                                    */
/* ========================================================================== */
const reducer = (state=logics.createInitState(), action) => {
    switch (action.type) {
        case actions.INIT_STATE:
            return logics.createInitState();
        default:
            return state;
    }
}

export default reducer;