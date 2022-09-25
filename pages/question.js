import React from 'react'

const Question = () => {
  return (
    <div class="login-bg pt-0 sm:pt-10 pb-0 sm:pb-10">
    <div class="w-full mx-auto container p-4 sm:p-0">
      <h2 class="text-2xl sm:text-4xl font-bold text-black text-left pb-0 sm:pb-4">
        পরীক্ষা
      </h2>
    </div>
    <div class="flex flex-col sm:flex-row items-start sm:items-center w-full mx-auto container my-4 p-4 sm:p-0 gap-y-4 sm:gap-y-0">
      <h4 class="text-2xl">
        প্রশ্ন নম্বরঃ ১
      </h4>
      <div class="flex items-center ml-0 sm:ml-auto text-2xl gap-x-4">
        <h4>সময়ঃ</h4>
        <h4 class="text-4xl bg-customBlue-900 px-2 py-1 rounded-lg text-white">
          ০০.২৯.২২ মিনিট
        </h4>
        <h4>মিনিট</h4>
      </div>
    </div>
    <div class="w-11/12 sm:w-full mx-auto container my-4 border-2 border-gray-300 rounded-lg p-6">
      <h4 class="text-2xl">
        কম্পিউটারের প্রথম প্রো্থামের ধারণা কে প্রবর্তন করেন ?
      </h4>
      <div class="my-8">
        <h5 class="text-xl">
          ক) চার্লস ব্যাবেজ
        </h5>
        <h5 class="text-xl">
          খ) অ্যাডা ল্যাভলেস
        </h5>
        <h5 class="text-xl">
          গ) জেমস ক্লার্ক-ম্যাক্সওয়েল
        </h5>
        <h5 class="text-xl">
          ঘ) বিল গেটস
        </h5>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row place-items-center text-xl gap-x-12 w-full mx-auto container">
      <h5>উত্তরঃ</h5>
      <div class="grid grid-cols-2 w-full sm:flex place-items-center gap-x-0 sm:gap-x-8 gap-y-4 sm:gap-y-0 my-8">
        <div onClick="radioClicked">
          <input
            id="K"
            type="radio"
            name="option"
            value="K"
          />
          <label for="K">ক</label>
        </div>
        <div onClick="radioClicked">
          <input
            id="L"
            type="radio"
            name="option"
            value="L"
          />
          <label for="L">খ </label>
        </div>
        <div onClick="radioClicked">
          <input
            id="M"
            type="radio"
            name="option"
            value="M"
          />
          <label for="M">গ</label>
        </div>
        <div onClick="radioClicked">
          <input
            id="N"
            type="radio"
            name="option"
            value="N"
          />
          <label for="N">ঘ</label>
        </div>
      </div>
      <div class="ml-0 sm:ml-auto text-2xl mb-8 sm:mb-0">
        <button
          id="nextButton"
          class="bg-gray-300 px-8 py-2 rounded-lg nextButton"
        >
          পরবর্তী
        </button>
      </div>
    </div>
  </div>
  )
}

export default Question