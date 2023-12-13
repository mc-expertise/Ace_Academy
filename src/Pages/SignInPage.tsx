import React from 'react';
import BlockImage from '../components/Shared/BlockImage';
import SignIn from '../components/Password/SignIn';

const SignInPage = () => {
  return (
    <div className="flex items-center h-full w-full p-3">
      <div className=" w-fit relative flex items-center">
        <BlockImage />
      </div>
      <div className="flex items-center justify-center w-full flex-1">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
