import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'

const Login = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/login`,
        {
          email: email,
          password: password,
        },
        config
      )
      localStorage.setItem('userInfo', JSON.stringify(res.data.data['0']))
      localStorage.setItem('userToken', JSON.stringify(res.data.data.token))
      await router.push('/')
      // console.log(res.data.data['0']);
      console.log('successful login');
      console.log(email, password)
    } catch (error) {
      // alert(error)
      console.log(email, password)
    }
  }

  return (
    <div className='login-bg pt-0 sm:pt-10 pb-0 sm:pb-10'>
      <div className='w-full mx-auto container p-4 sm:p-0'>
        <h2
          className='
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
      <div className='w-full max-w-md mx-auto container'>
        <form className='bg-white rounded-xl px-8 py-8'>
          {/* <!-- email --> */}
          <div className='mb-4'>
            <label className='block text-black text-lg font-bold mb-2' htmlFor='email'>
              ইমেইল
            </label>
            <input
              id='email'
              className='
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <!-- password --> */}
          <div className='mb-4'>
            <label className='block text-black text-lg font-bold mb-2' htmlFor='password' type='password'>
              পাসওয়ার্ড
            </label>
            <input
              id='password'
              className='
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className='text-red-500 text-xs italic' />
          </div>
          {/* <!-- checkbox --> */}
          {/* <PCheckbox v-model="checked"> মনে রেখ </PCheckbox> */}
          {/* <!-- button --> */}
          <div className='flex items-center justify-center'>
            {/* <PBtn type="submit" onClick="submit" className="text-3xl font-bold">
            লগইন
          </PBtn> */}
            <button type='button' onClick={submitForm} className='bg-customBlue-900 hover:bg-customBlue-1000 hover:text-customBlue-300 text-white text-2xl py-2 px-12 rounded-lg focus:outline-none focus:shadow-outline'>
              লগইন
            </button>
          </div>
        </form>
        <div
          className='
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
      </div>
    </div>
  )
}

export default Login
