import React from 'react'
import "./index.css"
import {RssFeed,Chat,VideoLibrary,Group,Bookmark,Help,Work,Event,ExpandMore} from "@mui/icons-material"
import {Users} from "../../data"
import Friend from "../friend"
export default function index() {
    return (
        <div className='sideBar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed/>
                        <span className="sidebarL">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat/>
                        <span className="sidebarL">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoLibrary/>
                        <span className="sidebarL">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group/>
                        <span className="sidebarL">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark/>
                        <span className="sidebarL">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <Help/>
                        <span className="sidebarL">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work/>
                        <span className="sidebarL">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event/>
                        <span className="sidebarL">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <div className="black">
                            <ExpandMore/>
                        </div>
                        <span className="sidebarL">More</span>
                    </li>
                </ul>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users.map(u=>{
                        return <Friend key={u.id} user={u}/>
                    })
                    }
                </ul>
            </div>
        </div>
    )
}
