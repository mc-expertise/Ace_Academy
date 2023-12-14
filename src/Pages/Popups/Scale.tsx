import React from 'react';
import { Link } from 'react-router-dom';

const Scale = () => {
  return (
    <>
      <div className="w-full h-full relative">
        <div className="backgroundImage"></div>

        <div className="PopUpsStyles">
          <div className="w-[328px] flex items-center padding_popups justify-between gap-2">
            <div className="h-[5px] w-full bg-[#F09272] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F09272] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F09272] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F09272] rounded-full"></div>
            <div className="h-[5px] w-full bg-[#F5F5F5] rounded-full"></div>
          </div>
          <div className="flex w-[328px] flex-col gap-11 justify-center text-center">
            <h1 className="main-title ">Likert-scale</h1>
            <div>
              <label className="main-label !text-left ">
                I like technology
              </label>
              <div className="flex items-center relative justify-between ">
                <div className="flex flex-col">
                  <label className="custom-radio-btn">
                    <input type="radio" name="sample" checked />
                    <span className="checkmark"></span>
                  </label>
                  <span className="label font-bold">Disagree</span>
                </div>
                <div className="flex flex-col">
                  <label className="custom-radio-btn">
                    <input type="radio" name="sample" checked />
                    <span className="checkmark"></span>
                  </label>
                  <span className="label font-bold">Neutral</span>
                </div>
                <div className="flex flex-col">
                  <label className="custom-radio-btn">
                    <input type="radio" name="sample" checked />
                    <span className="checkmark"></span>
                  </label>
                  <span className="label font-bold">Agree</span>
                </div>
              </div>
            </div>
            <div>
              <label className="main-label !text-left ">
                I want to learn new things
              </label>
              <div className="flex items-center relative justify-between ">
                <div className="flex flex-col">
                  <label className="custom-radio-btn">
                    <input type="radio" name="things" checked />
                    <span className="checkmark"></span>
                  </label>
                  <span className="label font-bold">Disagree</span>
                </div>
                <div className="flex flex-col">
                  <label className="custom-radio-btn">
                    <input type="radio" name="things" checked />
                    <span className="checkmark"></span>
                  </label>
                  <span className="label font-bold">Neutral</span>
                </div>
                <div className="flex flex-col">
                  <label className="custom-radio-btn">
                    <input type="radio" name="things" checked />
                    <span className="checkmark"></span>
                  </label>
                  <span className="label font-bold">Agree</span>
                </div>
              </div>
            </div>
            <div>
              <label className="main-label !text-left ">
                I’ll subscribe to Ace Acedemy
              </label>
              <div className="flex items-center relative justify-between ">
                <div className="flex flex-col">
                  <label className="custom-radio-btn">
                    <input type="radio" name="Acedemy" checked />
                    <span className="checkmark"></span>
                  </label>
                  <span className="label font-bold">Disagree</span>
                </div>
                <div className="flex flex-col">
                  <label className="custom-radio-btn">
                    <input type="radio" name="Acedemy" checked />
                    <span className="checkmark"></span>
                  </label>
                  <span className="label font-bold">Neutral</span>
                </div>
                <div className="flex flex-col">
                  <label className="custom-radio-btn">
                    <input type="radio" name="Acedemy" checked />
                    <span className="checkmark"></span>
                  </label>
                  <span className="label font-bold">Agree</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[328px] items-center gap-2 padding_popups justify-center">
            <Link
              to={'/aboutyourself'}
              className="styleBtnSecon whitespace-nowrap">
              Go back
            </Link>
            <Link to={'/successfully'} className="styleBtnPrimary">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scale;
