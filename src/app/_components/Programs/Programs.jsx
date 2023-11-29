import SlickComp from './_components/SlickComp';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

const Programs = () => {
  return (
    <section className="relative bg-slate-950 max-h-max text-slate-50 overflow-auto">
      <div className=" max-w-md sm:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto py-10 slider-light">
        <div className="max-w-7xl mx-auto">
          <h2
            className=" font-title underline underline-offset-4 my-2 sm:my-8 flex justify-center"
            id="programs"
          >
            Programs
          </h2>
        </div>
        <SlickComp />
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
