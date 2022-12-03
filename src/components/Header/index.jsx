import React from "react";
import searchIcon from "../../assets/icons/search.svg";
import bellIcon from "../../assets/icons/bell.svg";
import profilePicture from "../../assets/images/profile-picture.png";

const Header = ({ toggle, handleToggle }) => {
  return (
    <div
      className="h-[60px] bg-white z-50 fixed px-2 lg:px-5 md:px-5 right-0 left-0 flex items-center  justify-between"
      style={{ boxShadow: " 0px 4px 10px rgba(79, 79, 79, 0.07)" }}
    >
      <div className="flex items-center lg:gap-24 md:gap-10">
        <p
          className="font-Roboto text-[24px] leading-[28px] text-[#1875F0] font-black"
          onClick={handleToggle}
        >
          TransMonitor
        </p>
        <div
          datatype="search"
          className="lg:flex md:flex hidden items-center gap-2 lg:w-[336px] md:w-[96px]"
        >
          <img src={searchIcon} alt="search-icon" />
          <input
            placeholder="Search"
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      <div className="flex justify-center items-center lg:gap-16 md:gap-8  gap-2">
        <p className="text-[14px] leading-[19px] text-[#647787]">Support</p>
        <p className="text-[14px] leading-[19px] text-[#647787]">FAQs</p>
        <div>
          <img src={bellIcon} alt="notification-icon" />
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block md:block">
            <p className="text-[10px] leading-[13px] text-[#647787] text-right">
              Hello
            </p>
            <p className="text-[14px] leading-[19px] text-[#647787]">
              Oluwaleke Ojo
            </p>
          </div>
          <img
            src={profilePicture}
            alt="profile-pic"
            className="rounded-full h-9  w-9"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
