import Link from "next/link"
import { HomeIcon, TurkeyFlag, UkFlag } from "./_atoms/Icons"
import Image from "next/image"

const Header = () => {
  return (
    <header className="bg-white border">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <Link className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
         <Image src={"/logo.svg"} width="200" height="50" alt="Odaksan Logo"/>
        </Link>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden min-[950px]:block">
          <ul className="flex items-center gap-4 text-sm">
           
            <li className="-mr-2 ml-2">
            <Link className=" text-gray-500 transition hover:text-gray-500/75" href="/"><HomeIcon /></Link>
    
            </li>
            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/hakkimda"> Kurumsal </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/urunler"> Ürünler </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/hizmetler"> Hizmetler </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/referanslar"> Referanslar </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/yorumlar"> Yorumlar </Link>
            </li>

            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/blog"> Blog </Link>
            </li>
            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/galeri"> Galeri </Link>
            </li>
            <li>
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/e-katalog"> E-Katalog </Link>
            </li>
            <li className="-mr-6">
              <Link className="text-gray-500 transition hover:text-gray-500/75" href="/iletisim"> İletişim </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-2 items-center">
          <div className="hidden min-[950px]:flex text-3xl">
           |
           </div>  
          <div className="hidden min-[950px]:flex">
           <TurkeyFlag/>
           </div>

            <div className="hidden min-[950px]:flex">
           <UkFlag/>
            </div>
          </div>

          <div className="block min-[950px]:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header