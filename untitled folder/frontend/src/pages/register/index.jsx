// import { Password } from '@mui/icons-material';
import axios from 'axios';
import React,{useRef} from 'react'
import {useNavigate} from "react-router"
import './index.css'
export default function Register() {
    const email = useRef();
    const username = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useNavigate();
    const handleClick = async(e)=>{
        e.preventDefault();
        // alert(password.current.value)
        // alert(passwordAgain.current.value)
        // if (password.current.value.length<6){
        //     password.current.setCustomValidity("Password is too short.")
        // }
        // if (passwordAgain.current.value.length<6){
        //     passwordAgain.current.setCustomValidity("Password is too short.")
        // }
        if(passwordAgain.current.value !==password.current.value){
            password.current.setCustomValidity("Password don't match.")
        }
        else{
            const user ={
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,

            }
            try {
                await axios.post("/auth/register",user);
                history("/login")
            } catch (error) {
                console.log(error);
            }
            
        }
        //need to make sure it renders everytime the input is changed
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loginDesc">Connect your friends and the world around you.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" ref={username} className="loginInput" required/>
                        <input placeholder="Email" ref={email} type="email" className="loginInput" required/>
                        <input placeholder="Password" ref={password} type="password" className="loginInput" required/>
                        <input placeholder="Password Again" ref={passwordAgain} type="password" className="loginInput" required/>
                        <button className="loginButton" type="submit"> Sign up</button>
                        <button className="loginRegisterButton">
                            Login to your account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
