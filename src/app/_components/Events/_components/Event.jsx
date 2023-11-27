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
    <div className="max-w-sm bg-white shadow-lg rounded overflow-hidden mx-auto ">
      <div className="relative w-full h-[18rem] shadow-lg">
        <Image
          src={image}
          alt={alt}
          priority={true}
          fill={true}
          sizes="30vw"
          className="object-contain absolute"
        />
      </div>
      <span className="inline-block rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {copyright}
      </span>
      <div className="px-6 py-4">
        <div className=" text-4xl mb-2">{title}</div>

        <p className="text-gray-700 text-base">Date: {date}</p>
        <p className="text-gray-700 text-base">Location: {location}</p>
        <p className="text-gray-700 text-base">City: {city}</p>
        <p className="text-gray-700 text-base">Address: {address}</p>
        <p className="text-gray-700 text-base">Postal Code: {postal}</p>
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
