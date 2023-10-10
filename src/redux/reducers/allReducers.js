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
    },
    openFriendDetails:{friend_id:""},
    chatList:{
        data:[],
        page:1,
        totalPages:0,
        totalRecords:0,
    },
    MessageList:{},
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
        case ActionTypes?.SET_STORE_OPEN_FRIEND_DETAILS:
            if(!action?.payload){
                return{
                    ...state,
                    openFriendDetails:initialData?.openFriendDetails
                }
            }
            return{
                ...state,
                openFriendDetails:action?.payload
            }
        case ActionTypes?.SET_STORE_CHAT_LIST:
            return{
                ...state,
                chatList:action?.payload
            }
        case ActionTypes?.SET_MESSAGE_INITIAL:
            return{
                ...state,
                MessageList:action?.payload
            }
        case ActionTypes?.SET_STORE_MESSAGE_ITEM_LIST:
            const friend = action?.payload?.friend_id;
            const MessageState = state?.MessageList[friend];
            const FriendMessage = [];
            if(MessageState?.length){
                MessageState?.map((item)=>{
                    const findMessage = action?.payload?.data?.find(item1=>item1?._id === item?._id);
                    if(findMessage){
                        FriendMessage.push(findMessage);
                    }else{
                        FriendMessage.push(item);
                    }
                })
            }else{
                action?.payload?.data?.map((item)=>{
                    FriendMessage?.push(item);
                })
            }
            return{
                ...state,
                MessageList:{
                    ...state?.MessageList,
                    [friend]:FriendMessage
                }
            }
        default:
        return state;
  }
};
