export const API_AUTH_LOGIN = "auth/login";
export const API_AUTH_REGISTER = "auth/register";
export const API_USER_GET = "user/get"
export const API_GET_USERS = "friend/users"
export const API_UPDATE_USER = "user/update" //Post API
export const API_FRIEND_REQUEST = "friend/friend-request" //get API status
export const API_ACCEPTED_FRIENDS = "friend/accepted-friends" //get
export const API_UPDATE_FRIEND_REQUEST = "friend/friend-request" // put method with friend_id/status - friendRequestId, status
export const API_RECEIVED_FRIEND_REQUESTS = "friend/received-friend-requests" // get method with status
export const API_FRIEND_SEND_REQUEST = "friend/send_request" // Post method /6515b372e883a94a368044ca/send
export const API_SEND_MESSAGE = "message" // Post method /6515b372e883a94a368044ca/send
export const API_GET_MESSAGES = "message" // Get method /6515b372e883a94a368044ca/get_message
export const API_GET_CHAT_LIST = "message/chat-list" // Get method /6515b372e883a94a368044ca/get_message
export const API_GET_FRIEND_DETAILS = "friend" // Get 6515b372e883a94a368044ca/get_details

export const App_url = {
    Home:"/",
    Register:"/register",
    Login:"/login",
    Message:"/message",
    PageNotFound:"*",
    Dashboard:"/dashboard"
}

export const TabLabel = {
    CreateTabPanel:"tab-content-create-chat",
    FriendsTabPanel:"tab-content-friends",
    ChatsTabPanel:"tab-content-chats",
    NotificationsTabPanel:"tab-content-notifications",
    SettingsTabPanel:"tab-content-settings",
}