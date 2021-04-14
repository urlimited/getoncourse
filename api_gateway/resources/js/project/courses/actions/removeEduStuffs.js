import * as actions from "../constants/actions.constant";

const addEduStuff = (eduStuff) => ({
    type: actions.ACTION_ADD_EDU_STUFFS,
    eduStuff
});

export default addEduStuff;
