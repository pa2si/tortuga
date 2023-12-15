'use client';

import Program from './Program';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickComp = ({ fetchedData }) => {
  const { program_cards } = fetchedData;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 641, //max width
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {program_cards.map((program) => {
        return <Program key={program._uid} {...program} />;
      })}
    </Slider>
  );
};
export default SlickComp;