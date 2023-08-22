export const ActionTypes = {
    SET_STORE_CURRENT_TAB_STATE: "SET_STORE_CURRENT_TAB_STATE",
}
export const setStoreTabState = (payload) =>{
    return{ type:ActionTypes?.SET_STORE_CURRENT_TAB_STATE, payload:payload }  //User Login
}