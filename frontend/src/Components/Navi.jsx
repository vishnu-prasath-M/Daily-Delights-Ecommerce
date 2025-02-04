import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';

import logo from "../assets/images/logo.png"
import prof from "../assets/icons/profile.png"
import basket from "../assets/icons/basket.png"
import home from "../assets/icons/3d-house.png"
import product from "../assets/icons/received.png"
import menu from "../assets/icons/more.png"
import close from "../assets/icons/close.png"
import userpic from "../assets/icons/profile.png"
import setting from "../assets/icons/settings.png"
import searchi from "../assets/icons/search.png"
import loginicon from "../assets/icons/login (1).png"
import logouticon from "../assets/icons/power-off.png"

function Navi() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNavopen, setIsNavopen] = useState(false);
  const [animationState, setAnimationState] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by checking localStorage
    const userName = localStorage.getItem('userName');
    if (userName) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const toggleSidenav = () => {
    if (isNavopen) {
      setAnimationState(false);
      setTimeout(() => setIsNavopen(false), 300); // Closing animation
    } else {
      setIsNavopen(true);
      setTimeout(() => setAnimationState(true), 10); // Slight delay for opening animation
    }
  };

  const toggleProfile = () => {
    if (isProfileOpen) {
      setAnimationState(false);
      setTimeout(() => setIsProfileOpen(false), 500); // Closing animation
    } else {
      setIsProfileOpen(true);
      setTimeout(() => setAnimationState(true), 10); // Slight delay for opening animation
    }
  };

  const closeProfile = () => {
    setAnimationState(false);
    setTimeout(() => setIsProfileOpen(false), 500); // Closing animation
  };

  const closesidenav = () => {
    setAnimationState(false);
    setTimeout(() => setIsNavopen(false), 300); // Closing animation
  };

  const handleLoginClick = () => {
    closeProfile();
    closesidenav();
    navigate('/login'); // Navigate to the login page
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false); 
    navigate('/'); 
    closeProfile();
  };

  const handleorderclick = () => {
    navigate('/orders');
    closeProfile();
  };

  const onceloginclick = () => {
    closesidenav();
    navigate('/cart');
  };

  const handlehomeclick = () => {
    closesidenav();
    navigate('/');
  };

  const handleproductclick = () => {
    closesidenav();
    navigate('/products');
  };

  const handleprof = () => {
    navigate('/profile');
    closeProfile();
  };

  return (
    <div>
      {/* navbar */}
      <nav className="bg-slate-100 flex lg:flex-row xl:flex-row items-center justify-between py-2.5 max-sm:flex-col md:flex-col shadow-md fixed top-0 z-20 w-[100%]">
        <img className="w-[250px] ml-3" src={logo} alt="" />
        <div className="flex justify-around items-center gap-10 max-sm:gap-0 md:gap-0">
          <div className="bg-white border shadow-lg w-[500px] flex items-center p-2 rounded-3xl mr-7 max-sm:w-[250px]">
            <select name="category" id="cat" className="bg-transparent px-2 outline-none text-gray-400 max-sm:w-28 max-sm:text-sm">
              <option value="All categories">All categories</option>
              <option value="Groceries">Groceries</option>
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Chocolates & Drinks">Sweet& Drinks</option>
            </select>
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-transparent pl-2 w-[95%] max-sm:text-sm focus:outline-none" type="text" placeholder="Search Anything..." />
            <img onClick={handleSearch} className="w-5 mr-3 opacity-35 cursor-pointer max-sm:w-4" src={searchi} alt="" />
          </div>
          <div className="flex">
            <ul className="flex mr-28 gap-10 max-sm:hidden md:hidden xl:flex lg:flex">
              <li className="cursor-pointer flex gap-1 hover:bg-gray-300 rounded-2xl p-2"><Link to="/">Home </Link><Link to="/"><img className="w-6" src={home} alt="home" /></Link></li>
              <li className="cursor-pointer flex items-center hover:bg-gray-300 rounded-2xl p-2"><Link to="/products">Products</Link><Link to="/products"><img className="w-6" src={product} alt="pro" /></Link></li>
              <li className="cursor-pointer flex items-center hover:bg-gray-300 rounded-2xl p-2"><Link to="/cart">Cart </Link><Link to="/cart"><img className="w-6" src={basket} alt="bas" /></Link></li>
            </ul>
          </div>
          {/* profile */}
          <div>
            <button onClick={toggleProfile} className="focus:outline-none">
              <img className="w-10 relative top-1.5 right-2 cursor-pointer max-sm:hidden md:hidden md:w-16 xl:flex xl:w-10" src={prof} alt="img" />
            </button>
          </div>
          {isProfileOpen && (
            <div className={`bg-gray-100 absolute top-0 right-0 w-[250px] max-sm:h-screen p-2 px-5 z-10 shadow-lg transform transition-all duration-500 ease-in-out ${
              animationState ? 'translate-x-0' : 'translate-x-full'
            }`}>
              <div className="flex flex-col gap-6 mt-7">
                <p onClick={handleprof} className="flex items-center gap-1.5 cursor-pointer"><img className="w-5 h-5" src={userpic} alt="" />My Profile</p>
                <p onClick={handleorderclick} className="flex items-center gap-1.5 cursor-pointer"><img className="w-5 h-5" src={basket} alt="" />Orders</p>
                <p className="flex items-center gap-1.5"><img className="w-5 h-5" src={setting} alt="" />Settings</p>
                {isLoggedIn ? (
                  <div onClick={handleLogoutClick} className="bg-red-400 text-white flex items-center gap-1 rounded-lg ml-14 w-fit px-2.5 py-1 hover:bg-red-700">
                  <button >Logout</button>
                  <img className="w-[18px] mt-1" src={logouticon} alt="" />
                  </div>
                  
                ) : (
                <div  onClick={handleLoginClick} className="bg-blue-400 text-white flex items-center gap-1 rounded-lg ml-14 w-fit px-2.5 py-1 hover:bg-blue-700">
                <button>Login</button>
                <img className="w-[20px] mt-1" src={loginicon} alt="" />
                </div>
                  
                )}
              </div>
              <button onClick={closeProfile}>
                <img className="w-4 absolute top-4 right-4 cursor-pointer" src={close} alt="" />
              </button>
            </div>
          )}
          <div className=" lg:hidden xl:hidden">
            <button onClick={toggleProfile} className="focus:outline-none flex">
              <img className="w-7 relative top-0.5 right-3 cursor-pointer " src={prof} alt="img" />
            </button>
          </div>

          {/* menu */}
          <div className="lg:hidden xl:hidden">
            <img onClick={toggleSidenav} className="w-5 absolute top-[67px] right-3 cursor-pointer md:top-[65px] md:right-[15%] md:w-6" src={menu} alt="" />
          </div>

          {/* sidenav */}
          {isNavopen && (
            <div className={`flex z-20 bg-slate-100 absolute top-0 right-0 w-[260px] h-screen p-4 shadow-lg transform transition-all duration-500 ease-in-out ${
              animationState ? 'translate-x-0' : 'translate-x-full'
            }`}>
              <ul className="flex mr-28 mt-10 gap-8 h-screen flex-col items-center px-3">
                <li onClick={handlehomeclick} className="cursor-pointer flex space-x-1">Home <img className="w-5" src={home} alt="home" /></li>
                <li onClick={handleproductclick} className="cursor-pointer flex items-center">Products<img className="w-5" src={product} alt="pro" /></li>
                <li onClick={onceloginclick} className="cursor-pointer flex ">Cart <img className="w-5" src={basket} alt="bas" /></li>
              </ul>
              <img onClick={closesidenav} className="w-5 h-5 relative top-2 right-2 cursor-pointer" src={close} alt="close" />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navi;
