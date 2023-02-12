
import {ActionType} from "./dialogs-reducer";
import {PostType} from "./oop.store";

export type ProfilePageType = {
    myPostsData: PostType[]
    newPostText: string
}
export type AddPostActionType = {
    type: typeof ADD_POST
}
export type OnPostChangeActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newPost: string
}

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const initialState = {
        myPostsData: [
            {id: '1', message: "hi, how are you?", likesCount: "2"},
            {id: '2', message: "today is my birthday!", likesCount: "15"},
            {id: '3', message: "what are you doing?", likesCount: "45"},
        ],
        newPostText: 'it-karate'
    }

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            return  {
                ...state,
                myPostsData: [...state.myPostsData, {
                    id: '4',
                    message: state.newPostText,
                    likesCount: '3'
                }],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPost,
            }
        default:
            return state;
    }
}

export const addPostAC = (): AddPostActionType =>
    ({type: ADD_POST})
export const onPostChangeAC = (text: string): OnPostChangeActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newPost: text})