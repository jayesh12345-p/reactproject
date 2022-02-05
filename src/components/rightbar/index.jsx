import React from 'react'
import "./index.css"
import {Users} from "../../data"
import Online from "../online"
export default function index(profile) {
    const HomeRightBar = ()=>{
        return (
        <div className="rightBar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="asset/profile/1.jpeg" alt="" className="birthdayImg"/>
                    <span className="birthdayText">
                        <b>Jeff Doe</b> and <b>3 other</b> have a same birthday today.
                    </span>
                </div>
                <img src="asset/profile/1.jpeg" alt="" className="rightbarAd" />
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
              <h4 className="rightbarTitle">User information</h4>
              <div className="rightbarInfo">
                  <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">City:</span>
                      <div className="rightbarInfoValue">New York</div>
                  </div>
                  <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">From:</span>
                      <div className="rightbarInfoValue">Madrid</div>
                  </div>
                  <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">Relationship:</span>
                      <div className="rightbarInfoValue">Single</div>
                  </div>
              </div>
              <h4 className="rightbarTitle"> User friends</h4>
              <div className="rightbarFollowings">
                  <div className="rightbarFollowing">
                      <img src="asset/profile/3.jpg" alt="" className="rightbarFollowingImg" />
                      <span className="rightFollowingName">cbc</span>
                  </div>
                  <div className="rightbarFollowing">
                      <img src="asset/profile/4.jpg" alt="" className="rightbarFollowingImg" />
                      <span className="rightFollowingName">bbc</span>
                  </div>
                  <div className="rightbarFollowing">
                      <img src="asset/profile/6.jpg" alt="" className="rightbarFollowingImg" />
                      <span className="rightFollowingName">bibc</span>
                  </div>
                  <div className="rightbarFollowing">
                      <img src="asset/profile/2.jpg" alt="" className="rightbarFollowingImg" />
                      <span className="rightFollowingName">bhbc</span>
                  </div>
                  <div className="rightbarFollowing">
                      <img src="asset/profile/7.jpg" alt="" className="rightbarFollowingImg" />
                      <span className="rightFollowingName">abc</span>
                  </div>
                  <div className="rightbarFollowing">
                      <img src="asset/profile/5.jpg" alt="" className="rightbarFollowingImg" />
                      <span className="rightFollowingName">hbc</span>
                  </div>
              </div>
            </>
        )
    }
    return (
        <div className="rightBar">
            <div className="rightbarWrapper">
                {profile?<ProfileRightBar/>:<HomeRightBar/>}
            </div>
        </div>
    )
}
