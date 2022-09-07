import React from 'react';
import './App.scss';
import About from './components/About/About';
import Carousel from './components/Carousel/Carousel';
import MaiNav from './components/MainNav/MaiNav';

const App = () => {
  // carousel previous arrow icon on the left position
  const PrevArrow = ({ onClick }) => {
    return (
      <div className={`${'btn'} ${'prevBtn'}`} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
      </div>
    );
  };
  const PrevArrow1 = ({ onClick }) => {
    return (
      <div className={`${'btn'} ${'prevBtn'}`} onClick={onClick}>
        Prev
      </div>
    );
  };
  const fakeData = [
    { name: 'Img 01', url: 'https://wallpaperaccess.com/full/3296476.jpg' },
    { name: 'Img 02', url: 'https://wallpapercave.com/wp/wp3240802.jpg' },
    { name: 'Img 03', url: 'https://wallpaperaccess.com/full/3296476.jpg' },
    { name: 'Img 04', url: 'https://wallpapercave.com/wp/wp3240802.jpg' },
    { name: 'Img 05', url: 'https://wallpaperaccess.com/full/3296476.jpg' },
    { name: 'Img 06', url: 'https://wallpapercave.com/wp/wp3240802.jpg' },
  ]
  const fakeData1 = [
    { name: 'Img 01', url: 'https://wallpaperaccess.com/full/3050941.jpg' },
    { name: 'Img 02', url: 'https://wallpaperaccess.com/full/284553.jpg' },
    { name: 'Img 03', url: 'https://wallpaperaccess.com/full/3296476.jpg' },
    { name: 'Img 04', url: 'https://wallpapercave.com/wp/wp3240802.jpg' },
    { name: 'Img 05', url: 'https://wallpaperaccess.com/full/284553.jpg' },
    { name: 'Img 06', url: 'https://wallpapercave.com/wp/wp3240802.jpg' },
  ]

  const testRes = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ]
  return (
    <div>
      <MaiNav />
      <Carousel dataArr={fakeData} responsive={testRes} arrow PrevArrow={<PrevArrow />} />
      <Carousel dataArr={fakeData1} responsive={testRes} arrow dots PrevArrow={<PrevArrow1 />} />
      <About />
    </div>
  );
};

export default App;