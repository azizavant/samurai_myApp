import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import styles from './User.module.css'
import axios from "axios";
import {UsersArray} from "../../redux/oop.store";
// new Promise((resolve) => {
//     resolve(UsersArray)
// })
type UsersPropsType = {
    users: any
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: any) => void
}

export class Users extends React.Component<any, any> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response: any) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <div>{p}</div>
                    })}
                </div>
                <div>
                    {
                        this.props.users.map((el: any) => {
                            return (
                                <div key={el.id} className={styles.userData}>
                      <span className={styles.imgButton}>
                          <div>
                              <img src='https://i1.sndcdn.com/avatars-QQKFrKLPtsA511HR-ApKybg-t240x240.jpg'
                                   className={styles.userPhoto}/>
                          </div>
                          <div>
                              {el.followed
                                  ? <button onClick={() => {
                                      this.props.unfollow(el.id)
                                  }}>Unfollow</button>
                                  : <button onClick={() => {
                                      this.props.follow(el.id)
                                  }}>Follow</button>}
                          </div>
                      </span>
                                    <span className={styles.userInfo}>
                          <span>
                              <div>{el.name}</div>
                              <div>{el.status}</div>
                          </span>
                          <span>
                              <div>{'el.location.country'}</div>
                              <div>{'el.location.city'}</div>
                          </span>
                      </span>
                                </div>)
                        })
                    }
                </div>
            </div>
        )
    }
};
