'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Event from './Event';

const SlickComp = ({ fetchedData }) => {
  const { event_cards } = fetchedData;
  const [extraSlidesCount, setExtraSlidesCount] = useState(0);

  useEffect(() => {
    const updateExtraSlides = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setExtraSlidesCount(0); // For mobile, assuming slidesToShow will be 1
      } else if (width < 960) {
        setExtraSlidesCount(0); // For tablet, assuming slidesToShow will be 2
      } else {
        setExtraSlidesCount(2); // For desktop, assuming slidesToShow will be 3
      }
    };

    updateExtraSlides();
    window.addEventListener('resize', updateExtraSlides);

    return () => window.removeEventListener('resize', updateExtraSlides);
  }, []);

  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
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
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  const adjustedEventCards = [
    ...event_cards,
    ...Array(extraSlidesCount).fill({}),
  ];

  return (
    <Slider {...settings}>
      {adjustedEventCards.map((event, index) =>
        event._uid ? (
          <Event key={event._uid} {...event} />
        ) : (
          <div key={`empty-${index}`} className="empty-slide" />
        )
      )}
    </Slider>
  );
};
export default SlickComp;
