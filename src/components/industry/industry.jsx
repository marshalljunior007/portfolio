import React from 'react';
import vector1 from './../../images/industry1.png';
import vector2 from './../../images/industry2.png';
import Skills from '../skills/Skills';

const Industry = () => {
  return (
    <div>
      <div className="container md:mx-auto px-4  text-white ">
        <div className="industry-text  text-center">
          <h1 className="text-[24px] capitalize font-bold pb-3">industry</h1>
          <p className="text-[14px] font-normal text-[#C3C2C2]">
            Where I Have Worked In
          </p>
        </div>
        <div className="industry mt-5 ">
          <div className="first mb-3">
            <ul className="flex gap-1 md:gap-4 justify-center">
              <li className="bg-bg2 p-3 rounded-md border-dashed border-2 border-[#959595] font-semibold text-[#959595] text-[16px] ">
                saas
              </li>
              <li className="bg-bg2 p-3 rounded-md border-dashed border-2 border-[#959595] text-[16px]  font-semibold text-[#959595]  ">
                edtech
              </li>
              <li className="bg-bg2 p-3 rounded-md border-dashed border-2 border-[#959595] text-[16px]  font-semibold text-[rgb(149,149,149)] ">
                fintech
              </li>
              <li className="bg-bg2 p-3 rounded-md border-dashed border-2 border-[#959595] text-[16px]  font-semibold text-[#959595]  ">
                productivity
              </li>
            </ul>
          </div>
          <div className="second mb-3 ">
            <ul className="flex gap-1 md:gap-4 justify-center">
              <li className=" bg-bg2 p-3 rounded-md border-dashed border-2 border-[#959595] text-[16px]  font-semibold text-[#959595]  ">
                vod
              </li>
              <li className=" bg-bg2 p-3 rounded-md border-dashed border-2 border-[#959595] text-[16px]  font-semibold text-[#959595]  ">
                real estate
              </li>
              <li className=" bg-bg2 p-3 rounded-md border-dashed border-2 border-[#959595] text-[16px]  font-semibold text-[#959595]  ">
                hospitality
              </li>
            </ul>
          </div>
          <div className="third mb-0">
            <ul className="flex gap-1 md:gap-4 justify-center">
              <li className=" bg-bg2 p-3 rounded-md border-dashed border-2 border-[#959595] text-[16px]  font-semibold text-[#959595] ">
                artificial intelligence
              </li>
              <li className=" bg-bg2 p-3 rounded-md border-dashed border-2 border-[#959595] text-[16px]  font-semibold text-[#959595]  ">
                booking
              </li>
              <li className=" bg-bg2 p-3 rounded-md border-dashed border-2 border-[#959595] text-[16px]  font-semibold text-[#959595] ">
                e-commerce
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="image flex justify-center mt-10">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
      </div> */}
      <Skills />
    </div>
  );
};

export default Industry;
