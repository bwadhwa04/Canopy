import React from 'react'

export default function About() {
  return (
    <div className='flex flex-col gap-4 my-7 p-36'>
      <h1 className='text-3xl font-semibold text-slate-600'>About Canopy</h1>
      <p className='text-slate-500 '>This is a website where you can find the best place to live.
        You can find a property for rent and sale. A user can create a listing about their 
        property which can be seen by others. A user can filter their search by applying conditions. 
        A person can contact the landlord by sending them a mail. The user data is the completed secured
        as we priortise their privacy the most and this is attained by using "JSON web token" and cookie functionality 
        and a user can also login with their google id, as we included OAuth functionality.
        The uploaded images are stored in Google Firebase and the main database is MongoDB.</p>
      <p className='font-bold text-slate-800 '><span className='font-semibold'>created by-</span> Bhavook wadhwa</p>
      <p className='font-bold text-slate-800 '><span className='font-semibold'>github-</span>https://github.com/bwadhwa04/Canopy</p>
      
    </div>
  )
}
