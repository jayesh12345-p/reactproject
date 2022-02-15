//Can be deleted after react 17
import React from 'react'
import Topbar from '../../components/topbar'
import Sidebar from '../../components/sidebar'
import Rightbar from '../../components/rightbar'
import Feed from '../../components/feed'
import './index.css'
export default function index() {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    )
}
