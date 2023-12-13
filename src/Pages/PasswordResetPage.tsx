import React from 'react';
import BlockImage from '../components/Shared/BlockImage';
import PasswordSent from '../components/Password/PasswordSent';

const PasswordResetPage = () => {
  return (
    <div className="flex items-center h-full w-full p-3">
      <div className=" w-fit relative flex items-center">
        <BlockImage />
      </div>
      <div className="flex items-center justify-center w-full flex-col flex-1 gap-8">
        <PasswordSent />
      </div>
    </div>
  );
};

export default PasswordResetPage;
