import Link from 'next/link';
import React from 'react';

const ExamEnded = () => {
  return (
    <div class='login-bg pt-0 sm:pt-10 pb-0 sm:pb-10'>
      <div class='w-full mx-auto container p-4 sm:p-0'>
        <h2 class='text-2xl sm:text-4xl font-bold text-black text-left pb-0 sm:pb-4'>cix¶v</h2>
      </div>
      <div class='hidden sm:flex flex-col sm:flex-row place-items-start sm:items-center w-full mx-auto container my-4 p-4 sm:p-0 gap-y-4 sm:gap-y-0'>
        <div class='flex items-center ml-0 sm:ml-auto text-2xl gap-x-4'>
          <h4>mgqt</h4>
          <h4 class='text-4xl bg-customBlue-900 px-2 py-1 rounded-lg text-white'>00.00.00</h4>
          <h4>wgwbU</h4>
        </div>
      </div>
      <div class='flex flex-col items-start sm:items-center w-full mx-auto container my-0 sm:my-16 p-4 sm:p-0 gap-y-4 sm:gap-y-0'>
        <div class='flex flex-col items-center mx-auto text-2xl gap-y-4'>
          <h4 class='text-3xl'>cix¶v m¤úbœ n‡q‡Q</h4>
          {/* <PBtn v-show='!results' class='' click='getResults'>
            djvdj Rvbyb
          </PBtn> */}
          <button id='examThree' onClick='selectExamThree' class='bg-customBlue-900 hover:bg-customBlue-1000 hover:text-customBlue-300 text-white text-2xl py-2 px-12 rounded-lg focus:outline-none focus:shadow-outline'>
            এলোমেলো প্রশ্নপত্র djvdj Rvbyb
          </button>
          <Link href='exam'>
            {/* <PBtn v-show='results' class=''>
              cix¶v w`b
            </PBtn> */}
            <button id='examThree' onClick='selectExamThree' class='bg-customBlue-900 hover:bg-customBlue-1000 hover:text-customBlue-300 text-white text-2xl py-2 px-12 rounded-lg focus:outline-none focus:shadow-outline'>
              এলোমেলো প্রশ্নপত্র cix¶v w`b
            </button>
          </Link>
        </div>
      </div>
      <div class='my-4 sm:my-12 grid grid-cols-2 sm:block p-4 sm:p-0' v-show='results'>
        <div class='text-xl sm:text-2xl grid grid-cols-1 sm:grid-cols-5 place-self-start sm:place-items-center sm:flex-row bg-transparent sm:bg-customBlue-900 text-black sm:text-white justify-between w-full mx-auto container px-2 py-4 sm:p-4 gap-x-2 sm:gap-x-0 gap-y-4 sm:gap-y-0'>
          <h4>cix¶v b¤^i</h4>
          <h4>DËi †`qv n‡q‡Q </h4>
          <h4>mwVK</h4>
          <h4>mgq</h4>
          <h4>wbf©yjZv %</h4>
        </div>
        <div class='text-xl sm:text-2xl text-right sm:text-center text-customGreen-500 sm:text-black grid grid-cols-1 sm:grid-cols-5 sm:flex-row justify-between w-full mx-auto container px-2 py-4 sm:p-4 gap-x-2 sm:gap-x-0 gap-y-4 sm:gap-y-0'>
          <h5>0001</h5>
          <h5>28</h5>
          <h5>22</h5>
          <h5>29:22</h5>
          <h5>79%</h5>
        </div>
      </div>
    </div>
  );
};

export default ExamEnded;
