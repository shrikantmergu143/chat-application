/* eslint-disable */
import { TabLabel } from "../../components/common/Constant";
import { ActionTypes } from "../actions";
import firebase from "firebase/compat/app"

export const initialData = {
    activeTab: TabLabel?.ChatsTabPanel,
    userDetails:{},
    access_token:"",
    usersList:[],
    toast:[],
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
        case ActionTypes?.SET_STORE_TOASTER_LISTS:
            const toaster = [];
            if(action?.payload?.id){
                state?.toast?.map((item)=>{
                    if(item?.id !== action?.payload?.id){
                        toaster?.push(item)
                    }
                })
            }else{
                const data = state?.toast?.filter((item)=>item?.title==action?.payload?.title);
                state?.toast?.map((item)=>toaster?.push(item));
                if(data?.length === 0){
                    const uid = actions.generateUUID();
                    toaster?.push({
                        ...action?.payload,
                        id:uid,
                    })
                }
            }
            return{
                ...state,
                toast:toaster
            }
        default:
        return state;
  }
};
