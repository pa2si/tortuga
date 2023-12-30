import Image from 'next/image';
import { useGlobalContext } from '@/utils/context';
import { MotionArticle } from '@/utils/MotionDiv';

const Event = ({
  title,
  image,
  description,
  description2,
  date,
  location,
  address,
  postal,
  city,
  event_link,
  btn_text,
  fb_logo,
}) => {
  const slideIn = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: () => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    }),
  };

  const { openModal } = useGlobalContext();
  return (
    <MotionArticle
      className="flex flex-col max-w-sm max-h-screen xl:my-10 xl:h-[37rem] 2xl:h-[40rem] md:mb-4 bg-white shadow-xl rounded overflow-hidden mx-auto "
      variants={slideIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="relative w-full h-[18rem] shadow-lg">
        <Image
          src={image.filename}
          alt={image.alt}
          priority={true}
          fill={true}
          sizes="30vw"
          className="object-cover absolute"
        />
      </div>
      <span className="inline-block rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {image.copyright}
      </span>
      <div className="flex-grow px-6 py-4">
        <h3 className="text-4xl xl:text-4xl mb-4 font-kalam">{title}</h3>
        <div className="text-[1.4rem] md:text-[1.4rem] leading-6 lg:text-[1.2rem]">
          <p className="text-gray-800 text-2xl mb-2">{date}</p>
          <p className="text-gray-700 mb-1">{city}</p>
          <p className="text-gray-700 mb-1">{location}</p>
          <p className="text-gray-700 mb-1">
            {address}, {postal}
          </p>
          <p className="text-gray-700"></p>
        </div>
      </div>

      <div className="px-6 pt-4 pb-2 flex justify-center lg:text-xl">
        <button
          className="bg-tortuga-dark hover:bg-tortuga-light text-white font-kalam py-2 px-4 rounded transition-all duration-200 ease-in-out"
          onClick={() =>
            openModal({
              image,
              date,
              location,
              city,
              address,
              postal,
              description,
              description2,
              event_link,
              title,
              fb_logo,
            })
          }
        >
          {btn_text}
        </button>
      </div>
    </MotionArticle>
  );
};
export default Event;
