
import React, { useState } from 'react';

const NavBar = () => {

  return (
    <nav className=" drop-shadow-2xl bg-blue-500  flex justify-between sticky top-0 ">
      <span className='mt-3 ml-9 font-semibold'>Home</span>
      <ul className='flex'>
        <li className='m-3 font-semibold'>About me</li>
        <li className='m-3 mr-9 font-semibold'>👀...</li>
      </ul>
    </nav>
  );
};

export default NavBar;