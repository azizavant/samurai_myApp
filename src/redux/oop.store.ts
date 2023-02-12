import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

type DialogType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    message: string
}
export type PostType = {
    id: string
    message: string
    likesCount: string
}
type DialogsPageType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageBody: string
}
type ProfilePageType = {
    myPostsData: PostType[]
    newPostText: string
}
type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

const oopStore = {
    _state: {
        profilePage: {
            myPostsData: [
                {id: '1', message: "hi, how are you?", likesCount: "2"},
                {id: '2', message: "today is my birthday!", likesCount: "15"},
                {id: '3', message: "what are you doing?", likesCount: "45"},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber: (_state: StateType) => {
    },
    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

// @ts-ignore
window.store = oopStore


//experiment
const data = {
    dialogs: {
        name1: "Aziz",
        name2: "Abzal",
        name3: "Nurgissa",
        name4: "Akzhan",
        name5: "Ernar",
        name6: "Julia",
        name7: "Turgan",
        name8: "Turgan",
        name9: "Turgan",
        name10: "Turgan",
        name11: "Turgan",
        name12: "Turgan",
        name13: "Turgan",
        name14: "Turgan",
        name15: "Turgan",
        name16: "Turgan",
        name17: "Turgan",
        name18: "Turgan",
        name19: "Turgan",
        name20: "Turgan",
        name21: "Turgan",
        name22: "Turgan",
        name23: "Turgan",
        name24: "Turgan",
        name25: "Turgan"
    },
    messages: {
        message: "Hello my friend!",
        message2: "How is your day?",
        message3: "Today is a great day! isn't it?",
        message1: "Today is a great day! isn't it?",
        message12: "Today is a great day! isn't it?",
        message123: "Today is a great day! isn't it?",
        message124: "Today is a great day! isn't it?",
        message126: "Today is a great day! isn't it?",
        message127: "Today is a great day! isn't it?",
        message128: "Today is a great day! isn't it?",
        message129: "Today is a great day! isn't it?",
        message13: "Today is a great day! isn't it?",
        message14: "Today is a great day! isn't it?",
        message15: "Today is a great day! isn't it?",
        message16: "Today is a great day! isn't it?",
        message17: "Today is a great day! isn't it?",
        message18: "Today is a great day! isn't it?",
        message19: "Today is a great day! isn't it?"
    }
}
const newData = {
    ...data,
    dialogs: {...data.dialogs},
    messages: {...data.messages}
}
type UsersType = typeof UsersArray


export let UsersArray = [
    {
        id: '1',
        photoUrl: "https://i1.sndcdn.com/avatars-QQKFrKLPtsA511HR-ApKybg-t240x240.jpg",
        followed: false,
        firstName: "Akzhan",
        status: "I'm a student",
        location: {city: "Almaty", country: "Kaz"}
    },
    {
        id: '2',
        photoUrl: "https://i1.sndcdn.com/avatars-QQKFrKLPtsA511HR-ApKybg-t240x240.jpg",
        followed: false,
        firstName: "Ernar",
        status: "I work in BTA Bank",
        location: {city: "Astana", country: "Kaz"}
    },
    {
        id: '3',
        photoUrl: "https://i1.sndcdn.com/avatars-QQKFrKLPtsA511HR-ApKybg-t240x240.jpg",
        followed: true,
        firstName: "Abzal",
        status: "I work in Jusan",
        location: {city: "Moscow", country: "Ru"}
    },
    {
        id: '4',
        photoUrl: "https://i1.sndcdn.com/avatars-QQKFrKLPtsA511HR-ApKybg-t240x240.jpg",
        followed: true,
        firstName: "Shoqan",
        status: "I'm a teenager",
        location: {city: "Taraz", country: "Kaz"}
    },
    {
        id: '5',
        photoUrl: "https://i1.sndcdn.com/avatars-QQKFrKLPtsA511HR-ApKybg-t240x240.jpg",
        followed: false,
        firstName: "Turgan",
        status: "I'm a barber ",
        location: {city: "Karaganda", country: "Kaz"}
    },
    {
        id: '6',
        photoUrl: "https://i1.sndcdn.com/avatars-QQKFrKLPtsA511HR-ApKybg-t240x240.jpg",
        followed: false,
        firstName: "Aziz",
        status: "I study ",
        location: {city: "Almaty", country: "Kaz"}
    }
]