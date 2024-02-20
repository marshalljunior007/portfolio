import React from 'react';
import img from './../../images/hero.png';
import FeatherIcon from 'feather-icons-react';

const Hero = () => {
  return (
    <div className="container mx-auto text-white w-full max-h-[955px]">
      <div
        className="bg-cover bg-center bg-no-repeat mx-auto   md:bg-top z-0 h-screen"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="HeroWrap flex py-8  flex-col-reverse md:flex-row md:pt-[200px] ">
          <div className="socials flex-1 flex py-4 gap-5  md:py-4 md:flex-col">
            <div className="bg-bg3 size-[50px] rounded-full py-3 mb-3 flex justify-center items-center  ">
              <FeatherIcon icon="instagram" />
            </div>
            <div className="bg-bg3 size-[50px] rounded-full py-3 mb-3 flex justify-center items-center  ">
              <FeatherIcon icon="linkedin" />
            </div>
            <div className="bg-bg3 size-[50px] rounded-full py-3 mb-3 flex justify-center items-center  ">
              <FeatherIcon icon="twitter" />
            </div>
          </div>
          <div className="HeroText flex flex-col gap-[10px]   flex-1 ">
            <h1 className="text-3xl uppercase font-bold py-4">
              I'm Samuel Linus
            </h1>
            <div className="flex my-3  items-center gap-3">
              <p className="text-[20px] font-semibold">
                senior product designer
              </p>

              <li className="ml-[10px]mx-auto text-[#5A5A5A]">
                8years+ Experience
              </li>
            </div>

            <p className="font-normal text-[#AAA]">
              I`m an all round <span className="text-white">PRODUCT</span> guy,
              focussed in building
              <span className="text-white">SAAS</span> related products. I`m a
              user centric product designer with{' '}
              <span className="text-white">wealth of experience </span>working
              with developers and the entire product team. If you want to launch
              an MVP, <span className="text-white">startup</span>, build saas,
              enhance the <span className="text-white">experience</span> &
              aesthetics of an existing products or{' '}
              <span className="text-white">prototype </span>
              an idea then I`m your guy.
            </p>
          </div>
        </div>
        <div>
          <h2>Projects</h2>
          <p>products i have worked on </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
