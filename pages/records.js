import React from 'react';

const Records = () => {
  return (
    <div class='pt-0 sm:pt-10 pb-0 sm:pb-10'>
      <div class='w-full mx-auto container px-2 py-4 lg:p-0'>
        <h2 class='border-b-4 border-customBlue-800 inline-block text-2xl sm:text-4xl text-black text-left pb-0 sm:pb-4'>রেকর্ডস</h2>
      </div>
      {/* <RecordsComponent /> */}
      <div class='w-full mx-auto container shadow-lg my-4 rounded-lg mb-12 sm:mb-0'>
        <div class='text-md sm:text-2xl flex bg-customBlue-900 text-white justify-between px-2 py-4 sm:p-4 gap-x-2 sm:gap-x-0'>
          <h4>পরীক্ষা নম্বর</h4>
          <h4>অংশগ্রহণকারী</h4>
          <h4>উত্তর দেয়া হয়েছে</h4>
          <h4>সঠিক</h4>
          <h4>সময়</h4>
          <h4>নির্ভুলতা %</h4>
        </div>
        {/* <RecordsItemComponent examNumber='1' participants='100' answered='80' correct='75' time='60' correctPercentage='90' /> */}
        <div class='w-full mx-auto container shadow-lg my-4 rounded-lg mb-12 sm:mb-0'>
          <div class='text-md sm:text-xl flex justify-between px-2 py-4 sm:p-4 gap-x-2 sm:gap-x-0'>
            <h4>{ 'examNumber' }</h4>
            <h4>{ 'participants' }</h4>
            <h4>{ 'answered' } </h4>
            <h4>{ 'correct' }</h4>
            <h4>{ 'time' }</h4>
            <h4>{ 'correctPercentage' }</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
