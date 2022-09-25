import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header class="bg-customBlue-1000 text-white px-4 sm:px-0 py-4 sm:py-0">
    <div class="container mx-auto flex flex-row place-items-center">
      <div class="logo">
        <Link href="/">
          <img class="w-36" src="../assets/images/logo.png" alt="" />
        </Link>
      </div>
      <div id='navigation' class="navbar-hidden hidden absolute sm:relative left-0 sm:left-auto bottom-0 sm:bottom:auto w-full sm:w-auto transform -translate-x-1/2 sm:translate-x-0 h-screen sm:h-auto text-center justify-center bg-customBlue-1000 sm:bg-transparent profile ml-auto flex-col sm:flex sm:flex-row place-items-center pb-24 sm:pb-0 gap-0 sm:gap-2">
        <font-awesome-icon onClick="crossClicked" class='fa-lg block sm:hidden absolute top-0 right-0 m-6' icon="['fas', 'times']"/>
        <Link v-if="!this.userInfo" href="/login">
          <h3 class="text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white rounded-md cursor-pointer px-4 py-4">
          {/* <!-- login -->*/}লগইন 
          </h3>
        </Link>
        <Link v-if="!this.userInfo" href='/register'>
          <h3 class="text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4">
            {/* <!-- register -->*/}রেজিস্টার 
          </h3>
        </Link>
        <Link href='/'>
          <h3 class="text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4">
            {/* <!-- home -->*/}হোম 
          </h3>
        </Link>
        <Link href='/records'>
          <h3 class="text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4">
            {/* <!-- records -->*/}রেকর্ডস 
          </h3>
        </Link>
        <Link href='/dashboard'>
          <h3 class="text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4">
            {/* <!-- dashboard -->*/}ড্যাশবোর্ড 
          </h3>
        </Link>
        <Link href='/exam'>
          <h3 class="text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4">
            {/* <!-- exam -->*/}পরীক্ষা 
          </h3>
        </Link>
        <div class='user flex flex-col sm:flex-row place-items-center mx-auto sm:ml-auto relative'>
          <h3 class="relative w-full text-3xl sm:text-xl text-white rounded-md cursor-pointer px-0 py-4">
            {/* <!-- username --> */}
            {/* {{this?.userInfo?.name}} */}
            <font-awesome-icon class='text-sm hidden sm:inline-block' icon="['fas', 'chevron-down']"/>
          </h3>
          <div class="header-dropdown sm:w-full lg:w-1/2 right-0 ml-auto absolute top-full bg-customBlue-1000 text-white text-3xl sm:text-xl rounded-b-lg text-center left-0">
            <h4 class="text-3xl sm:text-xl hover:text-customBlue-900 hover:bg-white text-white hover:shadow-lg cursor-pointer px-4 py-2">প্রোফাইল</h4>
            <h4 onClick="logout()" class="text-3xl sm:text-xl hover:text-customBlue-900 hover:bg-white text-white hover:shadow-lg cursor-pointer rounded-b-lg px-4 py-2">লগ আউট</h4>
          </div>
          <img class="w-2/4 sm:w-1/3 lg:w-1/6 rounded-full ml-0 sm:ml-2" src="../assets/images/avatar-2.png" />
        </div>
      </div>

      <div id='navigation-mobile' class="navbar-hidden z-50 absolute sm:relative left-0 sm:left-auto bottom-0 sm:bottom:auto w-full sm:w-auto transform -translate-x-1/2 sm:translate-x-0 h-screen sm:h-auto text-center justify-center bg-customBlue-1000 sm:bg-transparent profile ml-auto sm:hidden flex-col sm:flex-row place-items-center sm:pb-0 gap-0 sm:gap-2">
        <font-awesome-icon onClick="crossClicked" class='fa-lg block sm:hidden absolute top-0 right-0 m-6' icon="['fas', 'times']"/>
        <img class="w-1/5 sm:w-1/5 rounded-full mx-auto mt-6" src="../assets/images/avatar-2.png" />
        <h3 class="relative w-full text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4">
          {/* <!-- username --> */}
          {/* {{this.userInfo.name}} */}
          <font-awesome-icon class='text-sm hidden sm:inline-block' icon="['fas', 'chevron-down']"/>
        </h3>
        <div class='w-full'>

          <Link v-if="!this.userInfo" href="/login">
            <h3 onClick="crossClicked" class="text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white rounded-md cursor-pointer px-4 py-4">
            {/* <!-- login -->*/}লগইন 
            </h3>
          </Link>
          <Link v-if="!this.userInfo" href='/register'>
            <h3 onClick="crossClicked" class="text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4">
              {/* <!-- register -->*/}রেজিস্টার 
            </h3>
          </Link>
          <Link href='/'>
            <h3 onClick="crossClicked" class="text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4">
              {/* <!-- home -->*/}হোম
            </h3>
          </Link>
          <Link href='/profile'>
            <h3 onClick="crossClicked" class="text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4">
              {/* <!-- profile -->*/}প্রোফাইল 
            </h3>
          </Link>
          <Link href='/records'>
            <h3 onClick="crossClicked" class="text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4">
              {/* <!-- records -->*/}রেকর্ডস 
            </h3>
          </Link>
          <Link href='/exam'>
            <h3 onClick="crossClicked" class="text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4">
              {/* <!-- exam -->*/}পরীক্ষা 
            </h3>
          </Link>
          <Link href='/dashboard'>
            <h3 onClick="crossClicked" class="text-3xl sm:text-xl hover:text-customBlue-500 hover:bg-white text-white rounded-md cursor-pointer px-4 py-4">
              {/* <!-- dashboard -->*/}ড্যাশবোর্ড 
            </h3>
          </Link>
          <Link href='/' class=''>
            <h3 onClick="crossClicked" class="text-3xl sm:text-xl hover:text-customBlue-500 bg-customBlue-1200 text-red-700 hover:bg-white rounded-md cursor-pointer px-4 py-4">
              {/* <!-- logout -->*/}লগ আউট 
            </h3>
          </Link>
        </div>
      </div>
      <font-awesome-icon onClick="menuClicked" class='fa-2x block sm:hidden ml-auto' icon="['fas', 'bars']"/>
      <div>

      </div>
    </div>
  </header>
  )
}

export default Header
