import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <>
      <div className="w-full h-full relative">
        <div className="backgroundImage"></div>

        <div className="PopUpsStyles">
          <div className="w-[328px] flex items-center mt-16 my-16 justify-between gap-2">
            <div className="h-[5px] w-full bg-[#F09272] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F09272] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F09272] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F5F5F5] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F5F5F5] rounded-full"></div>
          </div>
          <div className="flex w-[328px] flex-col gap-4 justify-center text-center">
            <h1 className="main-title ">Terms & Conditions</h1>
            <p className="main-paragraph">
              These terms and conditions outline the rules and regulations for
              the use of Company Name's Website, located at Website .com. By
              accessing this website we assume you accept these terms and
              conditions. Do not continue to use Website Name if you do not
              agree to take all of the terms and conditions stated on this page.
            </p>
          </div>
          <div className="flex w-[328px] items-center gap-2 my-16 justify-center">
            <Link to={'/createpassword'} className="styleBtnSecon">
              Go back
            </Link>
            <Link to={'/aboutyourself'} className="styleBtnPrimary">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
