import React from 'react';
import ContentFiltre from '../components/Home/ContentFiltre';
import AllCoursesContent from '../components/Home/AllCoursesContent';
import Header from '../components/Shared/Header';

interface AllCoursesPageProps {}

const AllCoursesPage: React.FC<AllCoursesPageProps> = () => {
  return (
    <>
      <div>
        <Header />
        <div className="py-11 bg-[#F5F5F5] px-[66px] 2xl:px-[160px]">
          <h1 className="main-title mb-2">AllCoursesPage</h1>
          <ContentFiltre />
          <div className="grid grid-cols-4 gap-4 py-2">
            <AllCoursesContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCoursesPage;
