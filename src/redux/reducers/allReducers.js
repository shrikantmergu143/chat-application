/* eslint-disable */
import { TabLabel } from "../../components/common/Constant";
import { ActionTypes } from "../actions";

export const initialData = {
    activeTab: TabLabel?.ChatsTabPanel,
}

export const allReducers = (state = initialData, action) => {
    switch(action.type) {
        case ActionTypes.SET_STORE_CURRENT_TAB_STATE:
            return{
                ...state,
                activeTab:action?.payload
            }
        default:
        return state;
  }
};
