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
    centerMode: true,
    centerPadding: '60px',
    // speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // fade: true,
    autoplay: false,
    // autoplaySpeed: 5000,
    // pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="max-w-7xl max-h-screen mx-auto my-10 px-9 xl:px-0 slider-dark ">
      <h2
        className="text-5xl text-tortuga-dark font-title underline underline-offset-4 my-2 sm:my-8 flex justify-center"
        id="events"
      >
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
