import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'

const Dashboard = () => {
  const [user, setUser] = useState({})
  const [token, setToken] = useState('{}')
  const [profileTab, setProfileTab] = useState(true)
  const [passwordTab, setPasswordTab] = useState(false)
  const [settingsTab, setSettingsTab] = useState(false)

  const setUserValue = () => {
    if (typeof window !== 'undefined') {
      var userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
      var userTokenFromStorage = localStorage.getItem('userToken') ? JSON.parse(localStorage.getItem('userToken')) : null
    }
    setUser(userInfoFromStorage)
    setToken(userTokenFromStorage)
  }
  const profileTabClicked = () => {
    setProfileTab(true)
    setPasswordTab(false)
    setSettingsTab(false)
  }
  const passwordTabClicked = () => {
    setProfileTab(false)
    setPasswordTab(true)
    setSettingsTab(false)
  }
  const settingsTabClicked = () => {
    setProfileTab(false)
    setPasswordTab(false)
    setSettingsTab(true)
  }

  useEffect(() => {
    setUserValue()
  }, [])

  return (
    <div class='pt-0 sm:pt-00 pb-0 sm:pb-10'>
      <Header />
      <div class='w-full mx-auto container p-4 pt-12'>
        <h2 class='border-b-4 border-customBlue-800 inline-block text-2xl sm:text-4xl text-black text-left pb-0 sm:pb-4'>ড্যাশবোর্ড</h2>
      </div>
      <div class='grid grid-cols-1 sm:grid-cols-1/2 gap-x-4 w-full mx-auto container'>
        <div class='text-center'>
          <div>
            <div class='relative w-1/3 mx-auto'>
            <Image src='/avatar-2.png' className='rounded-full' alt='' layout='responsive' width={50} height={50} />
              <div class='absolute right-0 bottom-0 bg-customBlue-800 rounded-full py-2 px-3 sm:py-0 sm:px-1'>
                <font-awesome-icon class=' text-white sm:text-sm' icon="['fas', 'pen']" />
              </div>
            </div>
          </div>
          <h4 class='text-4xl my-4'>{user.name}</h4>
          <div class='text-2xl w-4/5 sm:w-full mx-auto text-left bg-customGray-500 text-white rounded-lg py-4 px-8 mt-4'>
            <h4 id='profile' onClick={profileTabClicked} class={'active my-2 relative cursor-pointer' + ' '  + (profileTab ? 'text-customBlue-600' : 'text-white')}>
              প্রোফাইল
            </h4>
            <h4 id='password-change' onClick={passwordTabClicked} class={'password-change my-2 relative cursor-pointer' + ' ' + (passwordTab ? 'text-customBlue-600' : 'text-white')}>
              পাসওয়ার্ড পরিবর্তন
            </h4>
            <h4 id='settings' onClick={settingsTabClicked} class={'settings my-2 relative cursor-pointer' + ' ' + (settingsTab ? 'text-customBlue-600' : 'text-white')}>
              সেটিংস
            </h4>
          </div>
        </div>
        {/* <!-- profile --> */}
        {profileTab && (
          <div class='bg-white rounded-xl shadow-lg px-8 py-4'>
            <h2 class='text-2xl sm:text-3xl font-bold my-4 text-customBlue-900 text-left pb-0 sm:pb-4'>প্রোফাইল</h2>
            <div class='grid grid-cols-1/2 text-2xl gap-x-8'>
              <div class='text-right'>
                <h5>নামঃ</h5>
                <h5>ইমেইলঃ</h5>
                <h5>মোবাইল নংঃ</h5>
              </div>
              <div>
                <h5>{user.name}</h5>
                <h5 class='font-english'>{user.email}</h5>
                <h5>{user.phone}</h5>
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
        )}
        {/* <!-- change password --> */}
        {passwordTab && (
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
        )}
        {/* <!-- settings --> */}
        {settingsTab && (
          <div v-if='settings' class='bg-white rounded-xl shadow-lg px-8 py-4'>
            <h2 class='text-2xl sm:text-3xl font-bold my-4 text-customBlue-900 text-left pb-0 sm:pb-4'>সেটিংস</h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
