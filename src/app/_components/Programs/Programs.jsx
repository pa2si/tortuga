'use client';

import Program from './_components/Program';
import { programList } from './data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Programs = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="bg-slate-950  text-white overflow-auto">
      <div className="lg:max-w-5xl xl:max-w-screen-2xl mx-auto py-16 slider-light">
        <div className="max-w-7xl mx-auto">
          <h2 className=" px-4 xl:px-0 font-bold text-3xl" id="programs">
            Programs
          </h2>
        </div>
        <Slider {...settings}>
          {programList.map((program) => {
            return <Program key={program.id} {...program} />;
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Programs;
