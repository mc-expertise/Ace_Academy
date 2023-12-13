import React from 'react';
import BlockImage from '../components/Shared/BlockImage';
import NewPassword from '../components/Password/NewPassword';

const NewPasswordPage = () => {
  return (
    <div className="flex items-center h-full w-full p-3">
      <div className=" w-fit relative flex items-center">
        <BlockImage />
      </div>
      <div className="flex items-center justify-center w-full flex-1">
        <NewPassword />
      </div>
    </div>
  );
};

export default NewPasswordPage;
