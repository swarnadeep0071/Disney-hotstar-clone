import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header({ user, onLogout, searchQuery, onSearchChange, onNavClick }) {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  const displayName =
    user?.name || (user?.email ? user.email.split("@")[0] : "Guest");
  const avatarUrl =
    user?.photoURL ||
    "https://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/User-Administrator-Blue-icon.png";

  return (
    <div className="sticky top-0 z-40 flex items-center justify-between p-3 md:p-5 gap-4 md:gap-8 bg-gradient-to-b from-black/90 to-transparent backdrop-blur">
      {/* Left: logo + menu */}
      <div className="flex items-center gap-8">
        <img src={logo} className="w-[70px] object-cover" alt="Logo" />

        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem
              key={item.name}
              name={item.name}
              Icon={item.icon}
              onClick={() => onNavClick?.(item.name)}
            />
          ))}
        </div>

        {/* Mobile menu */}
        <div className="flex md:hidden gap-5 relative">
          {menu.slice(0, 3).map((item) => (
            <HeaderItem
              key={item.name}
              name=""
              Icon={item.icon}
              onClick={() => onNavClick?.(item.name)}
            />
          ))}

          <div onClick={() => setToggle(!toggle)}>
            <HeaderItem name="" Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute left-0 mt-3 bg-[#121212] border border-gray-700 rounded-lg p-3 shadow-xl">
                {menu.slice(3).map((item) => (
                  <HeaderItem
                    key={item.name}
                    name={item.name}
                    Icon={item.icon}
                    onClick={() => {
                      onNavClick?.(item.name);
                      setToggle(false);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right: search + user */}
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="hidden md:block bg-[#1f1f1f] text-white px-3 py-1 rounded-full outline-none text-sm border border-transparent focus:border-blue-500"
        />

        <div className="hidden md:flex flex-col items-end">
          <span className="text-sm text-white font-medium">{displayName}</span>
          {user?.email && (
            <span className="text-xs text-gray-400">{user.email}</span>
          )}
        </div>

        <img
          src={avatarUrl}
          className="w-[40px] h-[40px] rounded-full object-cover border border-gray-600"
          alt="User avatar"
        />

        <button
          onClick={onLogout}
          className="text-xs md:text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;