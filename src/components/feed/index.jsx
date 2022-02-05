import React from 'react'
import "./index.css"
import Share from "../share"
import Post from "../post"
import {Posts} from "../../data"
export default function index() {
    return (
        <div className='feed'>
            <Share/>
            {Posts.map(p=>{
                return <Post key={p.id} post={p}/>
            })}
        </div>
    )
}
