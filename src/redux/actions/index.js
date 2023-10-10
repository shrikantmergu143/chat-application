export const ActionTypes = {
    SET_STORE_CURRENT_TAB_STATE: "SET_STORE_CURRENT_TAB_STATE",
    SET_STORE_CURRENT_LOGIN_USER: "SET_STORE_CURRENT_LOGIN_USER",
    SET_STORE_USERS_LIST:"SET_STORE_USERS_LIST",
    SET_DEFAULT_TOASTER:"SET_DEFAULT_TOASTER",
    SET_STORE_TOASTER_LISTS:"SET_STORE_TOASTER_LISTS",
    SET_STORE_RECEIVED_FRIEND_REQUEST:"SET_STORE_RECEIVED_FRIEND_REQUEST",
    SET_SHOW_MODAL:"SET_SHOW_MODAL",
    SET_STORE_OPEN_FRIEND_DETAILS:"SET_STORE_OPEN_FRIEND_DETAILS",
    SET_STORE_CHAT_LIST:"SET_STORE_CHAT_LIST",
    SET_STORE_MESSAGE_ITEM_LIST:"SET_STORE_MESSAGE_ITEM_LIST",
}
export const setStoreTabState = (payload) =>{
    return{ type:ActionTypes?.SET_STORE_CURRENT_TAB_STATE, payload:payload }  //User Login
}
export const setStoreLoginUser = (payload) =>{
    return{ type:ActionTypes?.SET_STORE_CURRENT_LOGIN_USER, payload:payload }  //User Login
}
export const setStoreUsersList = (payload) =>{
    return{ type:ActionTypes?.SET_STORE_USERS_LIST, payload:payload }  //User Login
}
export const setDefaultToaster = (payload) =>{ // use to set empty toast list if is found undefined
    return { type:ActionTypes?.SET_DEFAULT_TOASTER, payload:payload, }
}
export const setStoreReceivedFriendRequest = (payload) =>{ // use to set empty toast list if is found undefined
    return { type:ActionTypes?.SET_STORE_RECEIVED_FRIEND_REQUEST, payload:payload, }
}
export const setShowModal = (payload) =>{ // use to set empty toast list if is found undefined
    return { type:ActionTypes?.SET_SHOW_MODAL, payload:payload, }
}
export const setShowToast = (payload) =>{ // is used for Show and Remove toast by passing the payload
    return {
        type:ActionTypes?.SET_STORE_TOASTER_LISTS,
        payload:payload
    }
}
export const setStoreOpenFriendDetails = (payload) =>{
    return {
        type:ActionTypes?.SET_STORE_OPEN_FRIEND_DETAILS,
        payload:payload
    }
}
export const setStoreChatList = (payload) =>{ // use to set empty toast list if is found undefined
    return { type:ActionTypes?.SET_STORE_CHAT_LIST, payload:payload, }
}
export const setStoreMessageItemList = (payload) =>{ // use to set empty toast list if is found undefined
    return { type:ActionTypes?.SET_STORE_MESSAGE_ITEM_LIST, payload:payload, }
}