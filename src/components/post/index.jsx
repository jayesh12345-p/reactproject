import React,{useState} from 'react'
import {MoreVert,Favorite,ThumbUp} from '@mui/icons-material';
import "./index.css"
import {Users} from "../../data"
export default function P({post}) {
    Users.forEach(user=>{
        if (user.id===post.userId){
            post.username=user.username 
            post.prof=user.profilePicture
        }
    })
    const [like, setLike] = useState(post.like)
    const [isLike, setisLike] = useState(false)
    const handleLike =()=>{
        setLike(isLike? like-1 :like+1)
        setisLike(!isLike)
    }
    return (
        <div>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img src={post.prof} alt="" className="postProfileImg" />
                            <span className="postUsername">{post.username}</span>
                            <span className="postDate">{post.date}</span>
                        </div>
                        <div className="postTopRight"><MoreVert/></div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">{post?.desc}</span>
                        <img src={post.photo} alt="" className="postImg" />
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">
                            <div className="likeIcon outside" onClick={handleLike}>
                                <ThumbUp className="inside"/>
                            </div>
                            <div className="loveIcon outside" onClick={handleLike}>
                                <Favorite className="inside"/>
                            </div>
                            <span className="postLikeCounter">{like} people like it</span>
                        </div>
                        <div className="postBottomRight">
                            <span className="postCommentText">{post.comment} comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
