import React from 'react';

const AiSection = () => {
  return (
    <div className="w-full flex items-center justify-between pb-11 relative">
      <div className=" p-11 flex-1 bg-[#D9D9D9] w-full h-[352px] flex flex-col justify-between rounded-[10px] rounded-tr-none rounded-br-none relative">
        <div>
          <h1 className="main-title">Welkom Jeffrey</h1>
          <p className="main-paragraph">Je hebt nog 1000 euro learn budget</p>
        </div>
        <div className="flex items-center gap-3 z-50">
          <button className="primary-button !text-[#1F1F1F] !w-[128px] whitespace-nowrap !text-[16px]">
            AI Advisor
          </button>
          <button className="primary-button !bg-white !text-[#1F1F1F] !w-[175px] whitespace-nowrap !text-[16px]">
            Browse Courses
          </button>
        </div>
        <div className="w-[720px] h-full ShadowwAiSection absolute top-0 right-[-720px]"></div>
      </div>
      <img src="/src/assets/Aiadvisor.png" alt="" className="" />
      {/* <div className="max-h-[352px] max-w-[720px] flex-1 text-left">
        <img src="/src/assets/Aiadvisor.png" alt="" className="" />
      </div> */}
      <div className="absolute w-full h-full flex flex-col justify-center items-center z-10">
        <h1 className="TitleAisection">"Learning never exhausts the mind."</h1>
        <p>LEONARDO DA VINCI</p>
      </div>
    </div>
  );
};

export default AiSection;
