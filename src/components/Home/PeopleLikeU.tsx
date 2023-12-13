import React from 'react';
import CardCourses from '../Shared/CardCourses';

const Recommendations = () => {
  return (
    <div className="py-11 ">
      <h1 className="main-title mb-4">People like you also viewed</h1>
      <CardCourses />
    </div>
  );
};

export default Recommendations;
