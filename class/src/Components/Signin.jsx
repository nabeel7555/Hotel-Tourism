import { useNavigate, Link } from 'react-router-dom'; 
import logo from '../Assets/logo.png';
import signup1 from '../Assets/signup1.jpeg';
import React, { useState } from 'react';
import axios from "axios";

export default function Signin() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signin(e) {
        e.preventDefault();
      
        try {
            const response = await axios.post("http://localhost:8000/signin", { email, password });
            if (response.data.message === "Sign-in successful") {
                history("/home", { state: { id: email } });
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Sign-in error:", error.response ? error.response.data : error);
            alert("Error occurred during sign-in");
        }
    }

    return (
        <div className='w-full h-screen flex'>
            <div>
                <img className='w-[72px] h-[73.33px] absolute top-[80px] left-[112px]' src={logo} alt="" />
                <h1 className='w-[282px] h-[35px] top-[256px] left-[219px] absolute text-[#CA8E00] text-2xl font-semibold'>Welcome back to LLC</h1>
                <p className='absolute w-[151px] h-[17px] top-[303px] left-[284px] opacity-[75%] text-[14px] font-[500]'>Sign in with your email</p>
                
                <form onSubmit={signin}>
                    <input
                        className=' absolute w-[388px] h-[58px] top-[376px] left-[166px] border-[1.4px] border-[#CCCCCC] rounded-2xl pl-5'
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        required
                    />
                    <input
                        className=' absolute w-[388px] h-[58px] top-[450px] left-[166px] border-[1.4px] border-[#CCCCCC] rounded-2xl pl-5 opacity-[75%]'
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        required
                    />
                    <p className=' absolute w-[86px] h-[12px] top-[516px] left-[453px] opacity-[70%] font-[500] text-[10px] leading-[12.1px] text-black'>
                        <Link to="/forgot" className='font-[500] text-black'>Forgot Password</Link>
                    </p>
                    <button
                        className='absolute w-[388px] h-[58px] top-[584px] left-[166px] rounded-[33px] bg-[#CA8E00] text-white'
                        type="submit"
                    >
                        Sign In
                    </button>
                </form>

                <p className='absolute w-[214px]  h-[17px] top-[658px] left-[252px] font-[400] text-[14px] leading-[16.94px] opacity-70'>
                    Don't have an account? 
                    <Link to="/signup" className='font-[500] text-black'>Sign Up</Link>
                </p>
            </div>
            <div className='absolute right-[0px]'>
                <img className='w-[720px] h-screen object-cover' src={signup1} alt="" />
            </div>
        </div>
    );
}
