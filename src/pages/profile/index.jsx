import React from 'react'
import "./index.css"
import Topbar from '../../components/topbar'
import Sidebar from '../../components/sidebar'
import Rightbar from '../../components/rightbar'
import Feed from '../../components/feed'
export default function index() {
    return (
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="asset/post/th.jpg" alt="" className="profileCoverImg" />
                            <img src="asset/profile/1.jpeg" alt="" className="profileUserImg" />
                            <div className="profileInfo">
                                <h4 className="profileInfoName">Jeff Doe</h4>
                                <h4 className="profileInfoDesc">Hello, human.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
