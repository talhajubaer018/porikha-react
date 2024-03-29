import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword ] = useState('')
  const [phone, setPhone] = useState('')
  const [levelId, setLevelId] = useState(1)
  const [instituteId, setInstituteId] = useState(1)

  const router = useRouter()

  const register = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
    try {
      if(password === confirmPassword) {
        await axios.post(`${process.env.NEXT_PUBLIC_API}/register`, {
          level_id: levelId,
          name: name,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
          phone: phone,
          institute_id: instituteId
        }, config);
        alert('Registered Successfully')
      }
      else {
        alert('Password did not match')
      }
      // await router.push('/login');
      console.log(name, email, phone)
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }

  return (
    <div class='container mx-auto login-bg pt-0 sm:pt-10 pb-0 sm:pb-10'>
      <div class='w-full mx-auto container p-4 sm:p-0'>
        <h2
          class='
          border-b-4 border-customBlue-800
          inline-block
          text-2xl
          sm:text-4xl
          text-black text-left
          pb-0
          sm:pb-4
        '
        >
          রেজিস্টার
        </h2>
      </div>
      {/* <!-- icons --> */}
      <div
        class='
        grid grid-cols-3
        sm:flex sm:justify-end sm:max-w-screen-lg sm:mx-auto sm:gap-x-4
        place-items-center
        py-4
      '
      >
        <div class='shadow-lg py-2 px-8 sm:px-12 text-brands-google rounded-lg'>
          <Link href='#!'>
            <font-awesome-icon class='fa-2x' icon="['fab', 'google']" />
          </Link>
        </div>
        <Link href='#!'>
          <div class='shadow-lg py-2 px-10 sm:px-12 text-brands-facebook rounded-lg'>
            <font-awesome-icon class='fa-2x' icon="['fab', 'facebook-f']" />
          </div>
        </Link>
        <Link href='#!'>
          <div class='shadow-lg py-2 px-8 sm:px-12 text-brands-twitter rounded-lg'>
            <font-awesome-icon class='fa-2x' icon="['fab', 'twitter']" />
          </div>
        </Link>
      </div>
      <div class='w-full max-w-screen-lg mx-auto container'>
        <form
          class='
          grid grid-cols-1
          md:grid-cols-2
          bg-white
          rounded-xl
          px-8
          py-8
          sm:p-0
          gap-0
          sm:gap-x-6
        '
        >
          {/* <!-- name --> */}
          <div class='mb-4'>
            <label class='block text-black text-md font-bold mb-2' for='name'>
              নাম
            </label>
            <input
              id='name'
              name='name'
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
              placeholder='নাম'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* <!-- email --> */}
          <div class='mb-4'>
            <label class='block text-black text-md font-bold mb-2' for='email'>
              ইমেইল
            </label>
            <input
              id='email'
              name='email'
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <!-- password --> */}
          <div class='mb-4'>
            <label class='block text-black text-md font-bold mb-2' for='password' type='password'>
              পাসওয়ার্ড
            </label>
            <input
              id='password'
              name='password'
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <p class='text-red-500 text-xs italic'></p>
          </div>
          {/* <!-- confirm password --> */}
          <div class='mb-4'>
            <label class='block text-black text-md font-bold mb-2' for='password_confirmation' type='password_confirmation'>
              কনফার্ম পাসওয়ার্ড
            </label>
            <input
              id='password_confirmation'
              name='password_confirmation'
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
              placeholder='কনফার্ম পাসওয়ার্ড'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p class='text-red-500 text-xs italic'></p>
          </div>
          {/* <!-- mobile --> */}
          <div class='mb-4'>
            <label class='block text-black text-md font-bold mb-2' for='phone' type='number'>
              মোবাইল নং
            </label>
            <input
              id='phone'
              name='phone'
              class='
              shadow
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
              type='number'
              placeholder='মোবাইল নং'
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {/* <!-- dummy field to send checkbox in next line desktop --> */}
          <div class='mb-4 hidden sm:block opacity-0'></div>
          {/* <!-- checkbox --> */}
          <div class='mb-4'>
            <input name='terms' class='outline-customBlue mr-2 relative z-50' type='checkbox' />
            <label class='mb-2'>শর্তাবলীর সাথে একমত</label>
          </div>
          <div class='flex items-center justify-center mb-8'>
            <button
              class='
              bg-customBlue-800
              hover:bg-customBlue-800
              text-white text-3xl
              font-bold
              py-2
              px-12
              rounded-lg
              focus:outline-none focus:shadow-outline
            '
              type='button'
              onClick={register}
            >
              রেজিস্টার
            </button>
          </div>
        </form>
        {/* <!-- button --> */}
      </div>
    </div>
  )
}

export default Register
