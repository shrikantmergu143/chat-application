/* eslint-disable */
import { TabLabel } from "../../components/common/Constant";
import { ActionTypes } from "../actions";
import firebase from "firebase/compat/app"

export const initialData = {
    activeTab: TabLabel?.ChatsTabPanel,
    userDetails:{},
    access_token:"",
    usersList:{
        data:[],
        page:1,
        pageSize:10
    },
    toast:{message:"", type:""},
    ReceivedFriend:{
        data:[],
        page:1,
        pageSize:10
    },
    ModalPopup:{
        show:"",
        data:null,
        callBackModal:()=>{},
    }
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
                firebase.auth().signOut()
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
        case ActionTypes?.SET_DEFAULT_TOASTER:
            return{
                ...state,
                toast:[]
            }
        case ActionTypes?.SET_STORE_RECEIVED_FRIEND_REQUEST:
            return{
                ...state,
                ReceivedFriend:action?.payload,
            }
        case ActionTypes?.SET_SHOW_MODAL:
            return{
                ...state,
                ModalPopup:action?.payload?action?.payload:initialData.ModalPopup,
            }
        case ActionTypes?.SET_STORE_TOASTER_LISTS:
            return{
                ...state,
                toast:action?.payload
            }
        default:
        return state;
  }
};
