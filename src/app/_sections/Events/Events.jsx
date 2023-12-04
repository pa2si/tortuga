import Title from '@/utils/Titles/Title';
import { titleList } from '@/utils/Titles/TitleList';
import SlickComp from './_components/SlickComp';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import InView from './_components/InView';

const Events = () => {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/images/bg-tortuga-events.webp)',
        /*      backgroundAttachment: 'fixed', */
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <section
        className="relative max-h-max overflow-auto bg-gray-100 bg-opacity-5"
        id="events"
      >
        <div className="my-10 pt-8 pb-12 sm:mx-8 max-w-6xl xl:mx-auto lg:py-12 lg:px-16 bg-white bg-opacity-95 rounded-xl slider-events">
          <div className=" w-full flex flex-col justify-center items-center">
            <Title text={titleList.events} />
          </div>

          <SlickComp />
          <InView />
          <div className="flex mb-1 font-title text-xl absolute bottom-24 left-1/2 transform -translate-x-1/2 visible sm:hidden">
            <MdArrowBackIos />
            <p>slide for more</p>
            <MdArrowForwardIos />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Events;
