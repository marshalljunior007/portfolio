import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className=" container mx-auto  flex justify-between py-6 text-white  ">
        <a href="#" className="font-bold">
          Marshall Nwachukwu
        </a>

        <ul className="flex justify-around  gap-x-7 z-10 font-extralight mr-40">
          <li>
            <a href="#">project</a>
          </li>
          <li>
            <a href="#">industry</a>
          </li>
          <li>
            <a href="#">skill</a>
          </li>
          <li>
            <a href="#">Others</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
