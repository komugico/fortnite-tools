/* ========================================================================== */
/* Action Types                                                               */
/* ========================================================================== */
export const INIT_STATE = '@quest/list/init_state';
export const GET_QUESTS = '@quest/list/get_quests';
export const CHOICE_QUEST = '@quest/list/choice_quest';

/* ========================================================================== */
/* Actions                                                                    */
/* ========================================================================== */
export const act_init_state = () => ({
    type: INIT_STATE,
});

export const act_get_quests = () => ({
    type: GET_QUESTS,
});

export const act_choice_quest = (questId) => ({
    type: CHOICE_QUEST,
    questId: questId,
});