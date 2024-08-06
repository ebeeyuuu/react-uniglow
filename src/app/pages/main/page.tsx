// Page.js
import React from 'react';
import MainLayout from '@/app/MainLayout';
import AIMatching from '@/app/components/Main/AIMatching';

const Page = () => {
  return (
    <MainLayout>
      <div className="flex justify-center items-center w-full h-full">
        <div className="text-4xl font-bold">
          Welcome to Uniglow!
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
