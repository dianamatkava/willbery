import { CalendarIcon } from "./icons/CalendarIcon";
import { ListViewIcon } from "./icons/ListviewIcon";
import { NotificationsIcon } from "./icons/NotificationsIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { StatsIcon } from "./icons/StatsIcon";
import { TrashIcon } from "./icons/TrashIcon";
import { WillberyLogo } from "./icons/WillberyLogo";

import {
  Link,
  NavLink,
  // useLocation,
  // useNavigate,
  // useOutlet,
} from "@remix-run/react";

export default function SideBar() {
  const navLinkClass = ({
    isActive,
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }) => (isActive ? "side-bar-active" : isPending ? "pending" : "");

  return (
    <div className="flex flex-col w-11 h-screen items-center justify-between px-1.5 py-5 relative border-r [border-right-style:solid] border-[#eaeaea]">
      <Link to={`/`}>
        <WillberyLogo />
      </Link>

      <div className="flex flex-col w-7 h-[134px] items-center justify-center gap-[25px] absolute top-[120px] left-[9px] z-[1]">
        <NavLink to={`/calendar`} className={navLinkClass}>
          <CalendarIcon
            className="!relative !w-7 !h-7 !z-[2]"
            color="#4A4A4A"
          />
        </NavLink>
        <NavLink to={`/`} className={navLinkClass}>
          <ListViewIcon className={"!relative !w-7 !h- 7 !z-[1]"} />
        </NavLink>
        <NavLink to={`/stat`} className={navLinkClass}>
          <StatsIcon className="!relative !w-7 !h-7 !z-0" color="#4A4A4A" />
        </NavLink>
      </div>
      <footer className="inline-flex flex-col items-center justify-center gap-5 relative flex-[0_0_auto] z-0 bg-transparent">
        <NavLink to={`/deleted`} className={navLinkClass}>
          <TrashIcon
            className="!relative !w-[26px] !h-[26px]"
            color="#4A4A4A"
          />
        </NavLink>
        <NavLink to={`/settings`} className={navLinkClass}>
          <SettingsIcon className="!relative !w-[31px] !h-[34.32px]" />
        </NavLink>
        <div className="relative w-[31px] h-[35px]">
          <div className="relative h-[35px]">
            <NavLink to={`/notifications`} className={navLinkClass}>
              <div className="absolute w-2 h-2 top-0 left-[23px] bg-[#e3a01f] rounded" />
              <NotificationsIcon
                className="!absolute !w-[31px] !h-[31px] !top-1 !left-0"
                color="#4A4A4A"
              />
            </NavLink>
          </div>
        </div>
        <div className="relative w-8 h-[33.18px]">
          <div className="w-[34px] h-[33px]">
            <NavLink to={`/profile`}>
              <div className="relative w-[33px] h-[34px] bg-[#ff5500] rounded-[16.5px/17.09px] border-[0.5px] border-solid border-[#d8d3d3] hover:border-[#F50] hover:border-[1px]">
                <div className="absolute w-[21px] top-[9px] left-1.5 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#fffafa] text-xs tracking-[0] leading-[normal]">
                  DM
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
