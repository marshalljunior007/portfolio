import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className=" mx-auto py-4 flex w-full justify-between fixed text-white z-10 ">
        <a href="#" className="font-bold bg-blue-400 md:mx-10 px-4">
          Marshall Nwachukwu
        </a>

        <ul className="hidden md:flex justify-between font-extralight gap-4 mx-12  ">
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
        <FeatherIcon
          onClick={() => setShow(!show)}
          icon={show ? 'x' : 'menu'}
          className="menu-icon md:hidden mx-4"
        />
      </div>
    </div>
  );
};

export default Navbar;
