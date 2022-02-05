import React from 'react'
import './index.css'
export default function index() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loginDesc">Connect your friends and the world around you.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput"/>
                        <input placeholder="Email" type="Email" className="loginInput"/>
                        <input placeholder="Password" type="text" className="loginInput"/>
                        <input placeholder="Password Again" type="text" className="loginInput"/>
                        <button className="loginButton"> Sign up</button>
                        <button className="loginRegisterButton">
                            Login to your account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
