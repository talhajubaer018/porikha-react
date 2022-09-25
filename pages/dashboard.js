import React from 'react';

const Dashboard = () => {
  return (
    <div class='pt-0 sm:pt-10 pb-0 sm:pb-10'>
      <div class='w-full mx-auto container p-4 sm:p-0'>
        <h2 class='border-b-4 border-customBlue-800 inline-block text-2xl sm:text-4xl text-black text-left pb-0 sm:pb-4'>ড্যাশবোর্ড</h2>
      </div>
      <div class='grid grid-cols-1 sm:grid-cols-1/2 gap-x-4 w-full mx-auto container'>
        <div class='text-center'>
          <div>
            <div class='relative w-1/3 mx-auto'>
              <img class='rounded-full' src='../assets/images/avatar-2.png' />
              <div class='absolute right-0 bottom-0 bg-customBlue-800 rounded-full py-2 px-3 sm:py-0 sm:px-1'>
                <font-awesome-icon class=' text-white sm:text-sm' icon="['fas', 'pen']" />
              </div>
            </div>
          </div>
          <h4 class='text-4xl my-4'>name{/* {{this.userInfo.name}} */}</h4>
          <div class='text-2xl w-4/5 sm:w-full mx-auto text-left bg-customGray-500 text-white rounded-lg py-4 px-8 mt-4'>
            <h4 id='profile' onClick='profileClicked' class='profile active my-2 relative hover:text-customBlue-600 cursor-pointer'>
              প্রোফাইল
            </h4>
            <h4 id='password-change' onClick='passwordChangeClicked' class='password-change my-2 relative hover:text-customBlue-600 cursor-pointer'>
              পাসওয়ার্ড পরিবর্তন
            </h4>
            <h4 id='settings' onClick='settingsClicked' class='settings my-2 relative hover:text-customBlue-600 cursor-pointer'>
              সেটিংস
            </h4>
          </div>
        </div>
        {/* <!-- profile --> */}
        <div v-if='profile' class='bg-white rounded-xl shadow-lg px-8 py-4'>
          <h2 class='text-2xl sm:text-3xl font-bold my-4 text-customBlue-900 text-left pb-0 sm:pb-4'>প্রোফাইল</h2>
          <div class='grid grid-cols-1/2 text-2xl gap-x-8'>
            <div class='text-right'>
              <h5>নামঃ</h5>
              <h5>ইমেইলঃ</h5>
              <h5>মোবাইল নংঃ</h5>
            </div>
            <div>
              <h5>
                {/* {{this.userInfo.name}} */}
                name
              </h5>
              <h5 class='font-english'>
                {/* {{this.userInfo.email}} */}
                email
              </h5>
              <h5>
                {/* {{this.userInfo.phone}} */}
                phone
              </h5>
            </div>
          </div>
          <div class='text-center sm:text-right mt-8'>
            {/* <PBtn class="text-3xl font-bold">
            তথ্য পরিবর্তন
          </PBtn> */}
            <button id='' onClick='' class='bg-customBlue-900 hover:bg-customBlue-1000 hover:text-customBlue-300 text-white text-2xl py-2 px-12 rounded-lg focus:outline-none focus:shadow-outline'>
              তথ্য পরিবর্তন
            </button>
          </div>
        </div>
        {/* <!-- change password --> */}
        <form v-if='passwordChange' class='bg-white rounded-xl shadow-lg px-8 py-4'>
          <h2 class='text-2xl sm:text-3xl font-bold my-4 text-customBlue-900 text-left pb-0 sm:pb-4'>পাসওয়ার্ড পরিবর্তন</h2>
          <div class='w-full sm:w-4/6 mx-auto'>
            {/* <!-- old password --> */}
            <div class='mb-4'>
              <label class='block text-black text-lg font-bold mb-2' for='oldPassword'>
                পুরাতন পাসওয়ার্ড
              </label>
              <input id='oldPassword' class='font-english border-rounded shadow appearance-none border rounded-lg border-customBlue-800 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='password' placeholder='পুরাতন পাসওয়ার্ড' />
            </div>
            {/* <!-- new password --> */}
            <div class='mb-4'>
              <label class='block text-black text-lg font-bold mb-2' for='newPassword' type='password'>
                নতুন পাসওয়ার্ড
              </label>
              <input id='newPassword' class='shadow font-english appearance-none border border-customBlue-800 rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' type='password' placeholder='নতুন পাসওয়ার্ড' />
              <p class='text-red-500 text-xs italic' />
            </div>
            {/* <!-- confirm password --> */}
            <div class='mb-4'>
              <label class='block text-black text-lg font-bold mb-2' for='confirmPassword' type='password'>
                কনফার্ম পাসওয়ার্ড
              </label>
              <input id='confirmPassword' class='shadow font-english appearance-none border border-customBlue-800 rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' type='password' placeholder='কনফার্ম পাসওয়ার্ড' />
              <p class='text-red-500 text-xs italic' />
            </div>
            {/* <!-- button --> */}
            <div class='flex items-center justify-center'>
              {/* <PBtn class='text-3xl font-bold'>নিশ্চিত করুন</PBtn> */}
              <button id='' onClick='' class='bg-customBlue-900 hover:bg-customBlue-1000 hover:text-customBlue-300 text-white text-2xl py-2 px-12 rounded-lg focus:outline-none focus:shadow-outline'>
                নিশ্চিত করুন
              </button>
            </div>
          </div>
        </form>
        {/* <!-- settings --> */}
        <div v-if='settings' class='bg-white rounded-xl shadow-lg px-8 py-4'>
          <h2 class='text-2xl sm:text-3xl font-bold my-4 text-customBlue-900 text-left pb-0 sm:pb-4'>সেটিংস</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
