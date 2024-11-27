import React from 'react';

const Footer = () =>{
  return <div className="bg-black flex flex-col items-center text-white pt-4">
            <p className="text-sm">©2024 TCN Group. All rights reserved.</p>
            <a href="mailto:tanc2200011@student.ctu.edu.vn">Email: tanc2200011@student.ctu.edu.vn</a>
            <div className="flex mt-4">
                <a href="https://www.facebook.com/hungtan.hua.3/" className="mx-2">
                    <img src="/src/assets/logoFacebook.png" className='w-[30px] h-[30px]'></img>
                </a>
                <a href="#" className="mx-2 text-gray-400 hover:text-white">
                    <img src="/src/assets/logoX.png" className='w-[30px] h-[30px]'></img>
                </a>
                <a href="#" className="mx-2 text-gray-400 hover:text-white">
                    <img src="/src/assets/logoInstagram.jfif" className='w-[30px] h-[30px]'></img>
                </a>
            </div>
    </div>
};

export default Footer;