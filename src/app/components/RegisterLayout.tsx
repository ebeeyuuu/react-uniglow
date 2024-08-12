import React, { ReactNode } from 'react';
import image1 from '@/images/1.jpg'
import Image from "next/image";

interface RegisterLayoutProps {
  children: ReactNode;
}

const RegisterLayout: React.FC<RegisterLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen flex justify-center md:flex-row items-center font-semibold">
      <div className="w-full h-full filter brightness-50">
        <Image
          src={image1}
          alt="Image"
          className="w-full h-full object-cover -z-100"
          layout="fill" // Use layout="fill" for background images
          priority={false} // Set priority to false for lazy loading
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#020202] py-[40px] px-[40px] rounded-[20px] z-100">
        {children}
      </div>
    </div>
  );
}

export default RegisterLayout;