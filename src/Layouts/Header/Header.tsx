import React, { useState } from "react";
import IMAGES from "../../Constants";
import "../../index.css";

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  return (
    <header className="bg-[#E53E3E] rounded-b-4xl px-18 pb-1  ">
      <div className="head_top flex px-4 gap-5 items-center xl:justify-evenly  ">
        <img src={IMAGES.logo} className="xl:w-35 " alt="Colala Mall Logo" />

        <div className="inp flex items-center bg-white rounded-xl px-4  shadow w-[417px] h-[60px] xl:w-[600px]  ">
          <input
            type="text"
            placeholder="Search any product, shop or category"
            className="flex-grow outline-none text-gray-600 placeholder-gray-400 bg-transparent"
          />
          <img
            src={IMAGES.camera}
            alt="Camera Icon"
            className="w-5 h-5 ml-3"
          />
        </div>
      

      
      <div className="flex items-center gap-5 xl:gap-8  text-white pr-4">
        {/* All Categories Dropdown */}
        <div className="relative">
          <button
            className="bg-white text-black rounded-xl flex items-center gap-2 px-4 py-2 h-[60px] cursor-pointer shadow xl:px-6 xl:py-4"
            // onMouseEnter={() => setShowDropdown(true)}
            
            onClick={() => setShowDropdown((prev) => !prev)}
            type="button"
          >
            <img src={IMAGES.camera} alt="Category Icon" className="w-6 h-6" />
            <span>All Categories</span>
            <img src={IMAGES.dropdown} alt="Dropdown Arrow" className="w-3 h-3" />
          </button>
          {showDropdown && (
            <div className="absolute left-[-50px] mt-2 w-72 text-gray-950 bg-white rounded-3xl shadow-lg z-10 py-4 flex flex-col gap-2">
              {/* Example categories with icons, replace with your own icons and names */}
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.phone} alt="Phones & Tablets" /></span>
                <a href="#"> <span>Phones & Tablets</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 hover: cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.fashion} alt="Fashion" /></span>
                <a href="#"> <span>Fashion</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.home} alt="Home & Office" /></span>
                <a href="#"> <span>Home & Office</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.electronics} alt="Electronics" /></span>
                <a href="#"> <span>Electronics</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.computing} alt="Computing" /></span>
                <a href="#"> <span>Computing</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.grocery} alt="Grocery" /></span>
                <a href="#"> <span>Grocery</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.automobiles} alt="Automobiles" /></span>
                <a href="#"> <span>Automobiles</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.garden} alt="Garden & Outdoors" /></span>
                <a href="#"> <span>Garden & Outdoors</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.gaming} alt="Gaming" /></span>
                <a href="#"> <span>Gaming</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.sporting} alt="Sporting Goods" /></span>
                <a href="#"> <span>Sporting Goods</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.baby} alt="Baby Products" /></span>
                <a href="#"> <span>Baby Products</span></a>
              </div>
            </div>
          )}
        </div>

        {/* Sign In / Register Dropdown */}
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowUserDropdown((prev) => !prev)}
          >
            <img src={IMAGES.user} alt="User Icon" className="w-6 h-6 xl:w-8 xl:h-8" />
            <div className="flex flex-col leading-tight ">
              <span className="text-xs xl:text-sm">Welcome</span>
              <span className="font-semibold xl:text-lg">Sign in/Register</span>
            </div>
          </div>
          {showUserDropdown && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-3xl shadow-lg z-20 py-6 px-4 flex flex-col gap-3 text-gray-900" >
              <button className="bg-[#E53E3E] text-white rounded-xl py-3 font-semibold mb-2">Login</button>
              <button className="bg-gray-100 text-gray-900 rounded-xl py-3 font-semibold mb-4">Register</button>
              <div className="flex flex-col gap-2">
                <a href="/orders" className="flex items-center bg-white rounded-xl px-0 py-2 shadow-sm hover:bg-gray-100 relative">
                  <span className="flex items-center justify-center w-14 h-14 bg-[#E53E3E] rounded-l-xl"><img src={IMAGES.cart} alt="My Orders" className="w-7 h-7" /></span>
                  <span className="pl-4 text-[#E53E3E] font-semibold">My Orders</span>
                </a>
                <a href="/saved-items" className="flex items-center bg-white rounded-xl px-0 py-2 shadow-sm hover:bg-gray-100 relative">
                  <span className="flex items-center justify-center w-14 h-14 bg-purple-400 rounded-l-xl"><img src={IMAGES.heart} alt="Saved Items" className="w-7 h-7" /></span>
                  <span className="pl-4 text-purple-500 font-semibold">Saved Items</span>
                </a>
                <a href="/followed-stores" className="flex items-center bg-white rounded-xl px-0 py-2 shadow-sm hover:bg-gray-100 relative">
                  <span className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-l-xl"><img src={IMAGES.user} alt="Followed Stores" className="w-7 h-7" /></span>
                  <span className="pl-4 text-green-500 font-semibold">Followed Stores</span>
                </a>
                <a href="/reviews" className="flex items-center bg-white rounded-xl px-0 py-2 shadow-sm hover:bg-gray-100 relative">
                  <span className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-l-xl"><img src={IMAGES.star} alt="Reviews" className="w-7 h-7" /></span>
                  <span className="pl-4 text-blue-600 font-semibold">Reviews</span>
                </a>
                <a href="/referrals" className="flex items-center bg-white rounded-xl px-0 py-2 shadow-sm hover:bg-gray-100 relative">
                  <span className="flex items-center justify-center w-14 h-14 bg-indigo-500 rounded-l-xl"><img src={IMAGES.users} alt="Referrals" className="w-7 h-7" /></span>
                  <span className="pl-4 text-indigo-500 font-semibold">Referrals</span>
                </a>
                <a href="/support" className="flex items-center bg-white rounded-xl px-0 py-2 shadow-sm hover:bg-gray-100 relative">
                  <span className="flex items-center justify-center w-14 h-14 bg-orange-400 rounded-l-xl"><img src={IMAGES.headset} alt="Support" className="w-7 h-7" /></span>
                  <span className="pl-4 text-orange-400 font-semibold">Support</span>
                </a>
                <a href="/faqs" className="flex items-center bg-white rounded-xl px-0 py-2 shadow-sm hover:bg-gray-100 relative">
                  <span className="flex items-center justify-center w-14 h-14 bg-cyan-400 rounded-l-xl"><img src={IMAGES.question} alt="FAQs" className="w-7 h-7" /></span>
                  <span className="pl-4 text-cyan-400 font-semibold">FAQs</span>
                </a>
              </div>
              <div className="mt-4">
                <div className="text-xs text-gray-500 mb-2">Others</div>

                <div className="bg-white rounded-xl px-4 py-3 shadow-sm mb-2">Loyalty Points</div>
                <div className="bg-white rounded-xl px-4 py-3 shadow-sm">Seller Leaderboard</div>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <div className="relative flex items-center ml-3 gap-2 cursor-pointer">
          <img src={IMAGES.cart} alt="Cart Icon" className="w-[30px] h-[30px]" />
          <div className="absolute -top-2 -right-2 bg-white text-black text-xs w-8 h-4 flex items-center justify-center rounded-full">
            0
          </div>
          <span className="text-xs mt-3">Cart</span>
        </div>
      </div>
      </div>

      <div className="head_bottom">
        <div className="flex gap-25 xl:text-2xl  text-neutral-300 font-thin">
          
          <a href="#"><h3 className="pb-4 active_page" >Home <div className="underline" /></h3></a>
          <a href="#"><h3 className="pb-4 " >Feed <div className="underline" /></h3></a>
          <a href="#"><h3 className="pb-4 " >Chat <div className="underline" /></h3></a>
          <a href="#"><h3 className="pb-4 " >Stores <div className="underline" /></h3></a>
          <a href="#"><h3 className="pb-4 " >Settings <div className="underline" /></h3></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
