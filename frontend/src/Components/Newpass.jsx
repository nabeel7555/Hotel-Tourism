import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom'; 

export default function Newpass(){
    return(
        <div>
            <img className='w-1/12 left-[5%] top-[5%] absolute' src={logo} alt="" />
            <h1 className='text-[#CA8E00] w-[283px] h-[38px] top-[212px] left-[590px] absolute font-[700] text-[25px] leading-[38.19px]'>
                Create New Password
            </h1>
            <p className='w-[331px] h-[40px] top-[262px] left-[555px] opacity-[75%] absolute font-[600] text-[15px] leading-[20.46px] text-center'>
            Ensure your new password differs from the ones
            used before
            </p>
            <input className=' absolute w-[388px] h-[58px] top-[358px] left-[526px] border-[1.4px] border-[#CCCCCC] rounded-2xl pl-5 opacity-[75%]' type="password" name="pass" placeholder='Password' id="pass" />
            <input className=' absolute w-[388px] h-[58px] top-[432px] left-[526px] border-[1.4px] border-[#CCCCCC] rounded-2xl pl-5 opacity-[75%]' type="password" name="pass" placeholder='Confirm Password' id="" />
            <button className='w-[388px] h-[58px] top-[538px] left-[526px] rounded-[33px] absolute text-white bg-[#CA8E00]' type="submit">
            <Link to="/" className='font-[500] text-white'>Save New Password</Link>
            </button>
            <button className='w-[388px] h-[58px] top-[612px]  left-[526px] absolute border-[1px] rounded-[33px] border-black text-black' type="submit">
             <Link to="/verify" className='font-[500] text-black'>Back</Link>
            </button>
            </div>
    )
}