import React from 'react';

const BlockImage = () => {
  return (
    <div
      className="w-[700px] heightlogphoto p-8 flex flex-col 
    justify-between items-start rounded-2xl imglogspace">
      <h1 className="z-50 text-2xl font-bold">ACE ACADEMY</h1>
      <div className="z-50 w-[464px] flex flex-col gap-3">
        <p className="main-title !font-bold">
          "The beautiful thing about learning is that no one can take it away
          from you."{' '}
        </p>
        <span className="text-[23px] font-medium">- B.B. Kingffrey</span>
        <div className="bg-white flex items-center justify-between px-3 py-[2px] rounded-full w-[60px]">
          <span className="w-[10px] h-[10px] rounded-full bg-[#F09272]"></span>
          <span className="w-[10px] h-[10px] rounded-full bg-[#F7F5FD]"></span>
          <span className="w-[10px] h-[10px] rounded-full bg-[#F7F5FD]"></span>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-full ShadowImgLog "></div>
    </div>
  );
};

export default BlockImage;
