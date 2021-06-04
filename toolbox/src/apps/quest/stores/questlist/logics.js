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
            title: "dummy quest 1",
            points: [
                { x: 80, y: 170, location: "location 1", imgUrl: "https://img.gamewith.jp/img/77694f694ca0421f849c10be0e1c394a.jpg" },
                { x: 0, y: 0, location: "location 2", imgUrl: "https://img.gamewith.jp/img/77694f694ca0421f849c10be0e1c394a.jpg" },
                { x: -80, y: -170, location: "location 3", imgUrl: "https://img.gamewith.jp/img/77694f694ca0421f849c10be0e1c394a.jpg" },
            ],
        },
        {
            id: 2,
            title: "dummy quest 2",
            points: [
                { x: 60, y: 120, location: "location 1", imgUrl: "https://img.gamewith.jp/img/77694f694ca0421f849c10be0e1c394a.jpg" },
                { x: -30, y: 50, location: "location 2", imgUrl: "https://img.gamewith.jp/img/77694f694ca0421f849c10be0e1c394a.jpg" },
            ],
        },
        {
            id: 3,
            title: "dummy quest 3",
            points: [
                { x: 40, y: -40, location: "location 1", imgUrl: "https://img.gamewith.jp/img/77694f694ca0421f849c10be0e1c394a.jpg" },
                { x: 12, y: 50, location: "location 2", imgUrl: "https://img.gamewith.jp/img/77694f694ca0421f849c10be0e1c394a.jpg" },
                { x: -30, y: -120, location: "location 3", imgUrl: "https://img.gamewith.jp/img/77694f694ca0421f849c10be0e1c394a.jpg" },
            ],
        },
    ];
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