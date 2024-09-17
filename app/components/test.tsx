import React from "react";
import { ArrowDropDown } from "./ArrowDropDown";

export const LearingSection = (): JSX.Element => {
  return (
    <div className="inline-flex flex-col items-start gap-5 relative">
      <div className="inline-flex items-center gap-[358px] relative flex-[0_0_auto]">
        <div className="relative w-[207px] h-[25px] z-[1] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
          My Learnings
        </div>
        <div className="relative w-[364.52px] h-[47.24px] z-0 bg-[#d9d9d9]" />
      </div>
      <div className="flex flex-wrap w-[994px] items-start gap-[20px_20px] pt-0 pb-5 px-0 relative flex-[0_0_auto]">
        <div className="relative w-[233.35px] h-[321.26px] bg-white rounded-[5px] border-[0.5px] border-solid border-[#d1d1d1]">
          {/* Card Info */}
          <div className="flex flex-col w-56 h-[111px] items-start justify-around gap-[27px] absolute top-[116px] left-1.5">
            <div className="inline-flex flex-col items-start gap-[7px] relative flex-[0_0_auto]">
              {/* Card group data */}
              <div className="flex w-56 h-[15px] items-center gap-[5px] relative">
                <ArrowDropDown
                  className="!relative !w-3.5 !h-[15px]"
                  color="#B2B2B2"
                />
                <div className="relative w-fit [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#d9d9d9] text-[8px] tracking-[0] leading-[normal] whitespace-nowrap">
                  AWS
                </div>
                <div className="flex w-[184px] items-center gap-[3px] relative mr-[-2.00px]">
                  <div className="w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#777777] text-[8px] whitespace-nowrap relative tracking-[0] leading-[normal]">
                    55%
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <img
                      className="self-stretch w-full relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-72.svg"
                    />
                    <img
                      className="w-[87.19px] relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-80.svg"
                    />
                  </div>
                </div>
              </div>
              {/* Card Group Content */}
              <div className="flex flex-col w-56 h-[45px] justify-end border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9] items-center relative">
                <div className="relative w-56 h-[15px]">
                  <div className="flex w-[87px] h-[15px] items-center gap-1 absolute top-0 left-0">
                    <ArrowDropDown
                      className="!relative !w-[13.29px] !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[10px] tracking-[0] leading-[normal]">
                      AWS SkillBuilder
                    </div>
                  </div>
                  <div className="flex w-[127px] items-center justify-between absolute top-[3px] left-[97px]">
                    <div className="inline-flex gap-px flex-[0_0_auto] items-center relative">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="relative w-[17px] h-[5px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[8px] tracking-[0] leading-[normal] whitespace-nowrap">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[15px] h-[5px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[8px] whitespace-nowrap relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-1 inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-[17px] h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[8px] whitespace-nowrap relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[50px] h-[5px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-10 h-[5px] top-0.5 left-[21px] bg-[#09760773] rounded-[10px]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="w-[87px] h-[15px] items-center gap-1 flex relative">
                    <ArrowDropDown
                      className="!relative !w-[13.29px] !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[9px] tracking-[0] leading-[normal]">
                      Course
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-end relative flex-[0_0_auto]">
                    <div className="gap-1 inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-[17px] h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[8px] whitespace-nowrap relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[50px] h-[5px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-10 h-[5px] top-0.5 left-[21px] bg-[#09760773] rounded-[10px]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center justify-between relative flex-[0_0_auto]">
                  <div className="w-[87px] h-[15px] items-center gap-1 flex relative">
                    <ArrowDropDown
                      className="!relative !w-[13.29px] !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[9px] tracking-[0] leading-[normal]">
                      Projects
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-end relative flex-[0_0_auto]">
                    <div className="gap-1 inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-[17px] h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[8px] whitespace-nowrap relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[50px] h-[5px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-10 h-[5px] top-0.5 left-[21px] bg-[#09760773] rounded-[10px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card info */}
          <div className="flex flex-wrap w-[226px] h-24 items-center justify-center gap-[0px_0px] absolute top-2 left-0.5">
            <div className="w-[226px] items-start justify-between px-0 py-[5px] mt-[-8.00px] flex relative">
              <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                <div className="relative w-2 h-2 bg-white rounded border border-solid border-[#55cc6f] shadow-[0px_0px_3px_#20450f40]" />
                <div className="relative w-[30.34px] h-[7.17px] mt-[-0.59px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#59a18c] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Active
                </div>
              </div>
              <div className="inline-flex h-2.5 items-center relative flex-[0_0_auto] bg-[#d9d9d9] rounded-[5px]">
                <div className="relative w-[39.2px] h-[6.4px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-black text-[10px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  DevOps
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col max-w-[140px] max-h-[75px] items-center justify-center relative flex-[0_0_auto]">
              <img
                className="relative w-[140px] h-[76.71px] mt-[-0.85px] mb-[-0.85px]"
                alt="Rectangle"
                src="rectangle-77.svg"
              />
            </div>
            <div className="flex w-[224.88px] items-center justify-between relative mb-[-8.00px] border-b-[0.5px] [border-bottom-style:solid] border-[#eaeaea]">
              <div className="relative w-[104px] h-[17px] mt-[-0.50px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Cloud Platforms
              </div>
              <div className="gap-0.5 inline-flex items-center relative flex-[0_0_auto]">
                <div className="w-[12.33px] h-[9.46px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                  78%
                </div>
                <div className="relative w-[57.55px] h-[5.91px] bg-[#e8ece8] rounded-[5px]">
                  <div className="w-[41px] h-1.5 bg-[#09760773] rounded-[5px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
