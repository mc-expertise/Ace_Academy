import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <div className="w-full h-full relative">
        <div className="backgroundImage"></div>

        <div className="PopUpsStyles">
          <div className="w-[328px] flex items-center mt-16 my-16 justify-between gap-2">
            <div className="h-[5px] w-full bg-[#F09272] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F5F5F5] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F5F5F5] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F5F5F5] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F5F5F5] rounded-full"></div>
          </div>
          <div className="flex w-[328px] flex-col gap-4 justify-center text-center">
            <h1 className="main-title ">Welcome Jeffrey</h1>
            <p className="main-paragraph">
              Please check your mail. We’ve sent you a confirmation link.
            </p>
          </div>
          <div className="flex w-[328px] items-center gap-2 my-16 justify-center">
            <Link to={'/signin'} className="styleBtnSecon">
              Send again
            </Link>
            <Link to={'/createpassword'} className="styleBtnPrimary">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
