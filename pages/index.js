import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      {/* <!-- section 1 start --> */}
      <div className='py-12  px-4 sm:px-0 text-center bg-gradient-to-b from-customBlue-800 to-customBlue-500'>
        <div className='container mx-auto'>
          <h2 className='text-4xl text-white py-2'>বিষয়, সাল এবং বোর্ড ভিত্তিক হাজারো প্রশ্ন সমৃদ্ধ</h2>
          <h1 className='text-6xl text-white py-2'>পরীক্ষা.কম</h1>
          <h2 className='text-6xl text-customBlue-600 py-2'>বোর্ড পরীক্ষার জন্য নিজেকে প্রস্তুত করুন</h2>
          <Link href='/exam'>
            <button className='bg-white hover:text-customBlue-800 text-4xl rounded-md my-8 px-8 py-4'>পরীক্ষা দিন</button>
          </Link>
        </div>
      </div>
      {/* <!-- section 1 end -->

    <!-- section 2 start --> */}
      <div className='py-12 container mx-auto grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-0'>
        <div>
          <h3 className='text-5xl text-center sm:text-left'>পরীক্ষা.কম</h3>
          <p className='text-2xl py-8'>
            অর্থহীন লেখা যার মাঝে আছে অনেক কিছু। হ্যাঁ, এই লেখার মাঝেই আছে অনেক কিছু। যদি তুমি মনে করো, এটা তোমার কাজে লাগবে, তাহলে তা লাগবে কাজে । নিজের ভাষায় লেখা দেখতে অভ্যস্থ হও । মনে রাখবে লেখা
            অর্থহীন হয়, যখন তুমি তাকে অর্থহীন মনে করো; আর লেখা অর্থবোধকতা তৈরি করে, যখন তুমি তাতে অর্থ ঢালো। যেকোনো লেখাই তোমার কাছে অর্থবোধকতা তৈরি করতে পারে, যদি তুমি সেখানে অর্থদ্যোতনা দেখতে পাও
            অর্থহীন লেখা যার মাঝে আছে অনেক কিছু । হ্যাঁ, এই লেখার মাঝেই আছে অনেক কিছু । যদি তুমি অভ্যস্ত হও ৷ মনে রাখবে লেখা অর্থহীন হয়, যখন তুমি তাকে অর্থহীন মনে করো; আর লেখা অর্থবোধকতা তৈরি করে,
            যখন তুমি তাতে অর্থ ঢালো। যেকোনো লেখাই তোমার কাছে অর্থবোধকতা তৈরি করতে পারে, যদি তুমি সেখানে অর্থদ্যোতনা দেখতে পাও অর্থহীন লেখা।
          </p>
        </div>
        <div className='flex place-items-center justify-center'>
          <img src='/iframe-image.png' alt='youtube' />
        </div>
      </div>
      {/* <!-- section 2 end -->

    <!-- section 3 start --> */}
      <div className='home-bg bg-no-repeat bg-cover py-0 sm:py-12 px-4 sm:px-0'>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 text-center'>
          <div className='py-10 sm:py-10'>
            <h4 className='text-4xl text-white'>প্রশ্ন সংখ্যা</h4>
            <h3 className='text-6xl text-white'>৫৮৯০</h3>
          </div>
          <div className='py-10 sm:py-10'>
            <h4 className='text-4xl text-white'>বিষয় সংখ্যা</h4>
            <h3 className='text-6xl text-white'>১২</h3>
          </div>
          <div className='py-10 sm:py-10'>
            <h4 className='text-4xl text-white'>অংশগ্রহণকারী</h4>
            <h3 className='text-6xl text-white'>১৩৯৮৩</h3>
          </div>
        </div>
      </div>
      {/* <!-- section 3 end -->

    <!-- section 4 start --> */}
      <div className='py-12 container mx-auto grid grid-cols-1 sm:grid-cols-2 text-center sm:text-left px-4 sm:px-0'>
        <div>
          <h3 className='text-5xl'>
            <span className='border-b-4 border-customBlue-800'>নমুনা</span> পরীক্ষা দিন
          </h3>
          <p className='text-2xl py-8'>
            অর্থহীন লেখা যার মাঝে আছে অনেক কিছু। হ্যাঁ, এই লেখার মাঝেই আছে অনেক কিছু। যদি তুমি মনে করো, এটা তোমার কাজে লাগবে, তাহলে তা লাগবে কাজে । নিজের ভাষায় লেখা দেখতে অভ্যস্থ হও । মনে রাখবে লেখা
            অর্থহীন হয়, যখন তুমি তাকে
          </p>
        </div>
        <div className='flex place-items-center justify-center'>
          <button className='bg-customBlue-800 hover:text-customBlue-500 text-white text-4xl rounded-md my-8 px-20 py-4'>পরীক্ষা দিন</button>
        </div>
      </div>
      {/* <!-- section 4 end --> */}
    </div>
  );
}
