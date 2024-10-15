import React from 'react'
import Announcement from './_atoms/Announcement'
import ContactLine from './ContactLine'
import Header from './Header'

const MainPage = () => {
  return (
    <div>
        <div><Announcement/></div>
        <div className='hidden min-[950px]:block'><ContactLine/></div>
        <div><Header/></div>
    </div>
  )
}

export default MainPage