import SlickComp from './_components/SlickComp';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import InView from './_components/InView';
import Link from 'next/link';

const Events = ({ fetchedData }) => {
  const { title, gallery_view_btn, slider_text, bg } = fetchedData;

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(to right, rgba(210, 210, 210, 0.45), rgba(0, 0, 0, 0.4), rgba(210, 210, 210, 0.45)), url(${bg.filename})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="relative mx-4 max-h-max overflow-auto bg-gray-100 bg-opacity-0 sm:mx-0 sm:bg-opacity-5 rounded-lg"
        id="events"
      >
        <div className="my-10 pt-8 pb-36 sm:mx-8 max-w-6xl xl:mx-auto lg:pt-12 lg:pb-36 lg:px-16 bg-white bg-opacity-95 rounded-xl slider-events">
          {/* Title */}
          <div className=" w-full flex flex-col justify-center items-center md:mb-8 xl:mb-0">
            <div className="flex flex-col items-center">
              <h2 className="font-title text-black text-center">{title}</h2>
              <div className="relative w-full h-1 mt-7 sm:mt-4 md:mt-1">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tortuga-light to-transparent"></div>
              </div>
            </div>
          </div>
          <SlickComp fetchedData={fetchedData} />
          <InView />
          <div className="flex mb-1 font-title text-xl absolute bottom-48 left-1/2 transform -translate-x-1/2 visible md:hidden">
            <MdArrowBackIos />
            <p>{slider_text}</p>
            <MdArrowForwardIos />
          </div>
          <button className=" flex mb-1 text-xl absolute bottom-20 left-1/2 transform -translate-x-1/2 hover:text-tortuga-light text-tortuga-dark border-2 border-tortuga-dark hover:border-tortuga-light font-kalam py-1 px-8 sm:px-12 rounded transition-all duration-200 ease-in-out">
            <Link href={'/all-events'}>{gallery_view_btn}</Link>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Events;
