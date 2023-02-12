export type StateType = {
    users: UsersType[]
    pageSize: number,
    totalUserName: number,
    currentPage: number
}
export type UsersType = {
    id: string
    photoUrl: string
    followed: boolean
    firstName: string
    status: string
    location: LocationType
}
type LocationType = {
    city: string
    country: string
}
export type FollowActionType = {
    type: typeof FOLLOW
    userId: string
}
export type UnfollowActionType = {
    type: typeof UNFOLLOW
    userId: string
}
export type ActionsType = FollowActionType | UnfollowActionType | SetUsersActionType
export type SetUsersActionType = {
    type: typeof SET_USERS
    users: any
}
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const initialState: any = {
    users: [],
    pageSize: 5,
    totalUserName: 21,
    currentPage: 1
}
export const usersReducer = (state: StateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}

export const followAC = (userId: string): FollowActionType =>
    ({type: FOLLOW, userId})
export const unfollowAC = (userId: string): UnfollowActionType =>
    ({type: UNFOLLOW, userId})
export const setUsersAC = (users: any): SetUsersActionType =>
    ({type: SET_USERS, users: users})