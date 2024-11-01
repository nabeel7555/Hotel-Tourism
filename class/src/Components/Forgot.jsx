import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom'; 


export default function Forgot(){
      return(
        <div>
            <img className='w-1/12 left-[5%] top-[5%] absolute' src={logo} alt="" />
            <h1 className='text-[#CA8E00] w-[220px] h-[38px] top-[212px] left-[610px] absolute font-[700] text-[25px] leading-[38.19px]'>Forgot password</h1>
            <p className=' w-[301px] h-[40px] top-[262px] left-[569px] opacity-[75%] absolute font-[600] text-[15px] leading-[20.46px] text-center'>Please enter your email address to receive a verification code</p>
            <input className='w-[388px] h-[58px] top-[358px] left-[526px] rounded-[16px] border-[1.4px] border-[#CCCCCC] absolute pl-5' placeholder='Email' type="email" name="email" id="email" />
            <button className='w-[388px] h-[58px] top-[464px] left-[526px] rounded-[33px] absolute text-white bg-[#CA8E00]' type="submit">
            <Link to="/verify" className='font-[500] text-white'>Send Verification Code</Link>
            </button>
            <button className='w-[388px] h-[58px] top-[538px]  left-[526px] absolute border-[1px] rounded-[33px] border-black text-black' type="submit">
             <Link to="/" className='font-[500] text-black'>Back</Link>
            </button>
        </div>
      )
}