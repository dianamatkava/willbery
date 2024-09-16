import { ArrowDropDown } from "./icons/ArrowDropDown";

export const ListView = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[var(--responsive-device-width)] h-[var(--responsive-device-width)] items-start gap-[50px] pl-[120px] pr-[122px] pt-2.5 pb-0 relative">
      <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto] mr-[-36.00px]">
        <div className="relative w-[207px] h-[25px] z-[1] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
          My Learnings
        </div>
        <div className="relative w-[364.52px] h-[47.24px] z-0 bg-[#d9d9d9]" />
      </div>
      <div className="flex flex-wrap w-[994px] items-center gap-[20px_20px] px-0 py-5 relative flex-[0_0_auto]">
        <div className="relative w-[233.35px] h-[321.26px] bg-white rounded-[5px] border-[0.5px] border-solid border-[#d1d1d1]">
          <div className="inline-flex flex-col h-[187px] items-start absolute top-[116px] left-1.5">
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
              <div className="flex w-56 h-[15px] items-center gap-[5px] relative">
                <ArrowDropDown
                  className="!w-3.5 !relative !h-[15px]"
                  color="#B2B2B2"
                />
                <div className="relative w-[13.73px] h-[7.81px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#d9d9d9] text-[6px] tracking-[0] leading-[normal]">
                  AWS
                </div>
                <div className="flex w-[184px] items-center gap-[3px] relative">
                  <div className="w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#777777] text-[4px] relative tracking-[0] leading-[normal]">
                    55%
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <img
                      className="self-stretch w-full relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-72-4.svg"
                    />
                    <img
                      className="w-[87.19px] relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-80-5.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[3px] px-[3px] py-0 relative flex-[0_0_auto] border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="w-[216px] justify-between flex-[0_0_auto] flex items-center relative">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                      AWS SkillBuilder
                    </div>
                  </div>
                  <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Course
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Practise
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto] mb-[-10.00px]">
              <div className="flex w-56 h-[15px] items-center gap-[5px] relative">
                <ArrowDropDown
                  className="!w-3.5 !relative !h-[15px]"
                  color="#B2B2B2"
                />
                <div className="relative w-[13.73px] h-[7.81px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#d9d9d9] text-[6px] tracking-[0] leading-[normal]">
                  AWS
                </div>
                <div className="flex w-[184px] items-center gap-[3px] relative">
                  <div className="w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#777777] text-[4px] relative tracking-[0] leading-[normal]">
                    55%
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <img
                      className="self-stretch w-full relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-72-5.svg"
                    />
                    <img
                      className="w-[87.19px] relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-80-6.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[3px] px-[3px] py-0 relative flex-[0_0_auto] border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="w-[216px] justify-between flex-[0_0_auto] flex items-center relative">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                      AWS SkillBuilder
                    </div>
                  </div>
                  <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Course
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Practise
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-[226px] h-24 items-center justify-center gap-[0px_0px] absolute top-2 left-0.5">
            <div className="flex w-[226px] justify-between mt-[-6.50px] items-center relative">
              <div className="relative w-[38.76px] h-[7.17px]">
                <div className="absolute w-[30px] top-0 left-1.5 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#59a18c] text-[5px] tracking-[0] leading-[normal]">
                  Active
                </div>
                <div className="absolute w-[5px] h-1.5 top-px left-0 bg-white rounded-[2.56px/2.98px] border border-solid border-[#55cc6f] shadow-[0px_0px_3px_#20450f40]" />
              </div>
              <div className="relative w-[42px] h-[15px] mr-[-2.00px]">
                <div className="relative w-10 h-[15px] bg-[#d9d9d9] rounded-[5px]">
                  <div className="absolute w-7 top-[3px] left-[9px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-black text-[6px] tracking-[0] leading-[normal]">
                    DevOps
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[140px] h-[73px] items-center justify-center gap-2.5 relative">
              <img
                className="relative self-stretch w-full h-[76.71px] mt-[-1.85px] mb-[-1.85px]"
                alt="Rectangle"
                src="rectangle-77-6.svg"
              />
            </div>
            <div className="inline-flex items-center justify-center gap-[5px] pt-1 pb-0 px-0 relative flex-[0_0_auto] mb-[-6.50px] border-b-[0.5px] [border-bottom-style:solid] border-[#eaeaea]">
              <div className="relative w-[104px] h-[17px] mt-[-0.50px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Cloud Platforms
              </div>
              <div className="inline-flex items-end relative flex-[0_0_auto]">
                <div className="inline-flex justify-center gap-px flex-[0_0_auto] items-center relative">
                  <div className="relative w-[6.41px] h-[8.95px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                  <div className="w-[7.69px] h-[5.97px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                    23%
                  </div>
                </div>
                <div className="inline-flex justify-center gap-px flex-[0_0_auto] items-center relative">
                  <div className="relative w-[6.41px] h-[8.95px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                  <div className="w-[7.69px] h-[5.97px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                    23%
                  </div>
                </div>
              </div>
              <div className="gap-0.5 inline-flex items-center relative flex-[0_0_auto]">
                <div className="w-[12.33px] h-[9.46px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                  78%
                </div>
                <div className="relative w-[57.55px] h-[5.91px] bg-[#e8ece8] rounded-[5px]">
                  <div className="w-[41px] rounded-[5px] h-1.5 bg-[#09760773]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[233.35px] h-[321.26px] bg-white rounded-[5px] border-[0.5px] border-solid border-[#d1d1d1]">
          <div className="inline-flex flex-col h-[187px] items-start absolute top-[116px] left-1.5">
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
              <div className="flex w-56 h-[15px] items-center gap-[5px] relative">
                <ArrowDropDown
                  className="!w-3.5 !relative !h-[15px]"
                  color="#B2B2B2"
                />
                <div className="relative w-[13.73px] h-[7.81px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#d9d9d9] text-[6px] tracking-[0] leading-[normal]">
                  AWS
                </div>
                <div className="flex w-[184px] items-center gap-[3px] relative">
                  <div className="w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#777777] text-[4px] relative tracking-[0] leading-[normal]">
                    55%
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <img
                      className="self-stretch w-full relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-72-6.svg"
                    />
                    <img
                      className="relative w-[87.19px] h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-80-7.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[3px] px-[3px] py-0 relative flex-[0_0_auto] border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="w-[216px] justify-between flex-[0_0_auto] flex items-center relative">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                      AWS SkillBuilder
                    </div>
                  </div>
                  <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Course
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Practise
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto] mb-[-10.00px]">
              <div className="flex w-56 h-[15px] items-center gap-[5px] relative">
                <ArrowDropDown
                  className="!w-3.5 !relative !h-[15px]"
                  color="#B2B2B2"
                />
                <div className="relative w-[13.73px] h-[7.81px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#d9d9d9] text-[6px] tracking-[0] leading-[normal]">
                  AWS
                </div>
                <div className="flex w-[184px] items-center gap-[3px] relative">
                  <div className="w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#777777] text-[4px] relative tracking-[0] leading-[normal]">
                    55%
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <img
                      className="self-stretch w-full relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-72-7.svg"
                    />
                    <img
                      className="relative w-[87.19px] h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-80-8.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[3px] px-[3px] py-0 relative flex-[0_0_auto] border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="w-[216px] justify-between flex-[0_0_auto] flex items-center relative">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                      AWS SkillBuilder
                    </div>
                  </div>
                  <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Course
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Practise
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-[226px] h-24 items-center justify-center gap-[0px_0px] absolute top-2 left-0.5">
            <div className="flex w-[226px] justify-between mt-[-6.50px] items-center relative">
              <div className="relative w-[38.76px] h-[7.17px]">
                <div className="absolute w-[30px] top-0 left-1.5 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#59a18c] text-[5px] tracking-[0] leading-[normal]">
                  Active
                </div>
                <div className="absolute w-[5px] h-1.5 top-px left-0 bg-white rounded-[2.56px/2.98px] border border-solid border-[#55cc6f] shadow-[0px_0px_3px_#20450f40]" />
              </div>
              <div className="relative w-[42px] h-[15px] mr-[-2.00px]">
                <div className="relative w-10 h-[15px] bg-[#d9d9d9] rounded-[5px]">
                  <div className="absolute w-7 top-[3px] left-[9px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-black text-[6px] tracking-[0] leading-[normal]">
                    DevOps
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[140px] h-[73px] items-center justify-center gap-2.5 relative">
              <img
                className="relative self-stretch w-full h-[76.71px] mt-[-1.85px] mb-[-1.85px]"
                alt="Rectangle"
                src="rectangle-77-3.svg"
              />
            </div>
            <div className="inline-flex items-center justify-center gap-[5px] pt-1 pb-0 px-0 relative flex-[0_0_auto] mb-[-6.50px] border-b-[0.5px] [border-bottom-style:solid] border-[#eaeaea]">
              <div className="relative w-[104px] h-[17px] mt-[-0.50px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Cloud Platforms
              </div>
              <div className="inline-flex items-end relative flex-[0_0_auto]">
                <div className="inline-flex justify-center gap-px flex-[0_0_auto] items-center relative">
                  <div className="relative w-[6.41px] h-[8.95px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                  <div className="w-[7.69px] h-[5.97px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                    23%
                  </div>
                </div>
                <div className="inline-flex justify-center gap-px flex-[0_0_auto] items-center relative">
                  <div className="relative w-[6.41px] h-[8.95px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                  <div className="w-[7.69px] h-[5.97px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                    23%
                  </div>
                </div>
              </div>
              <div className="gap-0.5 inline-flex items-center relative flex-[0_0_auto]">
                <div className="w-[12.33px] h-[9.46px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                  78%
                </div>
                <div className="relative w-[57.55px] h-[5.91px] bg-[#e8ece8] rounded-[5px]">
                  <div className="w-[41px] rounded-[5px] h-1.5 bg-[#09760773]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[233.35px] h-[321.26px] bg-white rounded-[5px] border-[0.5px] border-solid border-[#d1d1d1]">
          <div className="inline-flex flex-col h-[187px] items-start absolute top-[116px] left-1.5">
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
              <div className="flex w-56 h-[15px] items-center gap-[5px] relative">
                <ArrowDropDown
                  className="!w-3.5 !relative !h-[15px]"
                  color="#B2B2B2"
                />
                <div className="relative w-[13.73px] h-[7.81px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#d9d9d9] text-[6px] tracking-[0] leading-[normal]">
                  AWS
                </div>
                <div className="flex w-[184px] items-center gap-[3px] relative">
                  <div className="w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#777777] text-[4px] relative tracking-[0] leading-[normal]">
                    55%
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <img
                      className="self-stretch w-full relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-72-8.svg"
                    />
                    <img
                      className="w-[87.19px] relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-80-9.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[3px] px-[3px] py-0 relative flex-[0_0_auto] border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="w-[216px] justify-between flex-[0_0_auto] flex items-center relative">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                      AWS SkillBuilder
                    </div>
                  </div>
                  <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Course
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Practise
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto] mb-[-10.00px]">
              <div className="flex w-56 h-[15px] items-center gap-[5px] relative">
                <ArrowDropDown
                  className="!w-3.5 !relative !h-[15px]"
                  color="#B2B2B2"
                />
                <div className="relative w-[13.73px] h-[7.81px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#d9d9d9] text-[6px] tracking-[0] leading-[normal]">
                  AWS
                </div>
                <div className="flex w-[184px] items-center gap-[3px] relative">
                  <div className="w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#777777] text-[4px] relative tracking-[0] leading-[normal]">
                    55%
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <img
                      className="self-stretch w-full relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-72-9.svg"
                    />
                    <img
                      className="w-[87.19px] relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-80-10.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[3px] px-[3px] py-0 relative flex-[0_0_auto] border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="w-[216px] justify-between flex-[0_0_auto] flex items-center relative">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                      AWS SkillBuilder
                    </div>
                  </div>
                  <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Course
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Practise
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-[226px] h-24 items-center justify-center gap-[0px_0px] absolute top-2 left-0.5">
            <div className="flex w-[226px] justify-between mt-[-6.50px] items-center relative">
              <div className="relative w-[38.76px] h-[7.17px]">
                <div className="absolute w-[30px] top-0 left-1.5 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#59a18c] text-[5px] tracking-[0] leading-[normal]">
                  Active
                </div>
                <div className="absolute w-[5px] h-1.5 top-px left-0 bg-white rounded-[2.56px/2.98px] border border-solid border-[#55cc6f] shadow-[0px_0px_3px_#20450f40]" />
              </div>
              <div className="relative w-[42px] h-[15px] mr-[-2.00px]">
                <div className="relative w-10 h-[15px] bg-[#d9d9d9] rounded-[5px]">
                  <div className="absolute w-7 top-[3px] left-[9px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-black text-[6px] tracking-[0] leading-[normal]">
                    DevOps
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[140px] h-[73px] items-center justify-center gap-2.5 relative">
              <img
                className="relative self-stretch w-full h-[76.71px] mt-[-1.85px] mb-[-1.85px]"
                alt="Rectangle"
                src="rectangle-77-4.svg"
              />
            </div>
            <div className="inline-flex items-center justify-center gap-[5px] pt-1 pb-0 px-0 relative flex-[0_0_auto] mb-[-6.50px] border-b-[0.5px] [border-bottom-style:solid] border-[#eaeaea]">
              <div className="relative w-[104px] h-[17px] mt-[-0.50px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Cloud Platforms
              </div>
              <div className="inline-flex items-end relative flex-[0_0_auto]">
                <div className="inline-flex justify-center gap-px flex-[0_0_auto] items-center relative">
                  <div className="relative w-[6.41px] h-[8.95px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                  <div className="w-[7.69px] h-[5.97px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                    23%
                  </div>
                </div>
                <div className="inline-flex justify-center gap-px flex-[0_0_auto] items-center relative">
                  <div className="relative w-[6.41px] h-[8.95px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                  <div className="w-[7.69px] h-[5.97px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                    23%
                  </div>
                </div>
              </div>
              <div className="gap-0.5 inline-flex items-center relative flex-[0_0_auto]">
                <div className="w-[12.33px] h-[9.46px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                  78%
                </div>
                <div className="relative w-[57.55px] h-[5.91px] bg-[#e8ece8] rounded-[5px]">
                  <div className="w-[41px] rounded-[5px] h-1.5 bg-[#09760773]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[233.35px] h-[321.26px] bg-white rounded-[5px] border-[0.5px] border-solid border-[#d1d1d1]">
          <div className="inline-flex flex-col h-[187px] items-start absolute top-[116px] left-1.5">
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
              <div className="flex w-56 h-[15px] items-center gap-[5px] relative">
                <ArrowDropDown
                  className="!w-3.5 !relative !h-[15px]"
                  color="#B2B2B2"
                />
                <div className="relative w-[13.73px] h-[7.81px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#d9d9d9] text-[6px] tracking-[0] leading-[normal]">
                  AWS
                </div>
                <div className="flex w-[184px] items-center gap-[3px] relative">
                  <div className="w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#777777] text-[4px] relative tracking-[0] leading-[normal]">
                    55%
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <img
                      className="self-stretch w-full relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-72-10.svg"
                    />
                    <img
                      className="relative w-[87.19px] h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-80-11.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[3px] px-[3px] py-0 relative flex-[0_0_auto] border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="w-[216px] justify-between flex-[0_0_auto] flex items-center relative">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                      AWS SkillBuilder
                    </div>
                  </div>
                  <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Course
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Practise
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto] mb-[-10.00px]">
              <div className="flex w-56 h-[15px] items-center gap-[5px] relative">
                <ArrowDropDown
                  className="!w-3.5 !relative !h-[15px]"
                  color="#B2B2B2"
                />
                <div className="relative w-[13.73px] h-[7.81px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#d9d9d9] text-[6px] tracking-[0] leading-[normal]">
                  AWS
                </div>
                <div className="flex w-[184px] items-center gap-[3px] relative">
                  <div className="w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#777777] text-[4px] relative tracking-[0] leading-[normal]">
                    55%
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <img
                      className="self-stretch w-full relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-72-11.svg"
                    />
                    <img
                      className="relative w-[87.19px] h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-80-12.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[3px] px-[3px] py-0 relative flex-[0_0_auto] border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="w-[216px] justify-between flex-[0_0_auto] flex items-center relative">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                      AWS SkillBuilder
                    </div>
                  </div>
                  <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Course
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Practise
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-[226px] h-24 items-center justify-center gap-[0px_0px] absolute top-2 left-0.5">
            <div className="flex w-[226px] justify-between mt-[-6.50px] items-center relative">
              <div className="relative w-[38.76px] h-[7.17px]">
                <div className="absolute w-[30px] top-0 left-1.5 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#59a18c] text-[5px] tracking-[0] leading-[normal]">
                  Active
                </div>
                <div className="absolute w-[5px] h-1.5 top-px left-0 bg-white rounded-[2.56px/2.98px] border border-solid border-[#55cc6f] shadow-[0px_0px_3px_#20450f40]" />
              </div>
              <div className="relative w-[42px] h-[15px] mr-[-2.00px]">
                <div className="relative w-10 h-[15px] bg-[#d9d9d9] rounded-[5px]">
                  <div className="absolute w-7 top-[3px] left-[9px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-black text-[6px] tracking-[0] leading-[normal]">
                    DevOps
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[140px] h-[73px] items-center justify-center gap-2.5 relative">
              <img
                className="relative self-stretch w-full h-[76.71px] mt-[-1.85px] mb-[-1.85px]"
                alt="Rectangle"
                src="rectangle-77-5.svg"
              />
            </div>
            <div className="inline-flex items-center justify-center gap-[5px] pt-1 pb-0 px-0 relative flex-[0_0_auto] mb-[-6.50px] border-b-[0.5px] [border-bottom-style:solid] border-[#eaeaea]">
              <div className="relative w-[104px] h-[17px] mt-[-0.50px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Cloud Platforms
              </div>
              <div className="inline-flex items-end relative flex-[0_0_auto]">
                <div className="inline-flex justify-center gap-px flex-[0_0_auto] items-center relative">
                  <div className="relative w-[6.41px] h-[8.95px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                  <div className="w-[7.69px] h-[5.97px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                    23%
                  </div>
                </div>
                <div className="inline-flex justify-center gap-px flex-[0_0_auto] items-center relative">
                  <div className="relative w-[6.41px] h-[8.95px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                  <div className="w-[7.69px] h-[5.97px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                    23%
                  </div>
                </div>
              </div>
              <div className="gap-0.5 inline-flex items-center relative flex-[0_0_auto]">
                <div className="w-[12.33px] h-[9.46px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                  78%
                </div>
                <div className="relative w-[57.55px] h-[5.91px] bg-[#e8ece8] rounded-[5px]">
                  <div className="w-[41px] rounded-[5px] h-1.5 bg-[#09760773]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[233.35px] h-[321.26px] bg-white rounded-[5px] border-[0.5px] border-solid border-[#d1d1d1]">
          <div className="inline-flex flex-col h-[187px] items-start absolute top-[116px] left-1.5">
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
              <div className="flex w-56 h-[15px] items-center gap-[5px] relative">
                <ArrowDropDown
                  className="!w-3.5 !relative !h-[15px]"
                  color="#B2B2B2"
                />
                <div className="relative w-[13.73px] h-[7.81px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#d9d9d9] text-[6px] tracking-[0] leading-[normal]">
                  AWS
                </div>
                <div className="flex w-[184px] items-center gap-[3px] relative">
                  <div className="w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#777777] text-[4px] relative tracking-[0] leading-[normal]">
                    55%
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <img
                      className="self-stretch w-full relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-72.svg"
                    />
                    <img
                      className="relative w-[87.19px] h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-80.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[3px] px-[3px] py-0 relative flex-[0_0_auto] border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="w-[216px] justify-between flex-[0_0_auto] flex items-center relative">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                      AWS SkillBuilder
                    </div>
                  </div>
                  <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Course
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Practise
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto] mb-[-10.00px]">
              <div className="flex w-56 h-[15px] items-center gap-[5px] relative">
                <ArrowDropDown
                  className="!w-3.5 !relative !h-[15px]"
                  color="#B2B2B2"
                />
                <div className="relative w-[13.73px] h-[7.81px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#d9d9d9] text-[6px] tracking-[0] leading-[normal]">
                  AWS
                </div>
                <div className="flex w-[184px] items-center gap-[3px] relative">
                  <div className="w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#777777] text-[4px] relative tracking-[0] leading-[normal]">
                    55%
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <img
                      className="self-stretch w-full relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="image.svg"
                    />
                    <img
                      className="relative w-[87.19px] h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-80-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[3px] px-[3px] py-0 relative flex-[0_0_auto] border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="w-[216px] justify-between flex-[0_0_auto] flex items-center relative">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                      AWS SkillBuilder
                    </div>
                  </div>
                  <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Course
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Practise
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-[226px] h-24 items-center justify-center gap-[0px_0px] absolute top-2 left-0.5">
            <div className="flex w-[226px] justify-between mt-[-6.50px] items-center relative">
              <div className="relative w-[38.76px] h-[7.17px]">
                <div className="absolute w-[30px] top-0 left-1.5 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#59a18c] text-[5px] tracking-[0] leading-[normal]">
                  Active
                </div>
                <div className="absolute w-[5px] h-1.5 top-px left-0 bg-white rounded-[2.56px/2.98px] border border-solid border-[#55cc6f] shadow-[0px_0px_3px_#20450f40]" />
              </div>
              <div className="relative w-[42px] h-[15px] mr-[-2.00px]">
                <div className="relative w-10 h-[15px] bg-[#d9d9d9] rounded-[5px]">
                  <div className="absolute w-7 top-[3px] left-[9px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-black text-[6px] tracking-[0] leading-[normal]">
                    DevOps
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[140px] h-[73px] items-center justify-center gap-2.5 relative">
              <img
                className="relative self-stretch w-full h-[76.71px] mt-[-1.85px] mb-[-1.85px]"
                alt="Rectangle"
                src="rectangle-77.svg"
              />
            </div>
            <div className="inline-flex items-center justify-center gap-[5px] pt-1 pb-0 px-0 relative flex-[0_0_auto] mb-[-6.50px] border-b-[0.5px] [border-bottom-style:solid] border-[#eaeaea]">
              <div className="relative w-[104px] h-[17px] mt-[-0.50px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Cloud Platforms
              </div>
              <div className="inline-flex items-end relative flex-[0_0_auto]">
                <div className="inline-flex justify-center gap-px flex-[0_0_auto] items-center relative">
                  <div className="relative w-[6.41px] h-[8.95px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                  <div className="w-[7.69px] h-[5.97px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                    23%
                  </div>
                </div>
                <div className="inline-flex justify-center gap-px flex-[0_0_auto] items-center relative">
                  <div className="relative w-[6.41px] h-[8.95px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                  <div className="w-[7.69px] h-[5.97px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                    23%
                  </div>
                </div>
              </div>
              <div className="gap-0.5 inline-flex items-center relative flex-[0_0_auto]">
                <div className="w-[12.33px] h-[9.46px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                  78%
                </div>
                <div className="relative w-[57.55px] h-[5.91px] bg-[#e8ece8] rounded-[5px]">
                  <div className="w-[41px] rounded-[5px] h-1.5 bg-[#09760773]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[233.35px] h-[321.26px] bg-white rounded-[5px] border-[0.5px] border-solid border-[#d1d1d1]">
          <div className="inline-flex flex-col h-[187px] items-start absolute top-[116px] left-1.5">
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
              <div className="flex w-56 h-[15px] items-center gap-[5px] relative">
                <ArrowDropDown
                  className="!w-3.5 !relative !h-[15px]"
                  color="#B2B2B2"
                />
                <div className="relative w-[13.73px] h-[7.81px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#d9d9d9] text-[6px] tracking-[0] leading-[normal]">
                  AWS
                </div>
                <div className="flex w-[184px] items-center gap-[3px] relative">
                  <div className="w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#777777] text-[4px] relative tracking-[0] leading-[normal]">
                    55%
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <img
                      className="self-stretch w-full relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-72-2.svg"
                    />
                    <img
                      className="relative w-[87.19px] h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-80-3.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[3px] px-[3px] py-0 relative flex-[0_0_auto] border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="w-[216px] justify-between flex-[0_0_auto] flex items-center relative">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                      AWS SkillBuilder
                    </div>
                  </div>
                  <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Course
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Practise
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto] mb-[-10.00px]">
              <div className="flex w-56 h-[15px] items-center gap-[5px] relative">
                <ArrowDropDown
                  className="!w-3.5 !relative !h-[15px]"
                  color="#B2B2B2"
                />
                <div className="relative w-[13.73px] h-[7.81px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#d9d9d9] text-[6px] tracking-[0] leading-[normal]">
                  AWS
                </div>
                <div className="flex w-[184px] items-center gap-[3px] relative">
                  <div className="w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#777777] text-[4px] relative tracking-[0] leading-[normal]">
                    55%
                  </div>
                  <div className="flex flex-col items-start relative flex-1 grow">
                    <img
                      className="self-stretch w-full relative h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-72-3.svg"
                    />
                    <img
                      className="relative w-[87.19px] h-px mt-[-1.00px] object-cover"
                      alt="Line"
                      src="line-80-4.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-56 h-[15px] items-center justify-center gap-[0px_0px] relative border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                  <ArrowDropDown
                    className="!w-[13.29px] !relative !h-[15px]"
                    color="#5A5A5A"
                  />
                  <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                    AWS SkillBuilder
                  </div>
                </div>
                <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                  <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      23%
                    </div>
                    <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                    <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                      55%
                    </div>
                  </div>
                  <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                    <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                      78%
                    </div>
                    <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                    <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-[3px] px-[3px] py-0 relative flex-[0_0_auto] border-b-[0.5px] [border-bottom-style:solid] border-[#e9e9e9]">
                <div className="w-[216px] justify-between flex-[0_0_auto] flex items-center relative">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[8px] tracking-[0] leading-[normal]">
                      AWS SkillBuilder
                    </div>
                  </div>
                  <div className="flex w-[129px] items-center justify-end gap-[13px] relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Course
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-[218px] items-center px-2.5 py-0 relative flex-[0_0_auto]">
                  <div className="flex w-[87px] h-[15px] gap-1 items-center relative">
                    <ArrowDropDown
                      className="!w-[13.29px] !relative !h-[15px]"
                      color="#5A5A5A"
                    />
                    <div className="relative w-[134.12px] h-[14.45px] mt-[-0.73px] mr-[-64.41px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[7px] tracking-[0] leading-[normal]">
                      Practise
                    </div>
                  </div>
                  <div className="w-[129px] justify-end gap-[13px] px-2.5 py-0 mr-[-18.00px] flex items-center relative">
                    <div className="inline-flex items-center gap-[3px] relative flex-[0_0_auto] ml-[-15.90px]">
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        23%
                      </div>
                      <div className="relative w-[6.41px] h-[8.68px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                      <div className="w-[7.69px] h-[5.79px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                        55%
                      </div>
                    </div>
                    <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                      <div className="w-3 h-[9px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                        78%
                      </div>
                      <div className="relative w-[57.7px] h-[5.79px] bg-[#e8ece8] rounded-[10px]" />
                      <div className="absolute w-[45px] top-px left-[17px] rounded-[10px] h-1.5 bg-[#09760773]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-[226px] h-24 items-center justify-center gap-[0px_0px] absolute top-2 left-0.5">
            <div className="flex w-[226px] justify-between mt-[-6.50px] items-center relative">
              <div className="relative w-[38.76px] h-[7.17px]">
                <div className="absolute w-[30px] top-0 left-1.5 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#59a18c] text-[5px] tracking-[0] leading-[normal]">
                  Active
                </div>
                <div className="absolute w-[5px] h-1.5 top-px left-0 bg-white rounded-[2.56px/2.98px] border border-solid border-[#55cc6f] shadow-[0px_0px_3px_#20450f40]" />
              </div>
              <div className="relative w-[42px] h-[15px] mr-[-2.00px]">
                <div className="relative w-10 h-[15px] bg-[#d9d9d9] rounded-[5px]">
                  <div className="absolute w-7 top-[3px] left-[9px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-black text-[6px] tracking-[0] leading-[normal]">
                    DevOps
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[140px] h-[73px] items-center justify-center gap-2.5 relative">
              <img
                className="relative self-stretch w-full h-[76.71px] mt-[-1.85px] mb-[-1.85px]"
                alt="Rectangle"
                src="rectangle-77-2.svg"
              />
            </div>
            <div className="inline-flex items-center justify-center gap-[5px] pt-1 pb-0 px-0 relative flex-[0_0_auto] mb-[-6.50px] border-b-[0.5px] [border-bottom-style:solid] border-[#eaeaea]">
              <div className="relative w-[104px] h-[17px] mt-[-0.50px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                Cloud Platforms
              </div>
              <div className="inline-flex items-end relative flex-[0_0_auto]">
                <div className="inline-flex justify-center gap-px flex-[0_0_auto] items-center relative">
                  <div className="relative w-[6.41px] h-[8.95px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                  <div className="w-[7.69px] h-[5.97px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                    23%
                  </div>
                </div>
                <div className="inline-flex justify-center gap-px flex-[0_0_auto] items-center relative">
                  <div className="relative w-[6.41px] h-[8.95px] bg-white rounded-[1px_0px_0px_1px] border-[0.5px] border-solid border-[#c2c2c2]" />
                  <div className="w-[7.69px] h-[5.97px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#8d8d8d] text-[3px] relative tracking-[0] leading-[normal]">
                    23%
                  </div>
                </div>
              </div>
              <div className="gap-0.5 inline-flex items-center relative flex-[0_0_auto]">
                <div className="w-[12.33px] h-[9.46px] mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#272727] text-[6px] relative tracking-[0] leading-[normal]">
                  78%
                </div>
                <div className="relative w-[57.55px] h-[5.91px] bg-[#e8ece8] rounded-[5px]">
                  <div className="w-[41px] rounded-[5px] h-1.5 bg-[#09760773]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListView;
