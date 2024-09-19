import { FunctionComponent } from "react";

const CardDetails: FunctionComponent = () => {
  return (
    <div className="h-full flex-1 w-full relative rounded-tl-8xs rounded-tr-none rounded-b-none border-gainsboro-200 border-[0.8px] border-solid box-border flex flex-col items-start justify-start py-[0.625rem] px-[1.25rem] gap-[1rem] text-left text-[0.813rem] text-miscellaneous-floating-tab-text-unselected font-roboto">
      <div className="flex flex-col items-start justify-start gap-[1.25rem] text-[1.875rem] text-darkslategray">
        <div className="w-[22.188rem] h-[4.625rem] flex flex-row items-center justify-start py-[0.375rem] px-[0rem] box-border gap-[1.25rem]">
          <div className="w-[9rem] rounded-8xs bg-gainsboro-100 h-[4.25rem] flex flex-row items-center justify-center">
            <img
              className="w-[2.125rem] relative h-[2.125rem]"
              alt=""
              src="add.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-[0.312rem]">
            <div className="relative">
              <span className="font-light">|</span>
              <span className="text-[1.75rem] font-semibold text-gainsboro-300">
                Untitled
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-[0.312rem] text-[0.75rem] text-text-brand-on-brand">
              <img
                className="w-[1.825rem] relative h-[1.75rem] object-cover"
                alt=""
                src="Add Icon.png"
              />
              <div className="w-[1.813rem] rounded-8xs bg-gainsboro-100 h-[1.75rem] flex flex-row items-center justify-center">
                <img
                  className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                  alt=""
                  src="Tag.svg"
                />
              </div>
              <div className="rounded-radius-200 bg-text-brand-default h-[1.563rem] flex flex-row items-center justify-center py-[0.312rem] px-[0.375rem] box-border gap-[0.25rem]">
                <div className="relative leading-[100%]">DevOps</div>
                <img
                  className="w-[0.75rem] relative h-[0.75rem] overflow-hidden shrink-0"
                  alt=""
                  src="X/16.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[12.688rem] relative h-[1.188rem] text-[1rem] text-darkgray-100">
          <div className="absolute top-[0rem] left-[0rem]">
            Click here to add description
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-mini bg-text-brand-on-brand flex flex-col items-start justify-start py-[0.187rem] px-[0.312rem] text-center text-[0.75rem] font-sf-pro">
        <div className="w-[21.188rem] rounded-mini h-[1.938rem] overflow-hidden shrink-0 flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <div className="w-[4.813rem] relative h-[2.031rem]">
              <div className="absolute top-[0%] left-[18.18%] tracking-[-0.23px] leading-[1.25rem] font-medium flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[3rem] h-[2.031rem]">
                All
              </div>
            </div>
            <div className="w-[4.813rem] relative shadow-[0px_2px_16px_rgba(0,_0,_0,_0.08)] rounded-[100px] bg-miscellaneous-floating-tab-pill-fill h-[2.031rem] text-text-brand-default">
              <b className="absolute top-[0%] left-[18.18%] tracking-[-0.23px] leading-[1.25rem] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[3rem] h-[2.031rem]">
                Course
              </b>
            </div>
            <div className="w-[4.813rem] relative h-[2.031rem]">
              <div className="absolute top-[0%] left-[18.18%] tracking-[-0.23px] leading-[1.25rem] font-medium flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[3rem] h-[2.031rem]">
                Practice
              </div>
            </div>
            <div className="w-[4.813rem] relative h-[2.031rem]">
              <div className="absolute top-[0%] left-[18.18%] tracking-[-0.23px] leading-[1.25rem] font-medium flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[3rem] h-[2.031rem]">
                Books
              </div>
            </div>
            <div className="w-[4.813rem] relative h-[2.031rem]">
              <div className="absolute top-[0%] left-[18.18%] tracking-[-0.23px] leading-[1.25rem] font-medium flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap w-[3rem] h-[2.031rem]">
                Projects
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div className="w-[22.188rem] flex flex-col items-start justify-start gap-[0.937rem]">
          <div className="w-[22.188rem] h-[0.938rem] flex flex-row items-center justify-between text-darkgray-200">
            <div className="w-[5.625rem] relative h-[0.969rem]">
              <img
                className="absolute top-[0rem] left-[0rem] w-[0.875rem] h-[0.938rem]"
                alt=""
                src="arrow_drop_down.svg"
              />
              <div className="absolute top-[0.031rem] left-[1.25rem] font-semibold whitespace-pre-wrap">
                Untitled list
              </div>
            </div>
            <div className="w-[16.25rem] flex flex-row items-center justify-start gap-[0.312rem] text-[0.625rem] text-gray-100">
              <div className="flex-1 flex flex-row items-center justify-center gap-[0.187rem]">
                <div className="relative font-semibold">55%</div>
                <div className="w-[12.313rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
                  <div className="self-stretch relative border-whitesmoke-200 border-t-[2px] border-solid box-border h-[0.125rem]" />
                  <div className="w-[5.575rem] relative border-darkseagreen border-t-[2px] border-solid box-border h-[0.125rem]" />
                </div>
              </div>
              <img
                className="w-[0.938rem] relative h-[0.938rem]"
                alt=""
                src="CardSubItemAddGroup.svg"
              />
              <img
                className="w-[1rem] relative h-[1rem]"
                alt=""
                src="more_horiz.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem] text-[0.75rem]">
            <div className="w-[22.188rem] h-[1.063rem] flex flex-row items-center justify-between py-[0rem] pl-[1.25rem] pr-[0rem] box-border text-[0.875rem]">
              <div className="w-[9.125rem] h-[0.938rem] flex flex-row items-center justify-start gap-[0.25rem]">
                <div className="w-[1.125rem] relative h-[1.269rem]">
                  <img
                    className="absolute h-[20.69%] w-[41.67%] top-[41.69%] right-[29.17%] bottom-[37.62%] left-[29.17%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="icon.svg"
                  />
                </div>
                <div className="w-[8.381rem] relative font-medium flex items-center h-[0.906rem] shrink-0">
                  AWS SkillBuilder
                </div>
              </div>
              <div className="w-[11.819rem] flex flex-row items-start justify-end gap-[0.312rem] text-[0.625rem] text-text-brand-default">
                <div className="flex flex-row items-center justify-start gap-[0.312rem]">
                  <img
                    className="w-[1.044rem] relative h-[1rem] object-cover"
                    alt=""
                    src="Add Icon.png"
                  />
                  <div className="rounded-sm bg-gainsboro-100 flex flex-row items-center justify-start p-[0.187rem]">
                    <img
                      className="w-[0.688rem] relative h-[0.625rem] overflow-hidden shrink-0"
                      alt=""
                      src="Link.svg"
                    />
                  </div>
                  <div className="rounded-md bg-gray-300 border-darkslategray border-[1px] border-solid box-border h-[1.063rem] flex flex-row items-center justify-center py-[0.125rem] px-[0.375rem]">
                    <div className="relative leading-[100%] font-medium">
                      Course
                    </div>
                  </div>
                  <div className="w-[4.688rem] flex flex-row items-center justify-end text-right text-[0.5rem] text-gray-200">
                    <div className="flex flex-row items-center justify-start relative gap-[0.25rem]">
                      <div className="w-[1.063rem] relative font-semibold flex items-center h-[0.563rem] shrink-0 z-[0]">
                        46%
                      </div>
                      <div className="w-[3.125rem] relative rounded-3xs bg-whitesmoke-100 h-[0.313rem] z-[1]" />
                      <div className="w-[1.563rem] absolute !m-[0] top-[0.125rem] left-[1.313rem] rounded-3xs bg-green h-[0.313rem] z-[2]" />
                    </div>
                  </div>
                </div>
                <img
                  className="w-[0.938rem] relative h-[0.938rem]"
                  alt=""
                  src="CardSubItemAddGroup.svg"
                />
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="more_horiz.svg"
                />
              </div>
            </div>
            <div className="w-[22.188rem] h-[0.938rem] flex flex-row items-center justify-between py-[0rem] pl-[2.5rem] pr-[0rem] box-border">
              <div className="w-[9.125rem] h-[0.938rem] flex flex-row items-center justify-start gap-[0.25rem]">
                <div className="w-[1.125rem] relative h-[1.269rem]">
                  <img
                    className="absolute h-[20.69%] w-[41.67%] top-[41.69%] right-[29.17%] bottom-[37.62%] left-[29.17%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="icon.svg"
                  />
                </div>
                <div className="w-[8.381rem] relative font-medium flex items-center h-[0.906rem] shrink-0">
                  Unit 1
                </div>
              </div>
              <div className="w-[11.819rem] flex flex-row items-center justify-end gap-[0.312rem] text-center text-[0.563rem] text-darkgray-200">
                <div className="rounded-md bg-gray-300 border-darkgray-200 border-[1px] border-solid box-border h-[0.875rem] flex flex-row items-center justify-center py-[0.125rem] px-[0.375rem]">
                  <div className="relative leading-[100%] font-medium">
                    Course
                  </div>
                </div>
                <div className="w-[4.688rem] flex flex-row items-center justify-start text-right text-[0.5rem] text-gray-200">
                  <div className="flex flex-row items-center justify-end">
                    <div className="flex flex-row items-center justify-start relative gap-[0.25rem]">
                      <div className="w-[1.375rem] relative font-semibold flex items-center h-[0.563rem] shrink-0 z-[0]">
                        100%
                      </div>
                      <div className="w-[3.125rem] relative rounded-3xs bg-whitesmoke-100 h-[0.313rem] z-[1]" />
                      <div className="w-[3.125rem] absolute !m-[0] top-[0.125rem] left-[1.625rem] rounded-3xs bg-green h-[0.313rem] z-[2]" />
                    </div>
                  </div>
                </div>
                <img
                  className="w-[0.938rem] relative h-[0.938rem]"
                  alt=""
                  src="CardSubItemAddGroup.svg"
                />
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="more_horiz.svg"
                />
              </div>
            </div>
            <div className="w-[22.188rem] h-[0.938rem] flex flex-row items-center justify-between py-[0rem] pl-[2.5rem] pr-[0rem] box-border">
              <div className="w-[9.125rem] h-[0.938rem] flex flex-row items-center justify-start gap-[0.25rem]">
                <div className="w-[1.125rem] relative h-[1.269rem]">
                  <img
                    className="absolute h-[20.69%] w-[41.67%] top-[41.69%] right-[29.17%] bottom-[37.62%] left-[29.17%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="icon.svg"
                  />
                </div>
                <div className="w-[8.381rem] relative font-medium flex items-center h-[0.906rem] shrink-0">
                  Unit 2
                </div>
              </div>
              <div className="w-[11.819rem] flex flex-row items-center justify-end gap-[0.312rem] text-center text-[0.563rem] text-darkgray-200">
                <div className="rounded-md bg-gray-300 border-darkgray-200 border-[1px] border-solid box-border h-[0.875rem] flex flex-row items-center justify-center py-[0.125rem] px-[0.375rem]">
                  <div className="relative leading-[100%] font-medium">
                    Course
                  </div>
                </div>
                <div className="w-[4.688rem] flex flex-row items-center justify-start text-right text-[0.5rem] text-gray-200">
                  <div className="flex flex-row items-center justify-end">
                    <div className="flex flex-row items-center justify-start relative gap-[0.25rem]">
                      <div className="w-[1.375rem] relative font-semibold flex items-center h-[0.563rem] shrink-0 z-[0]">
                        73%
                      </div>
                      <div className="w-[3.125rem] relative rounded-3xs bg-whitesmoke-100 h-[0.313rem] z-[1]" />
                      <div className="w-[2.313rem] absolute !m-[0] top-[0.125rem] left-[1.625rem] rounded-3xs bg-green h-[0.313rem] z-[2]" />
                    </div>
                  </div>
                </div>
                <img
                  className="w-[0.938rem] relative h-[0.938rem]"
                  alt=""
                  src="CardSubItemAddGroup.svg"
                />
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="more_horiz.svg"
                />
              </div>
            </div>
            <div className="w-[22.188rem] h-[0.938rem] flex flex-row items-center justify-between py-[0rem] pl-[2.5rem] pr-[0rem] box-border">
              <div className="w-[9.125rem] h-[0.938rem] flex flex-row items-center justify-start gap-[0.25rem]">
                <div className="w-[1.125rem] relative h-[1.269rem]">
                  <img
                    className="absolute h-[20.69%] w-[41.67%] top-[41.69%] right-[29.17%] bottom-[37.62%] left-[29.17%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="icon.svg"
                  />
                </div>
                <div className="w-[8.381rem] relative font-medium flex items-center h-[0.906rem] shrink-0">
                  Unit 3
                </div>
              </div>
              <div className="w-[11.819rem] flex flex-row items-center justify-end gap-[0.312rem] text-center text-[0.563rem] text-darkgray-200">
                <div className="rounded-md bg-gray-300 border-darkgray-200 border-[1px] border-solid box-border h-[0.875rem] flex flex-row items-center justify-center py-[0.125rem] px-[0.375rem]">
                  <div className="relative leading-[100%] font-medium">
                    Course
                  </div>
                </div>
                <div className="w-[4.688rem] flex flex-row items-center justify-start text-right text-[0.5rem] text-gray-200">
                  <div className="flex flex-row items-center justify-end">
                    <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                      <div className="w-[1.375rem] relative font-semibold flex items-center h-[0.563rem] shrink-0">
                        0%
                      </div>
                      <div className="w-[3.125rem] relative rounded-3xs bg-whitesmoke-100 h-[0.313rem]" />
                    </div>
                  </div>
                </div>
                <img
                  className="w-[0.938rem] relative h-[0.938rem]"
                  alt=""
                  src="CardSubItemAddGroup.svg"
                />
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="more_horiz.svg"
                />
              </div>
            </div>
            <div className="w-[22.188rem] h-[0.938rem] flex flex-row items-center justify-between py-[0rem] pl-[2.5rem] pr-[0rem] box-border">
              <div className="w-[9.125rem] h-[0.938rem] flex flex-row items-center justify-start gap-[0.25rem]">
                <div className="w-[1.125rem] relative h-[1.269rem]">
                  <img
                    className="absolute h-[20.69%] w-[41.67%] top-[41.69%] right-[29.17%] bottom-[37.62%] left-[29.17%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="icon.svg"
                  />
                </div>
                <div className="w-[8.381rem] relative font-medium flex items-center h-[0.906rem] shrink-0">
                  Practice
                </div>
              </div>
              <div className="w-[11.819rem] flex flex-row items-center justify-end gap-[0.312rem] text-center text-[0.563rem] text-darkgray-200">
                <div className="rounded-md bg-gray-300 border-darkgray-200 border-[1px] border-solid box-border h-[0.875rem] flex flex-row items-center justify-center py-[0.125rem] px-[0.375rem]">
                  <div className="relative leading-[100%] font-medium">
                    Practice
                  </div>
                </div>
                <div className="w-[4.688rem] flex flex-row items-center justify-start text-right text-[0.5rem] text-gray-200">
                  <div className="flex flex-row items-center justify-end">
                    <div className="flex flex-row items-center justify-start relative gap-[0.25rem]">
                      <div className="w-[1.375rem] relative font-semibold flex items-center h-[0.563rem] shrink-0 z-[0]">
                        12%
                      </div>
                      <div className="w-[3.125rem] relative rounded-3xs bg-whitesmoke-100 h-[0.313rem] z-[1]" />
                      <div className="w-[0.75rem] absolute !m-[0] top-[0.125rem] left-[1.625rem] rounded-3xs bg-green h-[0.313rem] z-[2]" />
                    </div>
                  </div>
                </div>
                <img
                  className="w-[0.938rem] relative h-[0.938rem]"
                  alt=""
                  src="CardSubItemAddGroup.svg"
                />
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="more_horiz.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem]">
            <div className="w-[22.188rem] h-[1.063rem] flex flex-row items-center justify-between py-[0rem] pl-[1.25rem] pr-[0rem] box-border">
              <div className="w-[9.125rem] h-[0.938rem] flex flex-row items-center justify-start gap-[0.25rem]">
                <div className="w-[1.125rem] relative h-[1.269rem]">
                  <img
                    className="absolute h-[20.69%] w-[41.67%] top-[41.69%] right-[29.17%] bottom-[37.62%] left-[29.17%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="icon.svg"
                  />
                </div>
                <div className="w-[8.381rem] relative font-medium flex items-center h-[0.906rem] shrink-0">
                  AWS SkillBuilder
                </div>
              </div>
              <div className="w-[11.819rem] flex flex-row items-start justify-end gap-[0.312rem] text-[0.625rem] text-text-brand-default">
                <div className="flex flex-row items-center justify-start gap-[0.312rem]">
                  <img
                    className="w-[1.044rem] relative h-[1rem] object-cover"
                    alt=""
                    src="Add Icon.png"
                  />
                  <div className="rounded-sm bg-gainsboro-100 flex flex-row items-center justify-start p-[0.187rem]">
                    <img
                      className="w-[0.688rem] relative h-[0.625rem] overflow-hidden shrink-0"
                      alt=""
                      src="Link.svg"
                    />
                  </div>
                  <div className="rounded-md bg-gray-300 border-darkslategray border-[1px] border-solid box-border h-[1.063rem] flex flex-row items-center justify-center py-[0.125rem] px-[0.375rem]">
                    <div className="relative leading-[100%] font-medium">
                      Course
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-end text-[0.5rem] text-gray-200">
                    <div className="flex flex-row items-center justify-start relative gap-[0.25rem]">
                      <div className="w-[1.063rem] relative font-semibold flex items-center h-[0.563rem] shrink-0 z-[0]">
                        78%
                      </div>
                      <div className="w-[3.125rem] relative rounded-3xs bg-whitesmoke-100 h-[0.313rem] z-[1]" />
                      <div className="w-[2.5rem] absolute !m-[0] top-[0.125rem] left-[1.318rem] rounded-3xs bg-green h-[0.313rem] z-[2]" />
                    </div>
                  </div>
                </div>
                <img
                  className="w-[0.938rem] relative h-[0.938rem]"
                  alt=""
                  src="CardSubItemAddGroup.svg"
                />
                <img
                  className="w-[1rem] relative h-[1rem]"
                  alt=""
                  src="more_horiz.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[22.188rem] flex flex-col items-start justify-start gap-[0.937rem] text-[0.875rem]">
        <div className="w-[22.188rem] h-[0.938rem] flex flex-row items-center justify-between text-[0.813rem] text-darkgray-200">
          <div className="w-[5.375rem] relative h-[0.969rem]">
            <img
              className="absolute top-[0rem] left-[0rem] w-[0.875rem] h-[0.938rem]"
              alt=""
              src="arrow_drop_down.svg"
            />
            <div className="absolute top-[0.031rem] left-[1.188rem] font-semibold">
              Untitled list
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.312rem] text-[0.625rem] text-gray-100">
            <div className="w-[13.688rem] flex flex-row items-center justify-center gap-[0.187rem]">
              <div className="relative font-semibold">55%</div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <div className="self-stretch relative border-whitesmoke-200 border-t-[2px] border-solid box-border h-[0.125rem]" />
                <div className="w-[5.575rem] relative border-darkseagreen border-t-[2px] border-solid box-border h-[0.125rem]" />
              </div>
            </div>
            <img
              className="w-[0.938rem] relative h-[0.938rem]"
              alt=""
              src="CardSubItemAddGroup.svg"
            />
            <img
              className="w-[1rem] relative h-[1rem]"
              alt=""
              src="more_horiz.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="w-[22.188rem] h-[1.063rem] flex flex-row items-center justify-between py-[0rem] pl-[1.25rem] pr-[0rem] box-border">
            <div className="w-[9.125rem] h-[0.938rem] flex flex-row items-center justify-start gap-[0.25rem]">
              <div className="w-[1.125rem] relative h-[1.269rem]">
                <img
                  className="absolute h-[20.69%] w-[41.67%] top-[41.69%] right-[29.17%] bottom-[37.62%] left-[29.17%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="icon.svg"
                />
              </div>
              <div className="w-[8.381rem] relative font-medium flex items-center h-[0.906rem] shrink-0">
                AWS SkillBuilder
              </div>
            </div>
            <div className="w-[11.819rem] flex flex-row items-start justify-end gap-[0.312rem] text-[0.625rem] text-text-brand-default">
              <div className="flex flex-row items-center justify-start gap-[0.312rem]">
                <img
                  className="w-[1.044rem] relative h-[1rem] object-cover"
                  alt=""
                  src="Add Icon.png"
                />
                <div className="rounded-sm bg-gainsboro-100 flex flex-row items-center justify-start p-[0.187rem]">
                  <img
                    className="w-[0.688rem] relative h-[0.625rem] overflow-hidden shrink-0"
                    alt=""
                    src="Link.svg"
                  />
                </div>
                <div className="rounded-md bg-gray-300 border-darkslategray border-[1px] border-solid box-border h-[1.063rem] flex flex-row items-center justify-center py-[0.125rem] px-[0.375rem]">
                  <div className="relative leading-[100%] font-medium">
                    Course
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end text-[0.5rem] text-gray-200">
                  <div className="flex flex-row items-center justify-start relative gap-[0.25rem]">
                    <div className="w-[1.063rem] relative font-semibold flex items-center h-[0.563rem] shrink-0 z-[0]">
                      78%
                    </div>
                    <div className="w-[3.125rem] relative rounded-3xs bg-whitesmoke-100 h-[0.313rem] z-[1]" />
                    <div className="w-[2.5rem] absolute !m-[0] top-[0.125rem] left-[1.318rem] rounded-3xs bg-green h-[0.313rem] z-[2]" />
                  </div>
                </div>
              </div>
              <img
                className="w-[0.938rem] relative h-[0.938rem]"
                alt=""
                src="CardSubItemAddGroup.svg"
              />
              <img
                className="w-[1rem] relative h-[1rem]"
                alt=""
                src="more_horiz.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="w-[22.188rem] h-[1.063rem] flex flex-row items-center justify-between py-[0rem] pl-[1.25rem] pr-[0rem] box-border">
            <div className="w-[9.125rem] h-[0.938rem] flex flex-row items-center justify-start gap-[0.25rem]">
              <div className="w-[1.125rem] relative h-[1.269rem]">
                <img
                  className="absolute h-[20.69%] w-[41.67%] top-[41.69%] right-[29.17%] bottom-[37.62%] left-[29.17%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="icon.svg"
                />
              </div>
              <div className="w-[8.381rem] relative font-medium flex items-center h-[0.906rem] shrink-0">
                AWS SkillBuilder
              </div>
            </div>
            <div className="w-[11.819rem] flex flex-row items-start justify-end gap-[0.312rem] text-[0.625rem] text-text-brand-default">
              <div className="flex flex-row items-center justify-start gap-[0.312rem]">
                <img
                  className="w-[1.044rem] relative h-[1rem] object-cover"
                  alt=""
                  src="Add Icon.png"
                />
                <div className="rounded-sm bg-gainsboro-100 flex flex-row items-center justify-start p-[0.187rem]">
                  <img
                    className="w-[0.688rem] relative h-[0.625rem] overflow-hidden shrink-0"
                    alt=""
                    src="Link.svg"
                  />
                </div>
                <div className="rounded-md bg-gray-300 border-darkslategray border-[1px] border-solid box-border h-[1.063rem] flex flex-row items-center justify-center py-[0.125rem] px-[0.375rem]">
                  <div className="relative leading-[100%] font-medium">
                    Course
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end text-[0.5rem] text-gray-200">
                  <div className="flex flex-row items-center justify-start relative gap-[0.25rem]">
                    <div className="w-[1.063rem] relative font-semibold flex items-center h-[0.563rem] shrink-0 z-[0]">
                      78%
                    </div>
                    <div className="w-[3.125rem] relative rounded-3xs bg-whitesmoke-100 h-[0.313rem] z-[1]" />
                    <div className="w-[2.5rem] absolute !m-[0] top-[0.125rem] left-[1.318rem] rounded-3xs bg-green h-[0.313rem] z-[2]" />
                  </div>
                </div>
              </div>
              <img
                className="w-[0.938rem] relative h-[0.938rem]"
                alt=""
                src="CardSubItemAddGroup.svg"
              />
              <img
                className="w-[1rem] relative h-[1rem]"
                alt=""
                src="more_horiz.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="w-[22.188rem] h-[1.063rem] flex flex-row items-center justify-between py-[0rem] pl-[1.25rem] pr-[0rem] box-border">
            <div className="w-[9.125rem] h-[0.938rem] flex flex-row items-center justify-start gap-[0.25rem]">
              <div className="w-[1.125rem] relative h-[1.269rem]">
                <img
                  className="absolute h-[20.69%] w-[41.67%] top-[41.69%] right-[29.17%] bottom-[37.62%] left-[29.17%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="icon.svg"
                />
              </div>
              <div className="w-[8.381rem] relative font-medium flex items-center h-[0.906rem] shrink-0">
                AWS SkillBuilder
              </div>
            </div>
            <div className="w-[11.819rem] flex flex-row items-start justify-end gap-[0.312rem] text-[0.625rem] text-text-brand-default">
              <div className="flex flex-row items-center justify-start gap-[0.312rem]">
                <img
                  className="w-[1.044rem] relative h-[1rem] object-cover"
                  alt=""
                  src="Add Icon.png"
                />
                <div className="rounded-sm bg-gainsboro-100 flex flex-row items-center justify-start p-[0.187rem]">
                  <img
                    className="w-[0.688rem] relative h-[0.625rem] overflow-hidden shrink-0"
                    alt=""
                    src="Link.svg"
                  />
                </div>
                <div className="rounded-md bg-gray-300 border-darkslategray border-[1px] border-solid box-border h-[1.063rem] flex flex-row items-center justify-center py-[0.125rem] px-[0.375rem]">
                  <div className="relative leading-[100%] font-medium">
                    Course
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end text-[0.5rem] text-gray-200">
                  <div className="flex flex-row items-center justify-start relative gap-[0.25rem]">
                    <div className="w-[1.063rem] relative font-semibold flex items-center h-[0.563rem] shrink-0 z-[0]">
                      78%
                    </div>
                    <div className="w-[3.125rem] relative rounded-3xs bg-whitesmoke-100 h-[0.313rem] z-[1]" />
                    <div className="w-[2.5rem] absolute !m-[0] top-[0.125rem] left-[1.318rem] rounded-3xs bg-green h-[0.313rem] z-[2]" />
                  </div>
                </div>
              </div>
              <img
                className="w-[0.938rem] relative h-[0.938rem]"
                alt=""
                src="CardSubItemAddGroup.svg"
              />
              <img
                className="w-[1rem] relative h-[1rem]"
                alt=""
                src="more_horiz.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[22.188rem] flex flex-col items-start justify-start gap-[0.937rem] text-darkgray-200">
        <div className="w-[22.188rem] h-[0.938rem] flex flex-row items-center justify-between">
          <div className="w-[5.375rem] relative h-[0.969rem]">
            <img
              className="absolute top-[0rem] left-[0rem] w-[0.875rem] h-[0.938rem]"
              alt=""
              src="arrow_drop_down.svg"
            />
            <div className="absolute top-[0.031rem] left-[1.188rem] font-semibold">
              Untitles list
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.312rem] text-[0.625rem] text-gray-100">
            <div className="w-[13.688rem] flex flex-row items-center justify-center gap-[0.187rem]">
              <div className="relative font-semibold">55%</div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <div className="self-stretch relative border-whitesmoke-200 border-t-[2px] border-solid box-border h-[0.125rem]" />
                <div className="w-[5.575rem] relative border-darkseagreen border-t-[2px] border-solid box-border h-[0.125rem]" />
              </div>
            </div>
            <img
              className="w-[0.938rem] relative h-[0.938rem]"
              alt=""
              src="CardSubItemAddGroup.svg"
            />
            <img
              className="w-[1rem] relative h-[1rem]"
              alt=""
              src="more_horiz.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-[0.875rem] text-miscellaneous-floating-tab-text-unselected">
          <div className="w-[22.188rem] h-[1.063rem] flex flex-row items-center justify-between py-[0rem] pl-[1.25rem] pr-[0rem] box-border">
            <div className="w-[9.125rem] h-[0.938rem] flex flex-row items-center justify-start gap-[0.25rem]">
              <div className="w-[1.125rem] relative h-[1.269rem]">
                <img
                  className="absolute h-[20.69%] w-[41.67%] top-[41.69%] right-[29.17%] bottom-[37.62%] left-[29.17%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="icon.svg"
                />
              </div>
              <div className="w-[8.381rem] relative font-medium flex items-center h-[0.906rem] shrink-0">
                AWS SkillBuilder
              </div>
            </div>
            <div className="w-[11.819rem] flex flex-row items-start justify-end gap-[0.312rem] text-[0.625rem] text-text-brand-default">
              <div className="flex flex-row items-center justify-start gap-[0.312rem]">
                <img
                  className="w-[1.044rem] relative h-[1rem] object-cover"
                  alt=""
                  src="Add Icon.png"
                />
                <div className="rounded-sm bg-gainsboro-100 flex flex-row items-center justify-start p-[0.187rem]">
                  <img
                    className="w-[0.688rem] relative h-[0.625rem] overflow-hidden shrink-0"
                    alt=""
                    src="Link.svg"
                  />
                </div>
                <div className="rounded-md bg-gray-300 border-darkslategray border-[1px] border-solid box-border h-[1.063rem] flex flex-row items-center justify-center py-[0.125rem] px-[0.375rem]">
                  <div className="relative leading-[100%] font-medium">
                    Course
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end text-[0.5rem] text-gray-200">
                  <div className="flex flex-row items-center justify-start relative gap-[0.25rem]">
                    <div className="w-[1.063rem] relative font-semibold flex items-center h-[0.563rem] shrink-0 z-[0]">
                      78%
                    </div>
                    <div className="w-[3.125rem] relative rounded-3xs bg-whitesmoke-100 h-[0.313rem] z-[1]" />
                    <div className="w-[2.5rem] absolute !m-[0] top-[0.125rem] left-[1.318rem] rounded-3xs bg-green h-[0.313rem] z-[2]" />
                  </div>
                </div>
              </div>
              <img
                className="w-[0.938rem] relative h-[0.938rem]"
                alt=""
                src="CardSubItemAddGroup.svg"
              />
              <img
                className="w-[1rem] relative h-[1rem]"
                alt=""
                src="more_horiz.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
