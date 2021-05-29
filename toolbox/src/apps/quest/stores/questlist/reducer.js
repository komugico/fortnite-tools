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
        case actions.GET_QUESTS:
            return {
                ...state,
                quests: logics.getQuests(),
            }
        case actions.CHOICE_QUEST:
            let quest = logics.seachQuest(state.quests, action.questId);
            alert("Quest #" + quest.id + " (" + quest.title + ") was clicked.");
            return {
                ...state,
                choicedQuest: quest,
            };
        default:
            return state;
    }
}

export default reducer;