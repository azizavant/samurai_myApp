import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

debugger
export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer
})
export const store = createStore(rootReducer, composeWithDevTools())

export type AppRootStateType = ReturnType<typeof rootReducer>