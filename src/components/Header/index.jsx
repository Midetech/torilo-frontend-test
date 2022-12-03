import React from "react";
import searchIcon from "../../assets/icons/search.svg";
import bellIcon from "../../assets/icons/bell.svg";
import profilePicture from "../../assets/images/profile-picture.png";
import open from "../../assets/icons/open.svg";
const Header = ({ handleToggle, toggle }) => {
  return (
    <div
      className="h-[60px] bg-white z-50 fixed px-2 lg:px-5 md:px-5 right-0 left-0 flex items-center  justify-between"
      style={{ boxShadow: " 0px 4px 10px rgba(79, 79, 79, 0.07)" }}
    >
      <div className="flex items-center lg:gap-24 md:gap-10  gap-6">
        {toggle ? (
          <img
            onClick={handleToggle}
            src={open}
            alt="open-icon"
            className="h-5 w-5  lg:hidden md:hidden block "
          />
        ) : (
          <p className="font-Roboto text-[24px] leading-[28px] text-[#1875F0] font-black">
            TransMonitor
          </p>
        )}

        <p className="font-Roboto text-[24px] leading-[28px] text-[#1875F0] font-black hidden lg:block md:block">
          TransMonitor
        </p>
        <div
          datatype="search"
          className={`${
            toggle ? "flex" : "hidden"
          } lg:flex md:flex items-center gap-2 lg:w-[336px] md:w-[96px] w-[120px]`}
        >
          <img src={searchIcon} alt="search-icon" />
          <input
            placeholder="Search..."
            className="bg-transparent outline-none w-full"
          />
        </div>
      </div>

      <div className="flex justify-center items-center lg:gap-16 md:gap-8  gap-4">
        <p className="text-[14px] leading-[19px] text-[#647787]">Support</p>
        <p className="text-[14px] leading-[19px] text-[#647787]">FAQs</p>
        <div className="relative">
          <div className="bg-[#1860EC] w-4 h-4 flex justify-center items-center text-[10px] leading-[3px] text-white rounded-full absolute bottom-2 left-2">
            {" "}
            8
          </div>
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
