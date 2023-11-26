'use client';

import Program from './Program';
import { programList } from './data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Programs = () => {
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
        breakpoint: 1024, // Width up to 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600, // Width up to 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can add more breakpoints as needed
    ],
  };

  return (
    <section className="max-h-content w-max-7xl justify-center items-center m-20">
      <h2 className="text-5xl font-tortuga">Programs</h2>
      <Slider {...settings}>
        {programList.map((program) => {
          return <Program key={program.id} {...program} />;
        })}
      </Slider>
    </section>
  );
};
export default Programs;
