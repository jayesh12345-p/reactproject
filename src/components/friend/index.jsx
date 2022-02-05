import React from 'react'
import "./index.css"
export default function index({user}) {
    return (
        <div>
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
        </div>
    )
}
