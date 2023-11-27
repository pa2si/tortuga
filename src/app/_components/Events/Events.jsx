'use client';

import Event from './_components/Event';
import { eventList } from './data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Events = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // fade: true,
    autoplay: false,
    // autoplaySpeed: 5000,
    // pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-4xl text-tortuga-dark font-bold underline underline-offset-4 my-8 flex justify-center">
        Events
      </h2>
      <Slider {...settings}>
        {eventList.map((event) => {
          return <Event key={event.id} {...event} />;
        })}
      </Slider>
    </section>
  );
};
export default Events;
