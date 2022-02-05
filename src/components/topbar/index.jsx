import React from 'react'
import {Search,Person,Chat,Notifications} from '@mui/icons-material';
import "./index.css";
export default function index() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">Social</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search/>
                    <input placeholder="Search for friend" type="text" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/asset/profile/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}
