export const ActionTypes = {
    SET_STORE_CURRENT_TAB_STATE: "SET_STORE_CURRENT_TAB_STATE",
    SET_STORE_CURRENT_LOGIN_USER: "SET_STORE_CURRENT_LOGIN_USER",
    SET_STORE_USERS_LIST:"SET_STORE_USERS_LIST"
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