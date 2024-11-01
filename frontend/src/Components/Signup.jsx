import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import signup2 from '../Assets/signup2.jpeg';
import logo from '../Assets/logo.png';
import axios from "axios";

export default function Signup() {
    const history = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        
        try {
            const response = await axios.post("http://localhost:8000/signup", { email, password });
            if (response.data === "exist") {
                alert("User already exists");
            } else {
                history("/home", { state: { id: email } });
            }
        } catch (error) {
            console.error(error);
            alert("Error occurred during signup");
        }
    }

    return (
        <div className='w-full h-[1024px] flex'>
            <div>
                <img className='w-[72px] h-[73.33px] absolute top-[80px] left-[112px]' src={logo} alt="" />
                <h1 className='w-[282px] h-[35px] top-[256px] left-[254px] absolute text-[#CA8E00] text-2xl font-semibold'>Welcome back to LLC</h1>
                <p className='absolute w-[156px] h-[17px] top-[303px] left-[282px] opacity-[75%] text-[14px] font-[500] leading-[16.94px]'>Sign in with your email</p>
                <input className='absolute w-[388px] h-[58px] top-[376px] left-[166px] border-[1.4px] border-[#CCCCCC] rounded-[16px] pl-5' type="email" name="text" placeholder='Name' id="" />
                <input className='absolute w-[388px] h-[58px] top-[450px] left-[166px] border-[1.4px] border-[#CCCCCC] rounded-2xl pl-5 opacity-[75%]' type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' id="" />
                <input className='absolute w-[388px] h-[58px] top-[524px] left-[166px] border-[1.4px] border-[#CCCCCC] rounded-2xl pl-5 opacity-[75%]' type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' id="" />
                <input className='absolute w-[388px] h-[58px] top-[598px] left-[166px] border-[1.4px] border-[#CCCCCC] rounded-2xl pl-5 opacity-[75%]' type="password" name="confirmpassword" placeholder='Confirm Password' id="" />
                <div className='w-[388px] h-[91px] top-[712px] left-[166px] absolute'>
                    <button className='w-full h-[58px] rounded-[33px] bg-[#CA8E00] text-white' type="submit" onClick={submit}>Sign Up</button>
                    <p className='w-full h-[17px] text-center font-[400] text-[14px] leading-10 opacity-70'>
                        Already have an account? 
                        <Link to="/" className='font-[500] text-black'> Sign In</Link>
                    </p>           
                </div>
            </div>
            <div className='absolute right-0'><img className='w-[720px] h-full object-cover' src={signup2} alt="" /></div>
        </div>
    );
}
