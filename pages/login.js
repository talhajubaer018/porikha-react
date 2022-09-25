import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <div class='login-bg pt-0 sm:pt-10 pb-0 sm:pb-10'>
      <div class='w-full mx-auto container p-4 sm:p-0'>
        <h2
          class='
          text-2xl
          sm:text-4xl
          text-black text-left
          inline-block
          border-b-4 border-customBlue-800
          pb-0
          sm:pb-4
        '
        >
          লগইন
        </h2>
      </div>
      <div class='w-full max-w-md mx-auto container'>
        <form onClick='submit' class='bg-white rounded-xl px-8 py-8'>
          {/* <!-- email --> */}
          <div class='mb-4'>
            <label class='block text-black text-lg font-bold mb-2' for='email'>
              ইমেইল
            </label>
            <input
              v-model='email'
              id='email'
              class='
              font-english
              border-rounded
              shadow
              appearance-none
              border
              rounded-lg
              border-customBlue-800
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            '
              type='text'
              placeholder='ইমেইল'
            />
          </div>
          {/* <!-- password --> */}
          <div class='mb-4'>
            <label class='block text-black text-lg font-bold mb-2' for='password' type='password'>
              পাসওয়ার্ড
            </label>
            <input
              v-model='password'
              id='password'
              class='
              shadow
              font-english
              appearance-none
              border border-customBlue-800
              rounded-lg
              w-full
              py-2
              px-3
              text-gray-700
              mb-3
              leading-tight
              focus:outline-none focus:shadow-outline
            '
              type='password'
              placeholder='পাসওয়ার্ড'
            />
            <p class='text-red-500 text-xs italic' />
          </div>
          {/* <!-- checkbox --> */}
          {/* <PCheckbox v-model="checked"> মনে রেখ </PCheckbox> */}
          {/* <!-- button --> */}
          <div class='flex items-center justify-center'>
            {/* <PBtn type="submit" onClick="submit" class="text-3xl font-bold">
            লগইন
          </PBtn> */}
            <button type='submit' onClick='submit' class='bg-customBlue-900 hover:bg-customBlue-1000 hover:text-customBlue-300 text-white text-2xl py-2 px-12 rounded-lg focus:outline-none focus:shadow-outline'>
              লগইন
            </button>
          </div>
          <div
            class='
            flex
            items-center
            justify-between
            mt-8
            text-xl text-customBlue-800
          '
          >
            <Link href='/forgotpassword'>
              <a>পাসওয়ার্ড ভুলে গেছি</a>
            </Link>
            <Link href='/register'>
              <a>নতুন একাউন্ট</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
