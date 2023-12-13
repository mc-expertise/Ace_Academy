import React from 'react';
import { Link } from 'react-router-dom';

const Successfuly = () => {
  return (
    <>
      <div className="w-full h-full relative">
        <div className="backgroundImage"></div>

        <div className="PopUpsStyles">
          <div className="w-[328px] flex items-center mt-16 my-16 justify-between gap-2">
            <div className="h-[5px] w-full bg-[#F09272] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F09272] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F09272] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F09272] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F09272] rounded-full"></div>
          </div>
          <div className="flex w-[328px] flex-col gap-4 justify-center text-center">
            <div className="w-[140px] h-[140px] rounded-full bg-[#F5F5F5] flex items-center justify-center m-auto">
              <img src="/src/assets/iconsuccess.png" alt="" />
            </div>
            <h1 className="main-title ">You’re ready to go!</h1>
            <p className="main-paragraph">
              Your account has been created successfully.
            </p>
          </div>
          <div className="flex w-[328px] items-center gap-2 my-16 justify-center">
            <Link to={'/'} className="styleBtnPrimary">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Successfuly;
