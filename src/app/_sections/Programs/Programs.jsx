import SlickComp from './_components/SlickComp';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import Title from '@/utils/Titles/Title';
import { titleList } from '@/utils/Titles/TitleList';

const Programs = () => {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/images/hintergrund1-bearbeitet.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <section
        className="relative max-h-max text-black overflow-auto bg-slate-300 bg-opacity-10 "
        id="programs"
      >
        <div className=" my-10 pt-8 pb-12 sm:mx-8 max-w-6xl xl:mx-auto lg:py-12 lg:px-16 xl:px-0 bg-white bg-opacity-90 rounded-xl slider-programs">
          <div className=" w-full flex justify-center items-center ">
            <Title text={titleList.programs} />
          </div>
          <SlickComp />
        </div>
        <div className="flex mb-1 font-title text-xl absolute bottom-24 left-1/2 transform -translate-x-1/2 visible sm:hidden">
          <MdArrowBackIos />
          <p>slide for more</p>
          <MdArrowForwardIos />
        </div>
      </section>
    </div>
  );
};
export default Programs;
