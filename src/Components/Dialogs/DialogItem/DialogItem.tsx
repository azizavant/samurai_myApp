
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


export type DialogItemPropsType = {
    name: string
    id: string
}


export const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src='https://cdn-icons-png.flaticon.com/512/168/168882.png' />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};