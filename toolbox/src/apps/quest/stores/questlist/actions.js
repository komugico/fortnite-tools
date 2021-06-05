/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import axios from 'axios';

/* ========================================================================== */
/* Action Types                                                               */
/* ========================================================================== */
export const INIT_STATE = '@quest/list/init_state';
export const GET_QUESTS = '@quest/list/get_quests';
export const SET_QUESTS = '@quest/list/set_quests';
export const CHOICE_QUEST = '@quest/list/choice_quest';
export const ASYNC_GET_QUESTS = '@quest/list/async_get_quests';

/* ========================================================================== */
/* Actions                                                                    */
/* ========================================================================== */
export const act_init_state = () => ({
    type: INIT_STATE,
});

export const act_get_quests = () => ({
    type: GET_QUESTS,
});

export const act_set_quests = (quests) => ({
    type: SET_QUESTS,
    quests: quests,
});

export const act_choice_quest = (questId) => ({
    type: CHOICE_QUEST,
    questId: questId,
});

/* ========================================================================== */
/* Asynchronous Actions                                                       */
/* ========================================================================== */
export const act_async_get_quests = () => {
    return dispatch => {
        axios
        .get('https://fortnite-json-server.herokuapp.com/posts', {
            
        })
        .then(res => {
            alert("success");
            console.dir(res.data);
        })
        .catch(err => {
            alert("error");
            console.dir(err);
        });
    }
};