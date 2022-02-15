import React, { useContext } from 'react'
import './index.css'
import {PermMedia,Label,Room,EmojiEmotions, Cancel} from '@mui/icons-material';
import {AuthContext} from "../../context/AuthContext"
import axios from "axios"
import { useRef } from 'react';
import { useState } from 'react';
export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user}= useContext(AuthContext);
    const desc = useRef();
    const [file,setFile] = useState(null)
    const submitHandler = async(e)=>{
        e.preventDefault()
        const newPost ={
            userId:user._id,
            desc: desc.current.value
        }
        if (file){
            const data = new FormData();
            const fileName = Date.now()+file.name
            data.append("name",fileName)
            data.append("file",file)
            newPost.img = fileName
            console.log(newPost);
            try {
                await axios.post("/upload",data)
            } catch (error) {
                console.log(error);
            }

        }
        try {
            await axios.post("/post",newPost)
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className="share">
                <div className="shareWrapper">
                    <div className="shareTop">
                        <img className="shareProfileImg" src={user.profilePicture? PF+user.profilePicture: PF+"/profile/noAvatar.jpg"} alt=""/>
                        <input placeholder={"What's on your mind, "+user.username+"?"} className="shareInput" ref={desc}/>
                    </div>
                    <hr className="shareHr" />
                    {file&& (
                        <div className="shareImgContainer">
                            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                            <Cancel className='shareCancelImg' onClick={()=>{setFile(null)}}/>
                        </div>
                    )}
                    <form className="shareBottom" onSubmit={submitHandler}>
                        <div className="shareOptions">
                            <label htmlFor='file' className="shareOption">
                                <PermMedia htmlColor="tomato" className="shareIcon"/>
                                <span className="shareOptionText">
                                    Video
                                </span>
                                <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>{setFile(e.target.files[0])}}/>
                            </label>
                            <div className="shareOption">
                                <Label htmlColor="green" className="shareIcon"/>
                                <span className="shareOptionText" onClick={()=>{alert('Button is not usable now')}}>
                                    Tags
                                </span>
                            </div>
                            <div className="shareOption">
                                <Room htmlColor="goldenrod" className="shareIcon"/>
                                <span className="shareOptionText" onClick={()=>{alert('Button is not usable now')}}>
                                    Location
                                </span>
                            </div>
                            <div className="shareOption">
                                <EmojiEmotions htmlColor="blue" className="shareIcon"/>
                                <span className="shareOptionText" onClick={()=>{alert('Button is not usable now')}}>
                                    Feelings
                                </span>
                            </div>
                        </div>
                        <button className="shareButton" type="submit">Share</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
