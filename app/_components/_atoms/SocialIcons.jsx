import { Facebook, Instagram, Linkedin, Pinterest, Youtube } from './Icons'
import Link from 'next/link'

const SocialIcons = () => {
  return (
    <div className='flex'>

      <Link href='https://www.youtube.com/@odaksanmuhendislik3792' target='_blank'>
        <Youtube/>
      </Link>
      <Link href='https://www.instagram.com/odaksan_muhendislik/' target='_blank'>
        <Instagram/>
      </Link>
      <Link href='https://www.facebook.com/Odaksan' target='_blank'>
        <Facebook/>

      </Link>
      <Link href='https://www.linkedin.com/company/odaksan/' target='_blank'>
        <Linkedin/>
       </Link>
      <Link href='https://tr.pinterest.com/odaksanm/' target='_blank'>
        <Pinterest/>
      </Link>
      
    
    </div>
  )
}

export default SocialIcons