import axios from "axios"
import {format} from "timeago.js"
import {Link} from "react-router-dom"
import {useEffect,useState} from 'react'
import {MoreVert,Favorite,ThumbUp} from '@mui/icons-material';
import "./index.css"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export default function Post({post}) {

    const [like, setLike] = useState(post.likes.length)
    const [isLike, setisLike] = useState(false)
    const [user,setUser]= useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:User}=useContext(AuthContext)
    useEffect(()=>{
        setisLike(post.likes.includes(User._id))
    },[User._id,post.likes])
    useEffect(()=>{
        const fetchUser = async ()=>{
            const res= await axios.get(`/users?userId=${post.userId}`)
            setUser(res.data)
            }
        fetchUser();
    },[post.userId])
    //wrong
    const handleLike = async()=>{
        try {
            await axios.put(`/post/${post._id}/like`,{userId:User._id})
        } catch (error) {
            alert()
        }
        setLike(isLike? like-1 :like+1)
        setisLike(!isLike)
        
    }
    return (
        <div>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <Link to={`/profile/${user.username}`} state={{ from: "the-page-id" }}>
                                <img src={user.photo || PF+"profile/noAvatar.jpg"} alt="" className="postProfileImg" />
                            </Link>
                            <span className="postUsername">{user.username}</span>
                            <span className="postDate">{format(post.createdAt)}</span>
                        </div>
                        <div className="postTopRight"><MoreVert/></div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">{post?.desc}</span>
                        <img src={PF+post.img} alt="" className="postImg" />
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
                            <span className="postCommentText">{post.comment||0} comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
