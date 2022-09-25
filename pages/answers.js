import React from 'react';

const Answers = () => {
  return (
    <div class='login-bg pt-0 sm:pt-10 pb-0 sm:pb-10'>
      <div class='w-full mx-auto container p-4 sm:p-0'>
        <h2 class='text-2xl sm:text-4xl font-bold text-black text-left pb-0 sm:pb-4'>DËicÎ</h2>
      </div>
      {/* <AnswersItemComponent questionNumber='questionNumber' question='question' optionOne='optionOne' optionTwo='optionTwo' optionThree='optionThree' optionFour='optionFour' /> */}
      <div class='w-11/12 sm:w-full mx-auto container my-4 border-2 border-gray-300 rounded-lg p-6'>
        <h4 class='text-2xl mb-8'>{ 'questionNumber' }</h4>
        <h4 class='text-2xl'>{ 'question' }</h4>
        <div class='my-8 grid grid-cols-1 sm:grid-cols-2 ml-8'>
          <h5 class='text-xl'>{ 'optionOne' }</h5>
          <h5 class='text-xl'>{ 'optionTwo' }</h5>
          <h5 class='text-xl text-green-500'>{ 'optionThree' }</h5>
          <h5 class='text-xl text-customRed-800'>{ 'optionFour' }</h5>
        </div>
      </div>
    </div>
  );
};

export default Answers;
