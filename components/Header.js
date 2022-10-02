import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const Header = () => {
  const router = useRouter()

  const [user, setUser] = useState({})
  const [token, setToken] = useState('{}')

  const logout = () => async () => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/logout`, headers)

      localStorage.removeItem('userInfo')
      localStorage.removeItem('userPhone')

      console.log('successful logout')
      console.log(res)
      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }
  const setValue = () => {
    if (typeof window !== 'undefined') {
      var userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
      var userTokenFromStorage = localStorage.getItem('userToken') ? JSON.parse(localStorage.getItem('userToken')) : null
    }
    setUser(userInfoFromStorage)
    setToken(userTokenFromStorage)
  }

  useEffect(() => {
    setValue()
  }, [])

  return (
    <header className='bg-customBlue-1000 text-white px-4 sm:px-0 py-4 sm:py-0'>
      <div className='container mx-auto flex flex-row place-items-center'>
        <div className='logo'>
          <Link href='/'>
            <img className='w-36' src='/logo.png' alt='' />
          </Link>
        </div>
        <div id='navigation' className='navbar-hidden hidden absolute sm:relative left-0 sm:left-auto bottom-0 sm:bottom:auto w-full sm:w-auto transform -translate-x-1/2 sm:translate-x-0 h-screen sm:h-auto text-center justify-center bg-customBlue-1000 sm:bg-transparent profile ml-auto flex-col sm:flex sm:flex-row place-items-center pb-24 sm:pb-0 gap-0 sm:gap-2'>
          {/* <font-awesome-icon onClick='crossClicked' className='fa-lg block sm:hidden absolute top-0 right-0 m-6' icon="['fas', 'times']" /> */}
          {!token && (
            <>
              <Link href='/login'>
                <h3 className='text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white rounded-md cursor-pointer px-4 py-4'>{/* <!-- login -->*/}লগইন</h3>
              </Link>
              <Link href='/register'>
                <h3 className='text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4'>{/* <!-- register -->*/}রেজিস্টার</h3>
              </Link>
            </>
          )}

          <Link href='/'>
            <h3 className='text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4'>{/* <!-- home -->*/}হোম</h3>
          </Link>
          <Link href='/records'>
            <h3 className='text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4'>{/* <!-- records -->*/}রেকর্ডস</h3>
          </Link>
          <Link href='/dashboard'>
            <h3 className='text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4'>{/* <!-- dashboard -->*/}ড্যাশবোর্ড</h3>
          </Link>
          <Link href='/exam'>
            <h3 className='text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4'>{/* <!-- exam -->*/}পরীক্ষা</h3>
          </Link>
          <div className='user flex flex-col sm:flex-row place-items-center mx-auto sm:ml-auto relative'>
            {user && (
              <div>
                <h3 className='relative w-full text-3xl sm:text-xl text-white rounded-md cursor-pointer px-0 py-4'>
                  {user?.name}
                  {/* <font-awesome-icon className='text-sm hidden sm:inline-block' icon="['fas', 'chevron-down']"/> */}
                </h3>

                <div className='header-dropdown sm:w-full lg:w-1/2 right-0 ml-auto absolute top-full bg-customBlue-1000 text-white text-3xl sm:text-xl rounded-b-lg text-center left-0'>
                  <Link href='/dashboard'>
                    <h4 className='text-3xl sm:text-xl hover:text-customBlue-900 hover:bg-white text-white hover:shadow-lg cursor-pointer px-4 py-2'>প্রোফাইল</h4>
                  </Link>
                  <h4 onClick={logout()} className='text-3xl sm:text-xl hover:text-customBlue-900 hover:bg-white text-white hover:shadow-lg cursor-pointer rounded-b-lg px-4 py-2'>
                    লগ আউট
                  </h4>
                </div>
              </div>
            )}
            <img className='w-2/4 sm:w-1/3 lg:w-1/6 rounded-full ml-0 sm:ml-2' src='/avatar-2.png' />
          </div>
        </div>

        <div id='navigation-mobile' className='navbar-hidden z-50 absolute sm:relative left-0 sm:left-auto bottom-0 sm:bottom:auto w-full sm:w-auto transform -translate-x-1/2 sm:translate-x-0 h-screen sm:h-auto text-center justify-center bg-customBlue-1000 sm:bg-transparent profile ml-auto sm:hidden flex-col sm:flex-row place-items-center sm:pb-0 gap-0 sm:gap-2'>
          <font-awesome-icon onClick='crossClicked' className='fa-lg block sm:hidden absolute top-0 right-0 m-6' icon="['fas', 'times']" />
          <img className='w-1/5 sm:w-1/5 rounded-full mx-auto mt-6' src='/avatar-2.png' />
          <h3 className='relative w-full text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4'>
            {user?.name}
            <font-awesome-icon className='text-sm hidden sm:inline-block' icon="['fas', 'chevron-down']" />
          </h3>
          <div className='w-full'>
            {!token && (
              <>
                <Link href='/login'>
                  <h3 className='text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white rounded-md cursor-pointer px-4 py-4'>{/* <!-- login -->*/}লগইন</h3>
                </Link>
                <Link href='/register'>
                  <h3 className='text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4'>{/* <!-- register -->*/}রেজিস্টার</h3>
                </Link>
              </>
            )}
            <Link href='/'>
              <h3 onClick='crossClicked' className='text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4'>
                {/* <!-- home -->*/}হোম
              </h3>
            </Link>
            <Link href='/profile'>
              <h3 onClick='crossClicked' className='text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4'>
                {/* <!-- profile -->*/}প্রোফাইল
              </h3>
            </Link>
            <Link href='/records'>
              <h3 onClick='crossClicked' className='text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4'>
                {/* <!-- records -->*/}রেকর্ডস
              </h3>
            </Link>
            <Link href='/exam'>
              <h3 onClick='crossClicked' className='text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4'>
                {/* <!-- exam -->*/}পরীক্ষা
              </h3>
            </Link>
            <Link href='/dashboard'>
              <h3 onClick='crossClicked' className='text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4'>
                {/* <!-- dashboard -->*/}ড্যাশবোর্ড
              </h3>
            </Link>
            <Link href='' className=''>
              <h3 onClick={logout()} className='text-3xl sm:text-xl hover:text-customBlue-500 bg-customBlue-1200 text-red-700 hover:bg-white rounded-md cursor-pointer px-4 py-4'>
                {/* <!-- logout -->*/}লগ আউট
              </h3>
            </Link>
          </div>
        </div>
        <font-awesome-icon onClick='menuClicked' className='fa-2x block sm:hidden ml-auto' icon="['fas', 'bars']" />
        <div></div>
      </div>
    </header>
  )
}

export default Header
