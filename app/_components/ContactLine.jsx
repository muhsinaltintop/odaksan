import React from 'react'
import SocialIcons from './_atoms/SocialIcons'

const ContactLine = () => {
  return (
    <div
  className="bg-secondary px-4 py-3 text-black sm:flex sm:items-center sm:justify-center sm:gap-6 sm:px-6 lg:px-8"
>
  

  <div>

    <SocialIcons/>
  </div>
  <p className="text-center font-medium sm:text-left">
  Sanayi Mh. 60363 Cd. No: 38 Şehitkamil / Gaziantep
  </p>
  <p className="text-center font-medium sm:text-left">
  +90 342 218 02 02
  </p>
  <p className="text-center font-medium sm:text-left">
  satis@odaksan.com
  </p>
  
</div>
  )
}

export default ContactLine