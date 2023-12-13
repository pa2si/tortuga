import Link from 'next/link';
import EventImage from './_components/EventImage';
import { getFetchData } from '@/utils/fetchingData';

const SingleEvent = async ({ params }) => {
  const lang = params.lang;
  const storyData = await getFetchData(lang);

  const events = storyData.events_section.event_cards;
  const backButton = storyData.single_event_section.single_event_back_btn;
  const bg = storyData.single_event_section.bg;

  // Find the specific event by matching the UID from params.id
  const selectedEvent = events.find((event) => event._uid === params.id);

  if (!selectedEvent) {
    console.error('Error: Event not found for id:', params.id);
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        oops...No event found
      </div>
    );
  }

  return (
    <article
      className="min-h-screen min-w-screen flex items-center justify-center "
      style={{
        backgroundImage: `linear-gradient(to right, rgba(210, 210, 210, 0.4), rgba(170, 170, 170, 0.25), rgba(210, 210, 210, 0.45)), url(${bg.filename})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-6xl max-h-content mx-4 sm:m-auto p-3 pb-8  md:p-8 bg-white bg-opacity-95 rounded-xl shadow-lg">
        <div className=" w-full flex flex-col justify-center items-center">
          {/* Title */}
          <div className="flex flex-col items-center mb-4 ">
            <h5 className="text-4xl mb-2 mt-4 font-kalam">
              {selectedEvent.title}
            </h5>
            <div className="relative w-full h-1 mt-1 sm:mt-4 md:mt-1">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tortuga-light to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-8 lg:ml-20  ">
            <div className="mb-8 lg:mb-0 order-2 lg:order-1 ">
              <p className="font-poorStory text-gray-700 text-[1.4rem] leading-7 md:text-2xl ">
                {selectedEvent.description}
              </p>
            </div>
            <div className="mx-auto mb-2 order-1 lg:order-2 ">
              <EventImage imageData={selectedEvent.image} />
              <div className="grid grid-cols-2 text-gray-600  text-abhayaLibre ">
                <div className="text-gray-800">
                  <p>Date: {selectedEvent.date}</p>
                  <p>Location: {selectedEvent.location}</p>
                </div>
                <div className="text-right">
                  <p>City: {selectedEvent.city}</p>
                  <p>Address: {selectedEvent.address}</p>
                  <p>Postal Code: {selectedEvent.postal}</p>
                </div>
              </div>
            </div>
          </div>
          <Link
            href={'/all-events'}
            className="mt-4 sm:mt-8 text-md sm:text-lg text-tortuga-dark hover:text-tortuga-light border-2 border-tortuga-dark hover:border-tortuga-light font-kalam py-1 px-8 rounded transition-all duration-200 ease-in-out"
          >
            {' '}
            {backButton}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SingleEvent;
