import Image from 'next/image';
import { useGlobalContext } from '@/utils/context';

const Event = ({
  image,
  alt,
  copyright,
  title,
  description,
  date,
  location,
  address,
  postal,
  city,
  eventLink,
}) => {
  const { openModal } = useGlobalContext();
  return (
    <div className="flex flex-col max-w-sm max-h-screen bg-white shadow-lg rounded overflow-hidden mx-auto">
      <div className="relative w-full h-[15rem] shadow-lg">
        <Image
          src={image}
          alt={alt}
          priority={true}
          fill={true}
          sizes="30vw"
          className="object-cover  absolute"
        />
      </div>
      <span className="inline-block rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {copyright}
      </span>
      <div className="flex-grow px-6 py-4">
        <p className=" text-3xl mb-2">{title}</p>
        <div className="">
          <p className="text-gray-700 leading-5">Date: {date}</p>
          <p className="text-gray-700 leading-5">Location: {location}</p>
          <p className="text-gray-700 leading-5">City: {city}</p>
          <p className="text-gray-700 leading-5">Address: {address}</p>
          <p className="text-gray-700 leading-5">Postal Code: {postal}</p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center">
        <button
          className="bg-tortuga-dark hover:bg-tortuga-light text-white font-bold py-2 px-4 rounded transition-all duration-200 ease-in-out"
          onClick={() =>
            openModal({
              image,
              alt,
              copyright,
              date,
              location,
              city,
              address,
              postal,
              description,
              eventLink,
              title,
            })
          }
        >
          More Info
        </button>
      </div>
    </div>
  );
};
export default Event;
