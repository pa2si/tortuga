'use client';

import Event from './Event';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickComp = ({ fetchedData }) => {
  const { event_cards } = fetchedData;

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    // speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // fade: true,
    autoplay: false,
    // autoplaySpeed: 5000,
    // pauseOnHover: true,

    responsive: [
      {
        breakpoint: 640, //max width
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {event_cards.map((event) => {
        return <Event key={event._uid} {...event} />;
      })}
    </Slider>
  );
};
export default SlickComp;
