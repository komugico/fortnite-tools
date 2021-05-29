/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import * as C from './constants';

export const createInitState = () => {
    return {
        user: null,
        quests: [],
    }
}

export const getQuests = () => {
    let quests = [{
        id: 0,
        title: "dummy quest"
    }];
    alert("未実装");
    return quests;
}