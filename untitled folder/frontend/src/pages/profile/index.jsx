import {useEffect,useState} from 'react'
import axios from "axios"
import "./index.css"
import Topbar from '../../components/topbar'
import Sidebar from '../../components/sidebar'
import Rightbar from '../../components/rightbar'
import Feed from '../../components/feed'
import {useParams} from "react-router"
export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser]= useState({})
    const username = useParams().username
    console.log(user);
    useEffect(()=>{
        const fetchUser = async ()=>{
            const res= await axios.get(`/users?username=${username}`)
            setUser(res.data)
            console.log(res.data);
            }
        fetchUser();
    },[])
    return (
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPicture || PF+"profile/noImage.jpg"} alt="" className="profileCoverImg" />
                            <img src={user.profilePicture || PF+"profile/noAvatar.jpg"} alt="" className="profileUserImg" />
                            <div className="profileInfo">
                                <h4 className="profileInfoName">{user.username}</h4>
                                <h4 className="profileInfoDesc">{user.desc}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username}/>
                        <Rightbar profile user={user}/>
                    </div>
                </div>
            </div>
        </>
    )
}
