import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/oop.store";

export type MyPostPropsType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const MyPosts = (props: MyPostPropsType) => {

    const myPostsElement = props.posts
        .map(p =><Post message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef<any>();

    const onAddPost = () => {
        props.addPost()
    }
    const onPostChange = () => {
        const text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    return (
        <div className={s.myPosts}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}
                              ref={newPostElement} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div>
                {myPostsElement}
            </div>
        </div>
    );
};
