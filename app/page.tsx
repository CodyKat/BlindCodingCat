import React from 'react';
import './globals.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container'>
      {/* Topbar */}
      <div className='topbar'>
        <h1>Blind Coding Cat</h1>
      </div>

      {/* Main Body */}
      <div className='body'>
        <Image className='image'
          src="/codingcat1.webp"
          alt="Placeholder"
          width={800}
          height={600}
        />
        <h2 className='comingSoonText'>Coming soon...</h2>
      </div>

      {/* Footer */}
      <div className='footer'>
        <p>contact : blindcodingcat@gmail.com</p>
      </div>
    </div>
  );
}
