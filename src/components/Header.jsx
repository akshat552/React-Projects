
import LOGO from '../Images/ZwiggyLogo.png'
import { useState , useContext } from "react";
import { Link } from 'react-router-dom';
import { useOnlineStatus } from '../util/useOnlineStatus';
import UserContext from '../util/userContext';


const Header = () => {

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext) 

  
  // console.log("Header rendered")
    return (
   
      <div className="flex justify-between bg-slate-100  w-full mb-4">
        <div className="w-[7rem] pl-5">
          <img
            id="logo-img"
            src={LOGO}
            alt="logo-img"
          />
        </div>
        
        <div className="flex justify-center items-center pr-7 ">
          <ul className='flex gap-11 text-lg '>
            <li>Online Status: {onlineStatus? "🟢":"🔴"}</li>
            <li> <Link to='/about'>About</Link></li>
            <li> <Link to ='/home'>Home</Link></li>
            <li>Help</li>
            <li><Link to='/grocerry'>Grocerry</Link></li>
            <li>Cart</li>
            <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header