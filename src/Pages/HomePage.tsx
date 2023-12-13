import React from 'react';
import Header from '../components/Shared/Header';
import Recommendations from '../components/Home/Recommendations';
import AiSection from '../components/Home/AiSection';
import PeopleLikeU from '../components/Home/PeopleLikeU';
import Popular from '../components/Home/Popular';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#F5F5F5] px-[66px] 2xl:px-[160px]">
        <Recommendations />
        <AiSection />
        <PeopleLikeU />
        <Popular />
      </div>
    </div>
  );
};

export default HomePage;
