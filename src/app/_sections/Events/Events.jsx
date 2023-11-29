import SlickComp from './_components/SlickComp';
import { MdArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

const Events = () => {
  return (
    <section
      className="relative max-h-max overflow-auto "
      /*         style={{
        backgroundImage: `linear-gradient(to bottom, rgba(62, 81, 81,0.8), rgba(222, 203, 164, 0.9)), url('/images/hintergrund2-bearbeitet.jpg')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}  */
    >
      <div className="max-w-7xl max-h-screen mx-auto my-10 px-9 xl:px-0 slider-dark">
        <h2
          className="text-tortuga-dark font-title underline underline-offset-4 md:my-8 flex justify-center"
          id="events"
        >
          Events
        </h2>
        <SlickComp />

        <div className="flex mb-1 font-title text-xl absolute bottom-0 left-1/2 transform -translate-x-1/2 visible sm:hidden">
          <MdArrowBackIos />
          <p>slide for more</p>
          <MdArrowForwardIos />
        </div>
      </div>
    </section>
  );
};
export default Events;
