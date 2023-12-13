import React from 'react';
import BlockImage from '../components/Shared/BlockImage';
import EmailSent from '../components/Password/EmailSent';

const EmailSentPage = () => {
  return (
    <div className="flex items-center h-full w-full p-3">
      <div className=" w-fit relative flex items-center">
        <BlockImage />
      </div>
      <div className="flex items-center justify-center w-full flex-col flex-1 gap-8">
        <EmailSent />
      </div>
    </div>
  );
};

export default EmailSentPage;
