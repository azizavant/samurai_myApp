import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/store";
import {Dispatch} from "redux";



const mapStateToProps = (state: AppRootStateType) => {
    debugger
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUserName: state.userPage.totalUserName,
        currentPage: state.userPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: any) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: any) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)