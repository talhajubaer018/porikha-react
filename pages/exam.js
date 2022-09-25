import Link from 'next/link';
import React from 'react';

const Exam = () => {
  return (
    <div class='py-0 sm:py-10'>
      <div class='w-full mx-auto container p-4 sm:p-0'>
        <h2 class='border-b-4 border-customBlue-800 inline-block text-2xl sm:text-4xl text-black text-left pb-0 sm:pb-4'>পরীক্ষা</h2>
        <p class='text-2xl mt-4'>পরীক্ষার বিষয়বস্তু নির্বাচন করুন</p>
      </div>
      <div class='grid grid-cols-1 sm:grid-cols-3 w-10/12 sm:w-full  mx-auto my-4 container gap-y-4 sm:gap-y-0 sm:gap-x-4'>
        <button id='examOne' onClick='selectExamOne' class='bg-customBlue-900 hover:bg-customBlue-1000 hover:text-customBlue-300 text-white text-2xl py-2 px-12 rounded-lg focus:outline-none focus:shadow-outline'>
          বোর্ড প্রশ্নপত্র
        </button>
        <button id='examTwo' onClick='selectExamTwo' class='bg-customBlue-900 hover:bg-customBlue-1000 hover:text-customBlue-300 text-white text-2xl py-2 px-12 rounded-lg focus:outline-none focus:shadow-outline'>
          স্কুল/কলেজ এর প্রশ্নপত্র
        </button>
        <button id='examThree' onClick='selectExamThree' class='bg-customBlue-900 hover:bg-customBlue-1000 hover:text-customBlue-300 text-white text-2xl py-2 px-12 rounded-lg focus:outline-none focus:shadow-outline'>
          এলোমেলো প্রশ্নপত্র
        </button>
      </div>
      <div v-show='examSelected' class='grid grid-cols-1 sm:grid-cols-4 w-8/12 sm:w-full mx-auto container mt-8 gap-x-0 sm:gap-x-4 gap-y-4 sm:gap-y-0 '>
        <select class='text-xl border-customBlue-800 border-2 p-2 rounded-md'>
          <opetion>পরীক্ষা পছন্দ করুন</opetion>
          <option>পরীক্ষা পছন্দ করুন</option>
          <option>পরীক্ষা পছন্দ করুন</option>
        </select>
        <select class='text-xl border-customBlue-800 border-2 p-2 rounded-md'>
          <option>বিষয় পছন্দ করুন</option>
          <option>বিষয় পছন্দ করুন</option>
          <option>বিষয় পছন্দ করুন</option>
        </select>
      </div>
      <div class='flex flex-col sm:flex-row justify-center items-center w-full mx-auto mt-8 mb-16 sm:my-16 container text-center gap-x-0 sm:gap-x-8 gap-y-4 sm:gap-y-0'>
        <div v-show='examSelected' class='text-lg'>
          <p>
            পূর্ণমানঃ<span class='text-customBlue-800'>৬০</span>
          </p>
          <p>
            সময়ঃ<span class='text-customBlue-800'>১ ঘন্টা</span>
          </p>
        </div>
        <Link href='/question'>
          <button id='examButton' class='examButton bg-gray-400 text-white text-2xl px-16 py-4 rounded-lg'>
            পরীক্ষা আরম্ভ করুন
          </button>
          {/* <PBtn id='examButton' class='examButton' title='title4' /> */}
        </Link>
      </div>
    </div>
  );
};

export default Exam;
