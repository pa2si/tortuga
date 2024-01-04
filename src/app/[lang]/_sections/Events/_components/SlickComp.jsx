'use client';

import Slider from 'react-slick';
import Event from './Event';

const SlickComp = ({ fetchedData }) => {
  const { event_cards } = fetchedData;

  // Filter out past events and sort by date_sort
  const futureEvents = event_cards
    .filter((event) => new Date(event.date_sort) >= new Date())
    .sort((a, b) => new Date(a.date_sort) - new Date(b.date_sort));

  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    // centerPadding: '60px',

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
        breakpoint: 960,
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
      {futureEvents.map((event) => (
        <Event key={event._uid} {...event} />
      ))}
    </Slider>
  );
};

export default SlickComp;
