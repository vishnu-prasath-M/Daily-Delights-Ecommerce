import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


import { FaCartShopping } from "react-icons/fa6";


import beat from '../assets/images/juicel.png'
import veg from '../assets/images/veg.png'
import choco from '../assets/images/choco.png'
// import natural from '../assets/images/natural.png'
import shop from '../assets/icons/shop-now.png'

import juicebg from '../assets/images/juicebn.png'
import phonebg1 from '../assets/images/ad1.png'
import phonebg2 from '../assets/images/ad2.png'
import logobg from '../assets/images/logo.png'
import insta from '../assets/icons/instagram.png'
import wha from '../assets/icons/whatsapp.png'
import x from '../assets/icons/twitter.png'
// import tele from '../assets/icons/telegram.png' 
import fb from '../assets/icons/facebook.png'

import free from '../assets/icons/free-shipping.png'
import secure from '../assets/icons/shield.png'
import quality from '../assets/icons/order (1).png'
import savings from '../assets/icons/money-sack.png'
import offers from '../assets/icons/discount.png'

import fruitbg from '../assets/images/frt.jpg'
import vegbg from '../assets/images/vegbg.jpg'
import snackbg from '../assets/images/snack.jpg'
import juuice from '../assets/images/juibg.jpg'
import statn from '../assets/images/stsn.jpg'
import choc from '../assets/images/choc.jpg'
import fashn from '../assets/images/fashn.jpg'

// best sell
import chips from '../assets/images/bestsell/best (4).jpg'
import banan from '../assets/images/bestsell/best (1).jpg'
import dairy from '../assets/images/bestsell/best (3).jpg'
import mjuice from '../assets/images/bestsell/best (2).jpg'
// import chips from '../assets/images/bestsell/best (1).jpg'
import buys from '../assets/icons/carts.png'
import NewArrived from './NewArrived';




const categories = [
    { name: 'Fruits', bgImage: fruitbg, path: '/products#fruits' },
    { name: 'Vegetables', bgImage: vegbg, path: '/products#vegetables' },
    { name: 'Snacks', bgImage: snackbg, path: '/products#snacks' },
    { name: 'Juices', bgImage: juuice, path: '/products#juices' },
    { name: 'Stationary', bgImage: statn, path: '/products#stationary' },
    { name: 'Chocolates', bgImage: choc, path: '/products#chocolates' },
    { name: 'Fashions', bgImage: fashn, path: '/products#fashions' },
];
function Home() {

    const navigate = useNavigate();



    const handleCategoryClick = (path) => {
        if (path.startsWith('#')) {
            navigate('/products', { state: { scrollTo: path } });
        } else {
            navigate(path);
        }
    };






    return (
        <div className='overflow-x-hidden'>
            {/* ad section */}
            <div className="mt-28 flex  gap-6 max-sm:flex-col mx-10 justify-center max-sm:mx-5">
                {/* first box */}
                <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-md h-[570px] w-[750px] p-2 max-sm:w-[350px] max-sm:h-[300px] ">
                    <div className='flex gap-10 items-center justify-center ml-20 max-sm:gap-2 max-sm:ml-5'>
                        <img className='w-[200px] h-[250px] max-sm:w-[150px] max-sm:h-[120px]' src={beat} alt="" />
                        <img className='w-[300px] h-[400px] ml-[100px] max-sm:w-[150px] max-sm:ml-5 max-sm:h-[200px]' src={juicebg} alt="" />
                    </div>

                    <p className='absolute bottom-[80px] left-[100px] w-[290px] max-sm:w-[200px] max-sm:text-[12px] max-sm:bottom-[300px] max-sm:left-[70px] font-bold text-slate-100'>Brighten Your Day With The Sunny Flavors of our fruit Juices</p>
                    <div>
                        {/* <img className='w-[50px]' src={natural} alt="" /> */}
                        <h1 className='font-bold  text-yellow-400 absolute top-[130px] left-[300px] text-[28px] max-sm:text-[15px] max-sm:top-[120px] max-sm:left-[150px]'>100% Natural</h1>
                    </div>
                    <div className="flex items-center gap-2 w-[120px] bg-transparent border border-black rounded-lg px-2 py-1 hover:bg-black hover:text-white hover:scale-110 transition mt-20 ml-[300px] max-sm:ml-[100px] max-sm:mt-[50px] max-sm:text-sm">
                        <button className=''>Shop Now </button><FaCartShopping />

                    </div>


                </div>

                {/* second box */}
                <div className='flex flex-col gap-6 max-sm:gap-4'>
                    <div className='bg-gradient-to-r from-teal-200 to-teal-500 rounded-md flex font-Gabarito h-[272px] w-[450px] p-2 max-sm:w-[350px] max-sm:h-[300px]'>

                        <div>
                            <img className='w-[190px] mt-[72px] max-sm:mt-[125px] ' src={veg} alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-[30px] max-sm:text-[25px] max-sm:-ml-20'>30% OFF</h1>
                            <hr className='border-t-2 border-black mt-5 w-[130px] max-sm:-ml-20' />
                            <p className='absolute right-[150px] top-[175px] max-sm:top-[490px] max-sm:right-[100px]'>SALE</p>
                            <div className='mt-7 text-[30px] font-semibold ml-5'>
                                <h1 >Fruits &</h1>
                                <h2>Vegetables</h2>
                            </div>
                            <div className='flex w-[160px] max-sm:w-[150px] max-sm:text-sm mt-5 bg-transparent border px-1.5 py-1 rounded-md hover:scale-95 transition'>
                                <button>Shop Collections </button>
                                <img className='w-[25px]' src={shop} alt="" />
                            </div>


                        </div>
                    </div>

                    {/* third box */}
                    <div className='bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-md h-[272px] w-[450px] max-sm:w-[350px] max-sm:h-[300px] flex'>

                        <div>
                            <img className='w-[190px] mt-[72px]  max-sm:w-[150px] max-sm:mt-[100px]' src={choco} alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-[30px] max-sm:text-[25px] max-sm:-ml-16'>28% OFF</h1>
                            <hr className='border-t-2 border-black mt-5 w-[130px] max-sm:-ml-16' />
                            <p className='absolute right-[156px] top-[460px] max-sm:top-[799px] max-sm:right-[108px]'>SALE</p>
                            <div className='mt-7 text-[30px] font-semibold ml-5'>
                                <h1 >Candy &</h1>
                                <h2>Chocolates</h2>
                            </div>
                            <div className='flex w-[160px] max-sm:w-[150px] max-sm:text-sm mt-5 bg-transparent border px-1.5 py-1 rounded-md hover:scale-95 transition'>
                                <button>Shop Collections </button>
                                <img className='w-[25px]' src={shop} alt="" />
                            </div>


                        </div>
                    </div>
                </div>


            </div>


            {/* category section */}
            <section>
                <h1 className="text-2xl font-bold mt-20 mx-10 max-sm:text-lg">Categories</h1>
                <div className="w-full overflow-x-auto whitespace-nowrap mt-5 mx-10 scrollbar-hide">
                    <div className="inline-flex space-x-4">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="relative w-[280px] h-[170px] max-sm:w-[200px] max-sm:h-[120px] inline-block flex-shrink-0 bg-cover bg-center rounded-lg shadow-md cursor-pointer"
                                style={{ backgroundImage: `url(${category.bgImage})` }}
                                onClick={() => handleCategoryClick(category.path)}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <span className="text-white text-lg font-semibold px-4 py-2 max-sm:text-[15px]">
                                        {category.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* new arrived */}
            <NewArrived />


            {/* Best selling  */}
            <div className='mx-10 mb-20 max-sm:mx-5'>
                <h1 className='text-2xl font-bold mt-20 max-sm:text-lg max-sm:mx-5'>Best Selling Products</h1>
                <div className='flex ml-10 space-x-5 justify-between w-full overflow-x-auto whitespace-nowrap  scrollbar-hide py-4'>
                    <div className='flex flex-col shadow-xl p-3 w-[250px] rounded-lg mt-5 max-sm:h-[280px] '>
                        
                        <img className='w-[100%] h-[180px] max-sm:h-[120px]' src={chips} alt="" />
                        <h1 className='font-semibold ml-5 mt-5'>Potato Chips</h1>
                        <div className='flex flex-col justify-center ml-5 max-sm:flex-row max-sm:ml-0 max-sm:justify-evenly'>
                            <p>⭐4.1</p>
                            <p>₹50</p>
                        </div>
                        <div className='flex justify-between gap-5 mt-5 items-center'>
                            <div className='flex gap-2'>
                                <button className='bg-gray-300 px-1 rounded-md py-0.5'>+</button>
                                <p>1</p>
                                <button className='bg-gray-300 px-1 rounded-md py-0.5'>-</button>
                            </div>
                            <div className='flex gap-1 bg-green-300 items-center px-2 py-1 rounded-md hover:scale-95 max-sm:text-sm max-sm:w-[110px]'>
                                <button>Add to cart</button>
                                <img className='w-[25px] h-[20px] max-sm:w-[20px] max-sm:h-[20px]' src={buys} alt="" />
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col shadow-xl p-3 w-[250px] rounded-lg mt-5 max-sm:h-[280px]'>
                        <img className='w-[100%] h-[180px] max-sm:h-[120px]' src={banan} alt="" />
                        <h1 className='font-semibold ml-5 mt-5'>Banana</h1>
                        <div className='flex flex-col justify-center ml-5 max-sm:flex-row max-sm:ml-0 max-sm:justify-evenly'>
                            <p>⭐4.1</p>
                            <p>₹50</p>
                        </div>
                        <div className='flex justify-between gap-5 mt-5 items-center'>
                            <div className='flex gap-2'>
                                <button className='bg-gray-300 px-1 rounded-md py-0.5'>+</button>
                                <p>1</p>
                                <button className='bg-gray-300 px-1 rounded-md py-0.5'>-</button>
                            </div>
                            <div className='flex gap-1 bg-green-300 items-center px-2 py-1 rounded-md hover:scale-95 max-sm:text-sm max-sm:w-[110px]'>
                                <button>Add to cart</button>
                                <img className='w=[25px] h-[20px]' src={buys} alt="" />
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col shadow-xl p-3 w-[250px] rounded-lg mt-5 max-sm:h-[280px]'>
                        <img className='w-[100%] h-[180px] max-sm:h-[120px]' src={dairy} alt="" />
                        <h1 className='font-semibold ml-5 mt-5'>Daily Milk Pack</h1>
                        <div className='flex flex-col justify-center ml-5 max-sm:flex-row max-sm:ml-0 max-sm:justify-evenly'>
                            <p>⭐4.1</p>
                            <p>₹50</p>
                        </div>
                        <div className='flex justify-between gap-5 mt-5 items-center'>
                            <div className='flex gap-2'>
                                <button className='bg-gray-300 px-1 rounded-md py-0.5'>+</button>
                                <p>1</p>
                                <button className='bg-gray-300 px-1 rounded-md py-0.5'>-</button>
                            </div>
                            <div className='flex gap-1 bg-green-300 items-center px-2 py-1 rounded-md hover:scale-95 max-sm:text-sm max-sm:w-[110px]'>
                                <button>Add to cart</button>
                                <img className='w=[25px] h-[20px]' src={buys} alt="" />
                            </div>

                        </div>
                    </div>

                    <div className='flex flex-col shadow-xl p-3 w-[250px] rounded-lg mt-5 max-sm:h-[280px]'>
                        <img className='w-[100%] h-[180px] max-sm:h-[120px]' src={juuice} alt="" />
                        <h1 className='font-semibold ml-5 mt-5'>Apple Juice</h1>
                        <div className='flex flex-col justify-center ml-5 max-sm:flex-row max-sm:ml-0 max-sm:justify-evenly'>
                            <p>⭐4.1</p>
                            <p>₹50</p>
                        </div>
                        <div className='flex justify-between gap-5 mt-5 items-center'>
                            <div className='flex gap-2'>
                                <button className='bg-gray-300 px-1 rounded-md py-0.5'>+</button>
                                <p>1</p>
                                <button className='bg-gray-300 px-1 rounded-md py-0.5'>-</button>
                            </div>
                            <div className='flex gap-1 bg-green-300 items-center px-2 py-1 rounded-md hover:scale-95 max-sm:text-sm max-sm:w-[110px]'>
                                <button>Add to cart</button>
                                <img className='w=[25px] h-[20px]' src={buys} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            {/* download section */}
            <div>
                <div className='flex justify-center max-sm:hidden mb-10 mx-10'>
                    <img className='w-[900px]' src={phonebg1} alt="" />
                </div>
                <div className=' hidden  max-sm:flex max-sm:justify-center'>
                    <img className='w-[300px] h-[400px]' src={phonebg2} alt="" />
                </div>
            </div>

            {/* services */}
            <div className='flex justify-between font-Gabarito mb-20 mx-10 max-sm:flex-col max-sm:gap-6 mt-20'>
                <div className='flex gap-2 items-center'>
                    <img className='w-12 h-[70px] max-sm:w-10 max-sm:h-[50px]' src={free} alt="" />
                    <div className='flex flex-col w-[180px]'>
                        <h1 className='font-bold max-sm:text-[14px]'>Free Delivery</h1>
                        <p className='opacity-[80%] max-sm:text-[14px]'>Enjoy free delivery on all orders</p>

                    </div>

                </div>

                <div className='flex gap-2 items-center'>
                    <img className='w-12 h-[50px] max-sm:w-10 max-sm:h-[40px]' src={secure} alt="" />
                    <div className='flex flex-col w-[180px]'>
                        <h1 className='font-bold max-sm:text-[14px]'>100% Secure Payment</h1>
                        <p className='opacity-[80%] max-sm:text-[14px]'>Your transactions are fully protected and safe</p>

                    </div>

                </div>


                <div className='flex gap-2 '>
                    <img className='w-12 h-[50px] max-sm:w-10 max-sm:h-[40px]' src={quality} alt="" />
                    <div className='flex flex-col w-[180px]'>
                        <h1 className='font-bold max-sm:text-[14px]'>Quality Guarantee</h1>
                        <p className='opacity-[80%] max-sm:text-[14px]'>Premium quality assured</p>

                    </div>

                </div>

                <div className='flex gap-2 items-center'>
                    <img className='w-12 h-[50px] max-sm:w-10 max-sm:h-[40px]' src={savings} alt="" />
                    <div className='flex flex-col w-[180px]'>
                        <h1 className='font-bold max-sm:text-[14px]'>Guaranteed Savings</h1>
                        <p className='opacity-[80%] max-sm:text-[14px]'>Enjoy the best deals and save every time</p>

                    </div>

                </div>

                <div className='flex gap-2 items-center'>
                    <img className='w-12 h-[50px] max-sm:w-10 max-sm:h-[40px]' src={offers} alt="" />
                    <div className='flex flex-col w-[180px]'>
                        <h1 className='font-bold max-sm:text-[14px]'>Daily Offer</h1>
                        <p className='opacity-[80%] max-sm:text-[14px]'>New deals every day, just for you</p>

                    </div>

                </div>
            </div>

            {/* footer section */}
            <div className=' bg-gradient-to-r from-slate-900 to-slate-700 text-white '>
                <div className='flex max-sm:flex-col max-sm:items-center'>
                    <div className='flex flex-col ml-10 max-sm:ml-0'>
                        <div>
                            <img className='w-[250px] px-2 py-1 bg-slate-100 mb-10 mt-5 max-sm:mb-5' src={logobg} alt="" />
                        </div>
                        <p>Follow Us On</p>
                        <div className='flex items-center gap-6 mt-2 '>
                            <a href="https://www.instagram.com/accounts/login/?hl=en"><img className='w-9 max-sm:w-8 max-sm:h-8' src={insta} alt="" /></a>
                            <a href="#"> <img className='w-8 h-8 max-sm:w-7 max-sm:h-7' src={x} alt="" /></a>
                            <a href="#"> <img className='w-8 h-8 max-sm:w-7 max-sm:h-7' src={wha} alt="" /></a>
                            <a href="#"><img className='w-8 h-8 max-sm:w-7 max-sm:h-7' src={fb} alt="" /></a>
                        </div>


                    </div>
                    <div className='flex max-sm:gap-1'>
                    <div className='flex flex-col gap-2 mt-5 ml-[200px] max-sm:ml-0'>
                        <p className='font-bold text-white'>About</p>
                        <a href="#"><p className='text-slate-400 hover:text-white'>About Us </p></a>
                        <a href="#"><p className='text-slate-400 hover:text-white'>Contact Us </p></a>
                        <a href="#"><p className='text-slate-400 hover:text-white'>FAQ </p></a>
                        <a href="#"><p className='text-slate-400 hover:text-white'>Privacy Policy </p></a>
                        <a href="#"><p className='text-slate-400 hover:text-white'>Terms & Conditions </p></a>
                    </div>

                    <div className='flex flex-col gap-2 mt-5 ml-[100px] max-sm:ml-5'>
                    <p className='font-bold text-white'>Deals</p>
                        <a href="#"><p className='text-slate-400 hover:text-white'>Gift Cards </p></a>
                        <a href="#"><p className='text-slate-400 hover:text-white'>Career Opportunities </p></a>
                        <a href="#"><p className='text-slate-400 hover:text-white'>Delivery Information </p></a>
                        <a href="#"><p className='text-slate-400 hover:text-white'>Return & Refund Policy </p></a>
                        <a href="#"><p className='text-slate-400 hover:text-white'>Exclusive Deals</p></a>
                    </div>

                    </div>
                    
                    <div className='flex flex-col gap-2 mt-5 ml-[100px] max-sm:ml-[30px]'>
                    <p className='font-bold text-white'>Delivery</p>
                        <a href="#"><p className='text-slate-400 hover:text-white'>Secure Shopping </p></a>
                        <a href="#"><p className='text-slate-400 hover:text-white'>Global Shipping </p></a>
                        
                    </div>
                </div>
                <div className='flex justify-center mt-10'>
                        <h1>© 2025 DAILY DELIGHTS. All Rights Reserved</h1>
                </div>

            </div>
        </div>
    )
}

export default Home  