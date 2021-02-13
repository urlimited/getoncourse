import * as actions from "../constants/actions.constant";

const setCriteria = (criteria) => ({
    type: actions.ACTION_SET_CRITERIA,
    criteria
});

export default setCriteria;