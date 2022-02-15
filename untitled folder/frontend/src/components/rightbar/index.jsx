import React, { useContext } from 'react'
import "./index.css"
import {Users} from "../../data"
import Online from "../online"
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {Add, Remove} from "@mui/icons-material"
export default function Rightbar({user}) {
    
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends,setFriends]= useState([])
    const {user:currentUser,dispatch}= useContext(AuthContext)
    console.log(currentUser._id);
    const [followed,setFollowed]= useState(currentUser.followings.includes(user?._id))
    useEffect(()=>{
        setFollowed(currentUser.followings.includes(user?._id))
    },[currentUser,user])
    useEffect(()=>{
        const getFriends = async()=>{
            try {
                const friendList = await axios.get("/users/friends/"+user._id)
                setFriends(friendList.data)
            } catch (error) {
            }
        }
        getFriends()
    },[user])

    const handleClick = async()=>{
        try {
            if(followed){
                await axios.put("/users/"+user._id+"/unfollow",{userId: currentUser._id})
                dispatch({type:"UNFOLLOW",payload:user._id})
            }
            else{
                await axios.put("/users/"+user._id+"/follow",{userId: currentUser._id})
                dispatch({type:"FOLLOW",payload:user._id})
            }
        } catch (error) {
            
        }
        setFollowed(!followed)
    }
    const HomeRightBar = ()=>{
        return (
        <div className="rightBar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src={PF+"profile/1.jpeg"} alt="" className="birthdayImg"/>
                    <span className="birthdayText">
                        <b>Jeff Doe</b> and <b>3 other</b> have a same birthday today.
                    </span>
                </div>
                <img src={PF+"profile/1.jpeg"} alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>{
                    return <Online key={u.id} user={u}/>   
                })}
                </ul>
            </div>
        </div>
    )
    }
    const ProfileRightBar = () =>{
        return (
            <>
            {user.username!==currentUser.username && (
                <button className="rightbarFollorButton" onClick={handleClick}>
                    {followed? "Unfollow":"Follow"}{followed?  <Remove/>:<Add/>}
                </button>
            )}
              <h4 className="rightbarTitle">User information</h4>
              <div className="rightbarInfo">
                  <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">City:</span>
                      <div className="rightbarInfoValue">{user.city}</div>
                  </div>
                  <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">From:</span>
                      <div className="rightbarInfoValue">{user.from}</div>
                  </div>
                  <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">Relationship:</span>
                      <div className="rightbarInfoValue">{user.relationship === 1? "Single": user.relationship ===2? "Married" : "-"}</div>
                  </div>
              </div>
              <h4 className="rightbarTitle"> User friends</h4>
              <div className="rightbarFollowings">
                  {friends.map(friend=>(
                      <Link to={"/profile/"+friend.username} state={{ from: "the-page-id" }} style={{textDecoration:"none"}} key={friend._id}>
                        <div className="rightbarFollowing">
                            <img src={friend.profilePicture? PF+friend.profilePicture:PF+"/profile/noAvatar.jpg"} alt="" className="rightbarFollowingImg" />
                            <span className="rightFollowingName">{friend.username}</span>
                        </div>
                      </Link>
                  ))}
                  
              </div>
            </>
        )
    }
    return (
        <div className="rightBar">
            <div className="rightbarWrapper">
                {user?<ProfileRightBar/>:<HomeRightBar/>}
            </div>
        </div>
    )
}
