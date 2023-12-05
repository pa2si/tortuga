import SlickComp from './_components/SlickComp';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import Title from '@/utils/Titles/Title';
import { titleList } from '@/utils/Titles/TitleList';

const Programs = () => {
  return (
    <section
      style={{
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/images/bg-tortuga-programs.webp)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="relative max-h-max text-black overflow-auto bg-slate-300 bg-opacity-10 "
        id="programs"
      >
        <div className=" my-10 pt-8 pb-12 sm:mx-8 max-w-6xl xl:mx-auto lg:py-12 lg:px-16 xl:px-0 bg-white bg-opacity-95 rounded-xl slider-programs">
          {/* Title */}
          <div className=" w-full flex justify-center items-center ">
            <div className="flex flex-col items-center">
              <h2 className="font-title text-black text-center">Program</h2>
              <div className="relative w-full h-1 mt-8 sm:mt-4 md:mt-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tortuga-light to-transparent"></div>
              </div>
            </div>
          </div>
          <SlickComp />
        </div>
        {/* Paragraph only on mobile view */}
        <div className="flex mb-1 font-title text-xl absolute bottom-24 left-1/2 transform -translate-x-1/2 visible sm:hidden">
          <MdArrowBackIos />
          <p>slide for more</p>
          <MdArrowForwardIos />
        </div>
      </div>
    </section>
  );
};
export default Programs;
