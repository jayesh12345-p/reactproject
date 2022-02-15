import {useContext, useEffect,useState} from 'react'
import "./index.css"
import Share from "../share"
import Post from "../post"
import axios from "axios"
import { AuthContext } from '../../context/AuthContext'
export default function Feed({username}) {
    const [posts,setPosts]=useState([]);
    const {user} =useContext(AuthContext)
    //[] makes sure it runs once.
    useEffect(()=>{
        const fetchPosts = async ()=>{
        const res= username ? await axios.get(`/post/profile/${username}`)
        : await axios.get("/post/timeline/"+user._id);
        setPosts(res.data.sort((p1,p2)=>{
            return new Date(p2.createdAt)- new Date(p1.createdAt)
        }))
        }
        fetchPosts();
    },[username,user._id])
    return (
        <div className='feed'>
            <div className="feedwrape">
                {(!username||username===user.username) && <Share/>}
                {posts.map((p)=>{
                    console.log(p._id);
                    return <Post key={p._id} post={p}/>
                })}
            </div>
        </div>
    )
}
