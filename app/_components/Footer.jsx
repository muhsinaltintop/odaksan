import Image from 'next/image'
import React from 'react'
import SocialIcons from './_atoms/SocialIcons'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-slate-100 px-20">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-8 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="text-teal-600">
          <Image src={"/logo.svg"} width="200" height="100" alt='Odaksan Logo'/>
        </div>

        <p className="mt-4 max-w-xs text-gray-500">
          satis@odaksan.com | +90 342 218 02 02
        </p>

        <div className='mt-2'><SocialIcons/></div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:col-span-2 lg:grid-cols-3">
        <div>
          <p className="font-medium text-gray-900">Streçleme Makineleri</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Mobil Streçleme Makineleri </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Tablalı Streçleme Makineleri </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Döner Kollu Streçleme Makineleri </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Hat Tipi Streçleme Makineleri </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Odaksan Mühendislik A.Ş.</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="#" className="text-gray-700 transition hover:opacity-75"> Kurumsal </Link>
            </li>

            <li>
              <Link href="#" className="text-gray-700 transition hover:opacity-75"> Hizmetler </Link>
            </li>

            <li>
              <Link href="#" className="text-gray-700 transition hover:opacity-75"> Referanslar </Link>
            </li>
            <li>
            <Link href="#" className="text-gray-700 transition hover:opacity-75"> İletişim </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Yasal Linkler</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> KVKK ve Aydınlatma Metni </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Gizlilik ve Çerez Politikası </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Çerez Tercihleri </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
          <p className="font-bold text-gray-900">Blog</p>

          <ul className="grid gap-2 grid-cols-1 mt-6 text-sm md:grid-cols-2 lg:grid-cols-4">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Blog 1 </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Blog 2 </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Blog 3 </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Blog 4 </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Blog 1 </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Blog 2 </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Blog 3 </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Blog 4 </a>
            </li>
          </ul>
        </div>
     

    <p className="text-xs text-gray-500">&copy; 2024. Odaksan Mühendislik A.Ş. Bütün hakları saklıdır.</p>
  </div>
</footer>
  )
}

export default Footer