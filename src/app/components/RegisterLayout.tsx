import React, { ReactNode } from 'react';
import image1 from '@/images/1.jpg'
import Image from "next/image";

interface RegisterLayoutProps {
  children: ReactNode;
}

const RegisterLayout: React.FC<RegisterLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col-reverse md:flex-row items-center font-semibold">
      <div className="flex flex-col justify-center items-center gap-y-4 w-full md:w-1/2 h-full p-4 mx-auto">
        {children}
      </div>
      <div className="w-full md:w-1/3 h-1/3 md:h-full">
        <Image 
          src={image1} 
          alt="Image" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  )
}

export default RegisterLayout;