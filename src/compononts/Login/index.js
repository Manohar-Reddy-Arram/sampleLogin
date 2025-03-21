import React, { useState } from 'react'
import ApiInt from '../ApiInt'
import axios from 'axios'
import './index.css'

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const getTypedValue = (event) => {
        setName(event.target.value);
        console.log(name);
    }

    const getTypedPasswordValue = (event) => {
        setPassword(event.target.value);
        console.log(password);
    }

    const sendLoginData = async () => {
        if (name === "" || password === "") {
            alert('Please fill the form');
        }
        else {
            const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
                email: "john@mail.com",
                password: "changeme",
            });
            console.log(response.data, "url");
        } 
    }

    const buttonClick = () => {
        alert('Login Successful');
        console.log("Clicked");
    }


    return (
        <div className='login-container'>
            <div className='login-form'>
                <label className='label'>UserName</label>
                <input className='input' type="text" onChange={getTypedValue} value={name} placeholder='Now Enter Your Name' />

                <label className='label'>Password</label>
                <input className='input' type="password" onChange={getTypedPasswordValue} value={password} placeholder='Now Enter Your Password' />

                <div className='remember-me'>
                    <input type="checkbox" />
                    <span> Remember Me</span>
                </div>
                <div className='buttons'>
                    <button className='button' onClick={sendLoginData}>Register</button>
                    <button className='button' onClick={buttonClick} type='submit '>Login</button>
                    <ApiInt />
                </div>
            </div>
        </div>
    )
}

export default Login;
