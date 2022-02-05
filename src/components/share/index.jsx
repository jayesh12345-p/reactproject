import React from 'react'
import './index.css'
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material';
export default function index() {
    return (
        <div>
            <div className="share">
                <div className="shareWrapper">
                    <div className="shareTop">
                        <img className="shareProfileImg" src="/asset/profile/1.jpeg" alt=""/>
                        <input placeholder="What's on your mind?" className="shareInput" />
                    </div>
                    <hr className="shareHr" />
                    <div className="shareBottom">
                        <div className="shareOptions">
                            <div className="shareOption">
                                <PermMedia htmlColor="tomato" className="shareIcon"/>
                                <span className="shareOptionText">
                                    Video
                                </span>
                            </div>
                            <div className="shareOption">
                                <Label htmlColor="green" className="shareIcon"/>
                                <span className="shareOptionText">
                                    Tags
                                </span>
                            </div>
                            <div className="shareOption">
                                <Room htmlColor="goldenrod" className="shareIcon"/>
                                <span className="shareOptionText">
                                    Location
                                </span>
                            </div>
                            <div className="shareOption">
                                <EmojiEmotions htmlColor="blue" className="shareIcon"/>
                                <span className="shareOptionText">
                                    Feelings
                                </span>
                            </div>
                        </div>
                        <button className="shareButton">Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
