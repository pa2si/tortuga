import { eventList } from '@/app/_sections/Events/data';

import Link from 'next/link';

import EventImage from './_components/EventImage';

const SingleEvent = ({ params }) => {
  const { id } = params;
  const event = eventList.find((event) => event.id === parseInt(id, 10));

  const buttonText = 'back to all events';

  return (
    <article
      className="min-h-screen min-w-screen flex items-center "
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(210, 210, 210, 0.4), rgba(170, 170, 170, 0.25), rgba(210, 210, 210, 0.45)), url(/images/bg-tortuga-events.webp)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-6xl max-h-content m-auto mt-20 sm:my-auto mx-4 p-3 pb-8 sm:mx-8 xl:mx-auto md:p-8 bg-white bg-opacity-95 rounded-xl ">
        <div className=" w-full flex flex-col justify-center items-center">
          {/* Title */}
          <div className="flex flex-col items-center mb-4 ">
            <h5 className="text-4xl mb-2 mt-4 font-kalam">{event.title}</h5>
            <div className="relative w-full h-1 mt-1 sm:mt-4 md:mt-1">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tortuga-light to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-8 lg:ml-20  ">
            <div className="mb-8 lg:mb-0 order-2 lg:order-1 ">
              <p className="font-poorStory text-gray-700 text-[1.4rem] leading-7 md:text-2xl ">
                {event.description}
              </p>
            </div>
            <div className="mx-auto mb-2 order-1 lg:order-2 ">
              <EventImage id={id} />
              <div className="grid grid-cols-2 text-gray-600  text-abhayaLibre ">
                <div className="text-gray-800">
                  <p>Date: {event.date}</p>
                  <p>Location: {event.location}</p>
                </div>
                <div className="text-right">
                  <p>City: {event.city}</p>
                  <p>Address: {event.address}</p>
                  <p>Postal Code: {event.postal}</p>
                </div>
              </div>
            </div>
          </div>
          <Link
            href={'/all-events'}
            className="mt-4 sm:mt-8 text-md sm:text-lg text-tortuga-dark hover:text-tortuga-light border-2 border-tortuga-dark hover:border-tortuga-light font-kalam py-1 px-8 rounded transition-all duration-200 ease-in-out"
          >
            {' '}
            {buttonText}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SingleEvent;
