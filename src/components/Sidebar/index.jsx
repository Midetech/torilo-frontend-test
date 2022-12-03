import React from "react";
import speedometer from "../../assets/icons/speedometer.svg";
import wallet from "../../assets/icons/wallet.svg";
import walletChecked from "../../assets/icons/wallet-checked.svg";
import walletCanceled from "../../assets/icons/wallet-canceled.svg";
import user from "../../assets/icons/user.svg";
import order from "../../assets/icons/order.svg";
import orderFulfilled from "../../assets/icons/order-fulfilled.svg";
import orderPending from "../../assets/icons/order-pending.svg";
import manual from "../../assets/icons/manual.svg";
const Sidebar = ({ toggle }) => {
  return (
    <div
      className={`${
        toggle ? "  hidden " : "block"
      } fixed z-10 bottom-0 w-[210px] top-10 lg:w-[260px] bg-white lg:relative pt-10 lg:top-12 md:top-12 lg:flex item-center flex-col  gap-5`}
    >
      <button className="h-[33px] w-[163px] bg-[#27AE60] rounded-[30px] text-white uppercase ml-5 text-[12px] leading-[14px] font-Roboto font-black ">
        Generate Invoice
      </button>

      <div className="flex flex-col gap-5 mt-5 lg:mt-0 md:mt-0">
        {links.map((item, index) => (
          <div key={index} className="flex  gap-4 flex-col text-[#647787]">
            <p className="text-[11px] leading-[15px] pl-5">{item.section}</p>

            {item.subLinks.map((link, index) => (
              <div
                key={index}
                className={` ${
                  item.section === "Main" && index === 0
                    ? "border-l-[4px]  border-[#1875F0] bg-[#1875F0] bg-opacity-[0.1]"
                    : ""
                } flex items-center gap-2 h-[30px] hover:h-[30px] hover:p-1  p-1 hover:border-l-[4px]  hover:border-[#1875F0] pl-5 hover:pl-5 cursor-pointer hover:bg-[#1875F0] hover:bg-opacity-[0.1]`}
              >
                <img src={link.icon} alt={link.title} />
                <p className="text-[11px] leading-[15px] ">{link.title}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

const links = [
  {
    section: "Main",
    subLinks: [
      {
        title: "Overview",
        icon: speedometer,
      },
    ],
  },

  {
    section: "Payments",
    subLinks: [
      {
        title: "All Payments",
        icon: wallet,
      },
      {
        title: "Reconcilled Payments",
        icon: walletChecked,
      },
      {
        title: "Un - Reconcilled Payments",
        icon: walletCanceled,
      },
      {
        title: "Manual Settlement",
        icon: manual,
      },
    ],
  },
  {
    section: "Orders",
    subLinks: [
      {
        title: "All Orders",
        icon: order,
      },
      {
        title: "Pending Orders",
        icon: orderPending,
      },
      {
        title: "Reconcilled Orders",
        icon: orderFulfilled,
      },
    ],
  },
  {
    section: "",
    subLinks: [
      {
        title: "Merchant Profile",
        icon: user,
      },
    ],
  },
];
