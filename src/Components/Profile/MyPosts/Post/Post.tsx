import React from 'react';
import s from './Post.module.css'

type PropsType = {
    message: string
    likesCount: string
}

const Post = (props: PropsType) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLqfekg_kitC_QJ5kgBUTh2tt5EIcxEnQDQ&usqp=CAU' />
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;