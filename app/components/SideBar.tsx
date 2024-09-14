import { CalendarIcon } from "./icons/CalendarIcon";
import { ListViewIcon } from "./icons/ListviewIcon";
import { NotificationsIcon } from "./icons/NotificationsIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { StatsIcon } from "./icons/StatsIcon";
import { TrashIcon } from "./icons/TrashIcon";
import { WillberyLogo } from "./icons/WillberyLogo";

export default function SideBar() {
  return (
    <div className="flex flex-col w-11 h-[var(--responsive-device-width)] items-center justify-between px-1.5 py-5 relative border-r [border-right-style:solid] border-[#eaeaea]">
      <WillberyLogo />
      <div className="flex flex-col w-7 h-[134px] items-center justify-center gap-[25px] absolute top-[120px] left-[9px] z-[1]">
        <CalendarIcon className="!relative !w-7 !h-7 !z-[2]" color="#4A4A4A" />
        <ListViewIcon className="!relative !w-7 !h-7 !z-[1]" color="#4A4A4A" />
        <StatsIcon className="!relative !w-7 !h-7 !z-0" color="#4A4A4A" />
      </div>
      <footer className="inline-flex flex-col items-center justify-center gap-5 relative flex-[0_0_auto] z-0 bg-transparent">
        <TrashIcon className="!relative !w-[26px] !h-[26px]" color="#4A4A4A" />
        <SettingsIcon className="!relative !w-[31px] !h-[34.32px]" />
        <div className="relative w-[31px] h-[35px]">
          <div className="relative h-[35px]">
            <div className="absolute w-2 h-2 top-0 left-[23px] bg-[#e3a01f] rounded" />
            <NotificationsIcon
              className="!absolute !w-[31px] !h-[31px] !top-1 !left-0"
              color="#4A4A4A"
            />
          </div>
        </div>
        <div className="relative w-8 h-[33.18px]">
          <div className="w-[34px] h-[33px]">
            <div className="relative w-[33px] h-[34px] bg-[#ff5500] rounded-[16.5px/17.09px] border-[0.5px] border-solid border-[#d8d3d3]">
              <div className="absolute w-[21px] top-[9px] left-1.5 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#fffafa] text-xs tracking-[0] leading-[normal]">
                DM
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
