import SocialIcons from './_atoms/SocialIcons'
import { AdressPin, Mail, Phone } from './_atoms/Icons'

const ContactLine = () => {
  return (
    <div
  className="bg-secondary px-4 py-3 text-black sm:flex sm:items-center sm:justify-center sm:gap-6 sm:px-6 lg:px-8"
>
  

  <div>

    <SocialIcons/>
  </div>
  <p className="flex items-center text-sm font-medium sm:text-left gap-2">
    <AdressPin/>
    Sanayi Mh. 60363 Cd. No: 38 Şehitkamil / Gaziantep


  </p>
  <p className="flex items-center text-sm font-medium sm:text-left gap-2">
    <Phone/>
  +90 342 218 02 02
  </p>
  <p className="flex items-center text-sm font-medium sm:text-left gap-2">
    <Mail/>
  satis@odaksan.com
  </p>
  
</div>
  )
}

export default ContactLine