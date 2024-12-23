"use client"
import React, { useState } from 'react';
import SideMenu from '../_components/_atoms/SideMenu';
import { AboutOdaksan, Mission, Production, Quality, Vision } from './Content';


const Page = () => {
  // Aktif içeriği tutacak state
  const [activeContent, setActiveContent] = useState('home');

  // Menü öğelerine tıklanınca çalışacak fonksiyon
  const handleMenuClick = (content) => {
    setActiveContent(content);
  };

  // Dinamik olarak gösterilecek içerik
  const renderContent = () => {
    switch (activeContent) {
      case 'odaksan':
        return <AboutOdaksan/>;
      case 'vision':
        return <Vision/>;
      case 'mission':
        return <Mission/>;
      case 'quality':
        return <Quality/>;
      case 'production':
        return <Production/>;
      default:
        return <AboutOdaksan/>;
    }
  };

  return (
    <div className="flex mx-10 md:h-screen">
      {/* Sol Menü */}
      <SideMenu variation="about" onMenuClick={handleMenuClick} />

      {/* Sağ Taraf Dinamik İçerik */}
      <div className="flex-1 md:p-10">
        {renderContent()}
      </div>
    </div>
  );
};

export default Page;
