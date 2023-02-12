
import {AddPostActionType, OnPostChangeActionType} from "./profile-reducer";

type DialogType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    message: string
}
export type DialogsPageType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageBody: string
}
export type SendMessageActionType = {
    type: typeof SEND_MESSAGE
}
export type UpdateNewMessageBodyActionType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}
export type ActionType = AddPostActionType
    | OnPostChangeActionType
    | SendMessageActionType
    | UpdateNewMessageBodyActionType

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
const initialState =  {
    dialogsData: [
        {id: '1', name: "Aziz"},
        {id: '2', name: "Abzal"},
        {id: '3', name: "Nurgissa"},
        {id: '4', name: "Akzhan"},
        {id: '5', name: "Ernar"},
        {id: '6', name: "Julia"},
        {id: '7', name: "Turgan"}
    ],
    messagesData: [
        {id: '1', message: "Hello my friend!"},
        {id: '2', message: "How is your day?"},
        {id: '3', message: "Today is a great day! isn't it?"},
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    {id: '4', message: body}
                ],
                newMessageBody: ''
            }
        default:
            return state;
    }
}

export const sendMessageAC = (): SendMessageActionType =>
    ({type: SEND_MESSAGE})
export const updateNewMessageBodyAC = (body: string): UpdateNewMessageBodyActionType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
