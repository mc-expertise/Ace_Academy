import React from 'react';
import BlockImage from '../components/Shared/BlockImage';
import ResetPass from '../components/Password/ResetPass';

const PasswordPages = () => {
  return (
    <div className="flex items-center h-full w-full p-3">
      <div className=" w-fit relative flex items-center">
        <BlockImage />
      </div>
      <div className="flex items-center justify-center w-full flex-1">
        <ResetPass />
      </div>
    </div>
  );
};

export default PasswordPages;
