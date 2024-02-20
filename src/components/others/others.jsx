import React from 'react';

const Others = () => {
  return (
    <div className="bg-bg4 text-white">
      <div className="container mx-auto py-20  ">
        <h1 className="text-center text-[40px] capitalize font-bold pb-3">
          Other Things i do{' '}
        </h1>
        <ul className="flex justify-center text-center list-disc gap-10 text-[#5A5A5A]">
          <li>Youtube</li>
          <li>Teaching</li>
        </ul>
        <div className="boxWrap flex flex-col gap-10   my-10 ">
          <div className=" ">
            <div className=" bg-bg3 w-full h-96 mb-3 rounded-md"></div>
            <h3 className="w-4/5 ml-4 text-[20px]">
              Explaining the Atomic Design System and how designers can
              implement it
            </h3>
          </div>
          <div className=" ">
            <div className=" bg-bg3 w-full h-96 mb-3  rounded-md"></div>
            <h3 className=" w-4/5 ml-4 text-[20px]">
              Explaining the Atomic Design System and how designers can
              implement it
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others;
