export const ActionTypes = {
    SET_STORE_CURRENT_TAB_STATE: "SET_STORE_CURRENT_TAB_STATE",
    SET_STORE_CURRENT_LOGIN_USER: "SET_STORE_CURRENT_LOGIN_USER",
    SET_STORE_USERS_LIST:"SET_STORE_USERS_LIST",
    SET_DEFAULT_TOASTER:"SET_DEFAULT_TOASTER",
    SET_STORE_TOASTER_LISTS:"SET_STORE_TOASTER_LISTS",
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
export const setShowToast = (payload) =>{ // is used for Show and Remove toast by passing the payload
    return {
        type:ActionTypes?.SET_STORE_TOASTER_LISTS,
        payload:{
            ...payload,
            action:payload?.action?.length>0?payload?.action:[]
        },
    }
}