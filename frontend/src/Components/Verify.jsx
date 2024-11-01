import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../Assets/logo.png';

export default function Verify() {
    const [timeLeft, setTimeLeft] = useState(60); // 60 seconds for 1 minute

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);

            // Cleanup timer when component unmounts
            return () => clearInterval(timerId);
        }
    }, [timeLeft]);

    // Helper function to format the time in MM:SS
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        // Format the minutes and seconds to always show two digits
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <img className='w-1/12 left-[5%] top-[5%] absolute' src={logo} alt="" />
            <h1 className='text-[#CA8E00] w-[220px] h-[38px] top-[212px] left-[610px] absolute font-[700] text-[25px] leading-[38.19px]'>
                Verify Your Email
            </h1>
            <p className='w-[301px] h-[40px] top-[262px] left-[569px] opacity-[75%] absolute font-[600] text-[15px] leading-[20.46px] text-center'>
                Please enter the verification code sent to ahmad890@gmail.com
            </p>

            <div className='w-[266px] h-[56px] top-[350px] left-[587px] rounded-[16px] ml-5 absolute'>
                <input className='w-[20%] border-3 border-[grey] h-[56px] rounded-[16px] border-[1px] absolute pl-5 text-2xl' type="number" name="number" id="number" />
                <input className='w-[20%] border-3 border-[grey] h-[56px] left-[60px] rounded-[16px] border-[1px] absolute pl-5 text-2xl' type="number" name="number" id="number" />
                <input className='w-[20%] border-3 border-[grey] h-[56px] left-[120px] rounded-[16px] border-[1px] absolute pl-5 text-2xl' type="number" name="number" id="number" />
                <input className='w-[20%] border-3 border-[grey] h-[56px] left-[180px] rounded-[16px] border-[1px] absolute pl-5 text-2xl' type="number" name="number" id="number" />
            </div>

            <div className='absolute w-[43px] h-[24px] top-[438px] left-[698px] font-[600] opacity-[50%] text-[16px] text-[grey]'>
                {timeLeft > 0 ? `${formatTime(timeLeft)}` : "00:00"}
            </div>
            <p className='absolute w-[232px]  h-[24px] top-[520px] left-[603px] font-[400] text-[14px] leading-[24px]'>
                    Don't receive code? 
                    <span className='font-[600] text-[16px] leading-[24px] text-[#CA8E00]'>Resend Code</span>
            </p>
            <button className='w-[388px] h-[58px] top-[570px] left-[526px] rounded-[33px] absolute text-white bg-[#CA8E00]' type="submit">
            <span className='font-[500] text-white'>
            <Link to="/newpass" className='font-[500] text-white'>Verify</Link>

                </span>
            </button>
            <button className='w-[388px] h-[58px] top-[640px]  left-[526px] absolute border-[1px] rounded-[33px] border-black text-black' type="submit">
             <span className='font-[500] text-black'>
             <Link to="/forgot" className='font-[500] text-black'>Back</Link>
             </span>
            </button>
        </div>
    );
}
