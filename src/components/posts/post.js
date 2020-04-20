import React from 'react';
import './post.css'
const Post = (props) => {
    return (
        <div className="post__block">
            <div className="profile">
                <img src={props.avatar} alt="profil-avatar"></img>
                <div className='profile__info'>
                    <p className="user__name">{props.name}</p>
                    <p className="nick__name">{props.nickname}</p>
                    <p className="date__post">{props.date}</p>
                </div>
            </div>
            <div className="post__body">
                <p className="content">{props.content}</p>
                <img src={props.postimg}  alt ="post-photo"/>
            </div>
        </div>
    );
}
export default Post;  