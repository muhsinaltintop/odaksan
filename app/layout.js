import { SpeedInsights } from '@vercel/speed-insights/next';
import localFont from "next/font/local";
import "./globals.css";
import Announcement from "./_components/_atoms/Announcement";
import ContactLine from "./_components/ContactLine";
import Header from "./_components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Streç Makinesi - Odaksan Palet Streç Makinesi",
  description: "Odaksan Mühendislik Olarak Tam 13 Yıldır Palet Streçleme Makineleri Üretiyoruz.",
  openGraph: {
    title: "Streç Makinesi - Odaksan Palet Streç Makinesi",
    description: "Odaksan Mühendislik Olarak Tam 13 Yıldır Palet Streçleme Makineleri Üretiyoruz.",
    url: "https://odaksan.vercel.app/",
    images: [
      {
        url: "https://odaksan.vercel.app/logo.svg",
        width: 600,
        height: 600,
        alt: "Odaksan Mühendislik Logo",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odaksan Mühendislik A.Ş.",
    description: "Odaksan Mühendislik Olarak Tam 13 Yıldır Palet Streçleme Makineleri Üretiyoruz.",
    images: ["https://odaksan.vercel.app/logo.svg"],
  },
  icons: {
    icon: "/favicon.ico", // Path to your favicon
    sizes: "32x32",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <div><Announcement/></div>
        <div className='hidden min-[950px]:block'><ContactLine/></div>
        <div><Header/></div>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
