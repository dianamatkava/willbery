import { WillberyLogo } from "./icons/WillberyLogo";
import { FaListUl } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { LuTrash } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineNotifications } from "react-icons/md";

import { Link, NavLink } from "@remix-run/react";

export default function SideBar() {
  const navLinkClass = ({
    isActive,
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }) => (isActive ? "side-bar-active" : isPending ? "pending" : "");

  return (
    <div
      className="
      flex flex-col w-11 items-center justify-start gap-32
      px-1.5 py-5 relative border-r [border-right-style:solid] border-[#eaeaea]
      sticky top-0 h-screen overflow-y-auto z-10"
    >
      <Link to={`/`}>
        <WillberyLogo />
      </Link>

      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-center justify-center gap-8">
          <NavLink to={`/calendar`} className={navLinkClass}>
            <FaRegCalendar size={22} color="#4A4A4A" />
          </NavLink>
          <NavLink to={`/activities`} className={navLinkClass}>
            <FaListUl size={22} color="#4A4A4A" />
          </NavLink>
          <NavLink to={`/stat`} className={navLinkClass}>
            <IoStatsChart size={22} color="#4A4A4A" />
          </NavLink>
        </div>
        <footer className="inline-flex flex-col items-center justify-center gap-4 bg-transparent">
          <NavLink to={`/deleted`} className={navLinkClass}>
            <LuTrash size={22} color="#4A4A4A" />
          </NavLink>
          <NavLink to={`/settings`} className={navLinkClass}>
            <MdOutlineSettings size={25} color="#4A4A4A" />
          </NavLink>
          <div className="">
            <div className="">
              <NavLink to={`/notifications`} className={navLinkClass}>
                <MdOutlineNotifications size={25} color="#4A4A4A" />
              </NavLink>
            </div>
          </div>
          <div className="relative ">
            <div className="">
              <NavLink to={`/profile`}>
                <div className="relative w-8 h-8 bg-[#ff5500] rounded-[16.5px/17.09px] border-[0.5px] border-solid border-[#d8d3d3] hover:border-[#F50] hover:border-[1px]">
                  <div className="absolute w-[21px] top-[9px] left-1.5 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#fffafa] text-xs tracking-[0] leading-[normal]">
                    DM
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
