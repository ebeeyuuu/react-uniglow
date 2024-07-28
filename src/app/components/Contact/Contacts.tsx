import React from 'react';

const Contacts = () => {
  return (
    <div className="flex flex-row gap-x-[50px] max-[900px]:ml-[40px] max-[400px]:flex-col gap-y-[40px] mt-[20px]">
      <div className="flex flex-col gap-y-[10px]">
        <h3 className="font-semibold text-lg max-[900px]:text-base">Customer Support:</h3>
        <ul className="list-none mt-[10px] max-[900px]:text-sm">
          <li>Bug Reporting</li>
          <li>Performance Issues</li>
          <li>Suggestions</li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-[10px]">
        <h3 className="font-semibold text-lg max-[900px]:text-base">Alternatively contact us at:</h3>
        <ul className="list-none mt-[10px] max-[900px]:text-sm">
          <li>+62 811 333 0106</li>
          <li>uniglow@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;