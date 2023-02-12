import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.peyzazh} src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
            </div>
            <div>
                <img className={s.avatar} src='https://aniyuki.com/wp-content/uploads/2022/04/aniyuki-anime-couple-avatars-29.jpg' />
            </div>
        </div>
    );
};


