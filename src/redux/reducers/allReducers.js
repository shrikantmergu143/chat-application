/* eslint-disable */
import { TabLabel } from "../../components/common/Constant";
import { ActionTypes } from "../actions";

export const initialData = {
    activeTab: TabLabel?.ChatsTabPanel,
    userDetails:{},
    access_token:"",
    usersList:[],
}

export const allReducers = (state = initialData, action) => {
    switch(action.type) {
        case ActionTypes.SET_STORE_CURRENT_TAB_STATE:
            return{
                ...state,
                activeTab:action?.payload
            }
        case ActionTypes.SET_STORE_CURRENT_LOGIN_USER:
            if(!action?.payload){
                return initialData;
            }
            return{
                ...state,
                userDetails:action?.payload,
                access_token:action?.payload?.token
            }
        case ActionTypes.SET_STORE_USERS_LIST:
            return{
                ...state,
                usersList:action?.payload
            }
        default:
        return state;
  }
};
