'use client';

import Event from './_components/Event';
import { eventList } from './data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

const Events = () => {
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
    <section className="relative max-w-7xl max-h-screen mx-auto my-10 px-9 xl:px-0 slider-dark ">
      <h2
        className="text-4xl lg:text-5xl text-tortuga-dark font-title underline underline-offset-4 sm:my-8 flex justify-center"
        id="events"
      >
        Events
      </h2>
      <Slider {...settings}>
        {eventList.map((event) => {
          return <Event key={event.id} {...event} />;
        })}
      </Slider>

      <div className="flex mb-1 font-title text-xl absolute bottom-0 left-1/2 transform -translate-x-1/2 visible sm:hidden">
        <MdArrowBackIos />
        <p>slide for more</p>
        <MdArrowForwardIos />
      </div>
    </section>
  );
};
export default Events;
