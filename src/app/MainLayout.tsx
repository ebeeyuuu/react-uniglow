// MainLayout.js
import React, { ReactNode } from 'react';
import NavBar from '@/app/components/Main/NavBar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <NavBar />
      <div className="flex-grow p-4 overflow-auto ml-[145px] max-[700px]:ml-0 max-[700px]:mt-[130px]">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
