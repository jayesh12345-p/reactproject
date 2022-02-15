import React, { useContext } from 'react'
import {Search,Person,Chat,Notifications} from '@mui/icons-material';
import "./index.css";
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
export default function Topbar() {
    const {user}=useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
                <Link to={`/profile/${user.username}`} state={{ from: "the-page-id" }}>
                    <img src={user.profilePicture? PF+user.profilePicture: PF+"profile/noAvatar.jpg"} alt="" className="topbarImg" />
                </Link>
            </div>
        </div>
    )
}
