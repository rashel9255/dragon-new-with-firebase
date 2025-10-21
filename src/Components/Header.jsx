import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className="flex justify-center flex-col gap-3 items-center">
            <img src={logo} alt="" className="mt-8" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent font-semibold'>{format(new Date(),"EEEE,MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;