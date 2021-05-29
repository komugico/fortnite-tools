/* ========================================================================== */
/* Import                                                                     */
/* ========================================================================== */
import * as C from './constants';

export const createInitState = () => {
    return {
        user: null,
        quests: [],
        choicedQuest: null,
    }
}

export const getQuests = () => {
    let quests = [
        {
            id: 1,
            title: "dummy quest 1"
        },
        {
            id: 2,
            title: "dummy quest 2"
        },
        {
            id: 3,
            title: "dummy quest 3"
        },
        
    ];
    alert("未実装");
    return quests;
}

export const seachQuest = (quests, id) => {
    let quest = null;
    for (let idx = 0; idx < quests.length; idx++) {
        if (quests[idx].id === id) {
            quest = objectCopy(quests[idx]);
        }
    }
    return quest;
}

export const objectCopy = (object) => {
    return JSON.parse(JSON.stringify(object));
}