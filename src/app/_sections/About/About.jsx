import Title from '@/utils/Titles/Title';
import { titleList } from '@/utils/Titles/TitleList';
import Image from 'next/image';
import { aboutData } from './data';
import InView from './_components/InView';

const About = () => {
  const { image, alt, copyright, description } = aboutData;

  return (
    <section
      style={{
        backgroundImage: 'url(/images/bg-tortuga-about.webp)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="relative max-h-max text-slate-50 overflow-auto  bg-gray-300 bg-opacity-50"
        id="about"
      >
        <div className="my-10 sm:mx-8 max-w-6xl xl:mx-auto pt-8 pb-1 lg:py-12 lg:px-16 bg-white bg-opacity-95 rounded-xl">
          <div className=" flex justify-center items-center gap-4">
            {/* Title */}
            <Title text={titleList.about} />
            <Image
              src="/logos/tortuga-logo.webp"
              alt="tortuga logo"
              priority={true}
              width={100}
              height={80}
              className=" w-[100px] lg:w-[110px] md:mb-5"
              style={{ height: 'auto' }}
            />
          </div>
          {/* About Description */}
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:items-center text-slate-900 mt-8 mb-12 lg:mb-8  ">
            <div className="col-span-3 px-4 sm:px-8  text-xl sm:text-2xl text-justify lg:px-0 lg:text-left order-last lg:order-first ">
              <p className="text-gray-800 font-poorStory leading-8 sm:leading-9 lg:leading-9 tracking-wide">
                {description}
              </p>
              <InView />
            </div>
            {/* Image  */}
            <div className="col-span-2 flex flex-col justify-center items-center lg:ml-36 order-first lg:order-last">
              <Image
                src={image}
                alt={alt}
                priority={true}
                width={150}
                height={250}
                className=" mx-auto h-3/5 lg:h-full drop-shadow-lg rounded-xl "
              />
              <p className="mt-2 ">{copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
