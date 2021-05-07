import React from 'react';
import '../assets/css/Banner.css';

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: 'url("https://apod.nasa.gov/apod/image/1004/NGC1055_crawford950.jpg")',
        backgroundPosition: 'center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          Welcome to AstroSplash
        </h1>
      </div>
      <div className="banner__fadeBottom" />

    </header>
  );
}

export default Banner;
