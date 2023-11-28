'use client';

import Program from './_components/Program';
import { programList } from './data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

const Programs = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 640, //max width
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="relative bg-slate-950 max-h-max text-white overflow-auto">
      <div className=" max-w-md sm:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto py-10 slider-light">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl lg:text-5xl text-white font-title underline underline-offset-4 my-2 sm:my-8 flex justify-center"
            id="programs"
          >
            Programs
          </h2>
        </div>
        <Slider {...settings}>
          {programList.map((program) => {
            return <Program key={program.id} {...program} />;
          })}
        </Slider>
      </div>
      <div className="flex mb-4 font-title text-xl text-white absolute bottom-0 left-1/2 transform -translate-x-1/2 visible sm:hidden">
        <MdArrowBackIos />
        <p>slide for more</p>
        <MdArrowForwardIos />
      </div>
    </section>
  );
};
export default Programs;
