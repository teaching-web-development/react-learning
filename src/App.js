import './App.scss';
import test01 from './images/test01.jpg';
import svgIconHome from './images/svgTest.svg';

function App() {
  const snglUrl = 'https://i.pinimg.com/originals/7f/2f/33/7f2f334beb59716b93cc57fec91e5ac7.jpg';
  const urlImg = {
    name: 'ful-Img',
    url: 'https://i.pinimg.com/originals/7f/2f/33/7f2f334beb59716b93cc57fec91e5ac7.jpg'
  };


  return (
    <div className="parent container">
      <h1 className='test'>Hello <span>World!</span></h1>
      <h1 className='test2'>Hello <span>World!</span></h1>

      {/* img/any, svg, url, gif */}

      {/* url */}
      <img width="200px" src="https://c4.wallpaperflare.com/wallpaper/869/704/848/flower-beauty-bg-blur-wallpaper-preview.jpg" alt="" />
      <br /> <br />
      <span>Single Variable</span>
      <img width="200px" src={snglUrl} alt="2nd Img" />
      <br /> <br />
      <img width="200px" src={urlImg.url} alt={urlImg.name} />
      <br /> <br />
      <span>Local File</span>
      <img width="200px" src={test01} alt="2nd Img" />
      <span>Public folder File</span>
      <img width="200px" src="/logo192.png" alt="2nd Img" />
      <br /> <br />
      <span>Gif File</span>
      <img width="200px" src="https://i.pinimg.com/originals/a2/dc/96/a2dc9668f2cf170fe3efeb263128b0e7.gif" alt="2nd Img" />

      <br /> <br />
      <span>Gif File</span>
      <img width="200px" src={svgIconHome} alt="" />

      <div className='svg-parent'>
        <h2>Svg Test</h2>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" stroke='currentColor' fill='currentColor'>
          <g><path d="M977.6,491.7l0.1-0.1L806.2,320.2V186.1c0-25.4-20.6-45.9-45.9-45.9c-25.4,0-45.9,20.6-45.9,45.9v42.2L533.6,47.6l0,0c-7.3-7.8-17.3-13.1-28.6-14.3c0,0-0.1,0-0.1,0c-0.7-0.1-1.4-0.1-2.1-0.2c-0.1,0-0.3,0-0.4,0c-0.8,0-1.6-0.1-2.4-0.1c0,0,0,0,0,0c-13,0-24.8,5.4-33.1,14.1L24.1,489.9C15.4,498.2,10,510,10,523c0,25.4,20.6,45.9,45.9,45.9c12.6,0,24-5.1,32.3-13.2l0,0L500,143.9v0l1.2,1.1l0,0l411.5,411.5l0.1-0.1c8.2,7.6,19.1,12.4,31.2,12.4c25.4,0,45.9-20.6,45.9-45.9C990,510.9,985.2,499.9,977.6,491.7z" /><path d="M101.9,599.5v137.8v61.2v122.5c0,25.4,20.6,45.9,45.9,45.9h428.8V599.5h183.7V967h91.9c25.4,0,45.9-20.6,45.9-45.9V798.6v-61.2V599.5L500,201.4L101.9,599.5z M423.4,783.3H239.7V599.5h183.8L423.4,783.3L423.4,783.3z" /></g>
        </svg>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-to-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="14" y1="12" x2="4" y2="12" />
        <line x1="14" y1="12" x2="10" y2="16" />
        <line x1="14" y1="12" x2="10" y2="8" />
        <line x1="20" y1="4" x2="20" y2="20" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cookie" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 13v.01" />
        <path d="M12 17v.01" />
        <path d="M12 12v.01" />
        <path d="M16 14v.01" />
        <path d="M11 8v.01" />
        <path d="M13.148 3.476l2.667 1.104a4 4 0 0 0 4.656 6.14l.053 .132a3 3 0 0 1 0 2.296c-.497 .786 -.838 1.404 -1.024 1.852c-.189 .456 -.409 1.194 -.66 2.216a3 3 0 0 1 -1.624 1.623c-1.048 .263 -1.787 .483 -2.216 .661c-.475 .197 -1.092 .538 -1.852 1.024a3 3 0 0 1 -2.296 0c-.802 -.503 -1.419 -.844 -1.852 -1.024c-.471 -.195 -1.21 -.415 -2.216 -.66a3 3 0 0 1 -1.623 -1.624c-.265 -1.052 -.485 -1.79 -.661 -2.216c-.198 -.479 -.54 -1.096 -1.024 -1.852a3 3 0 0 1 0 -2.296c.48 -.744 .82 -1.361 1.024 -1.852c.171 -.413 .391 -1.152 .66 -2.216a3 3 0 0 1 1.624 -1.623c1.032 -.256 1.77 -.476 2.216 -.661c.458 -.19 1.075 -.531 1.852 -1.024a3 3 0 0 1 2.296 0z" />
      </svg>

    </div>
  );
}

export default App;
