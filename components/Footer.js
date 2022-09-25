import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-customBlue-800 text-white pt-8">
      <div class='container mx-auto grid grid-cols-1 sm:grid-cols-4 px-4 sm:px-0'>
        <div>
          <div class="logo py-6">
            <a href="/pages/index.vue">
              <img class="w-3/5 sm:w-36 mx-auto sm:mx-0" src="../assets/images/logo.png" alt="" />
            </a>
          </div>
          <p class='text-center sm:text-left'>
            অর্থহীন লেখা যার মাঝে আছে অনেক কিছু। হ্যাঁ, এই লেখার মাঝেই আছে অনেক কিছু। যদি
            তুমি মনে করো, এটা তোমার কাজে লাগবে, তাহলে তা লাগবে কাজে । নিজের ভাষায় লেখা
            দেখতে অভ্যস্থ হও । মনে রাখবে লেখা অর্থহীন হয়, যখন তুমি তাকে
          </p>
        </div>
        <div class="text-center py-6">
          <Link href='/'>
            <h5 class='pb-4 text-2xl hover:text-customBlue-1000'>হোম</h5>
          </Link>
          <Link href='/records'>
            <h5 class='py-4 text-2xl hover:text-customBlue-1000'>রেকর্ডস</h5>
          </Link>
          <Link href='dashboard'>
            <h5 class='py-4 text-2xl hover:text-customBlue-1000'>ড্যাশবোর্ড</h5>
          </Link>
          <Link href='exam'>
            <h5 class='py-4 text-2xl hover:text-customBlue-1000'>পরীক্ষা</h5>
          </Link>
        </div>
        <div class="text-center">
          <h5 class='pt-6 pb-4 md:text-xl text-2xl font-english'>+880 1816-848931</h5>
          <h5 class='py-4 md:text-xl text-2xl font-english'>info@porikkhaa.com</h5>
        </div>
        <div class='py-6 text-center sm:text-right'>
          <font-awesome-icon class='fa-3x mx-4 md:mx-2 lg:mx-4' icon="['fab', 'facebook']"/>
          <font-awesome-icon class='fa-3x mx-4 md:mx-2 lg:mx-4' icon="['fab', 'instagram']"/>
          <font-awesome-icon class='fa-3x mx-4 md:mx-2 lg:mx-4' icon="['fab', 'whatsapp']"/>
        </div>
      </div>
      <div class='font-english bg-customBlue-1000 text-center py-4'>Copyright @2021</div>
    </footer>
  )
}

export default Footer