import React from 'react';
import Slider from "react-slick";
import './Carousel.scss';

const Header = ({ dataArr, responsive, arrow, dots, PrevArrow }) => {
    // console.log(props);
    // const {dataArr} = props;
    console.log(dataArr);


    // carousel next arrow icon on the right position
    const NextArrow = ({ onClick }) => {
        return (
            <div className={`btn nextBtn`} onClick={onClick}>
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
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>
        );
    };

    const settings = {
        dots: dots,
        infinite: true,
        speed: 500,
        autoplay: true,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: arrow,
        nextArrow: <NextArrow />,
        prevArrow: PrevArrow,
        responsive: responsive,
    };
    return (
        <div className='pt-5' id='CarouselWrapper'>
            <Slider {...settings} className="container">
                {dataArr.map((d, index) => (
                    <div key={index} className="img_parent inline-block">
                        <img
                            style={{ height: "408px", width: "100%" }}
                            className="object-cover"
                            src={d.url}
                            alt={index}
                        />
                        <div className="overlay">
                            <div className="casual common">MEN's CASUAL</div>
                            <div className="browse common">Browse {d.name}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Header;