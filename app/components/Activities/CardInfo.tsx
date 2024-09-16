export default function CardInfo() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="flex w-full justify-between mt-[-6.50px] ml-1 mr-1 items-center relative">
        <div className="relative w-[38.76px] h-[7.17px]">
          <div className="absolute w-fit top-0 left-1.5 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#59a18c] text-[10px] tracking-[0] leading-[normal]">
            Active
          </div>
          <div className="absolute w-[5px] h-1.5 top-px left-0 bg-white rounded-[2.56px/2.98px] border border-solid border-[#55cc6f] shadow-[0px_0px_3px_#20450f40]" />
        </div>
        <div className="relative w-[42px] h-[15px] mr-[-2.00px]">
          <div className="relative w-10 h-[15px] bg-[#d9d9d9] rounded-[5px]">
            <div className="absolute w-7 top-[3px] left-[9px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-black text-[10px] tracking-[0] leading-[normal]">
              DevOps
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[140px] h-[73px] items-center justify-center gap-2.5 relative">
        <img
          className="relative self-stretch w-full h-[76.71px] mt-[-1.85px] mb-[-1.85px]"
          alt="Rectangle"
          src="aws.png"
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
  );
}
