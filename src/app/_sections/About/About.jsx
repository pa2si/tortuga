import Title from '@/utils/Titles/Title';
import { titleList } from '@/utils/Titles/TitleList';
import Image from 'next/image';
import { aboutData } from './data';

const About = () => {
  const { image, alt, copyright, description } = aboutData;

  return (
    <div
      style={{
        backgroundImage: 'url(/images/hintergrund4.webp)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <section
        className="relative max-h-max text-slate-50 overflow-auto  bg-slate-200 bg-opacity-70"
        id="about"
      >
        <div className="my-10 sm:mx-8 max-w-6xl xl:mx-auto pt-8 pb-1 lg:py-12 lg:px-16 bg-white bg-opacity-90 rounded-xl">
          <div className=" w-full flex justify-center items-center gap-4">
            <Title text={titleList.about} />
            <Image
              src="/logos/tortuga-logo.webp"
              alt="tortuga logo"
              priority={true}
              width={120}
              height={60}
              className=" w-[100px] lg:w-[120] lg:mb-5"
            />
          </div>
          <article className="grid grid-cols-1 lg:grid-cols-5 lg:items-center text-slate-900 mt-8 mb-12 lg:mb-8  ">
            <section className="col-span-3 px-4 sm:px-8  text-xl sm:text-2xl text-justify lg:px-0 lg:text-left order-last lg:order-first ">
              <p className="text-gray-800 font-poorStory leading-8 sm:leading-9 lg:leading-9 tracking-wide">
                {description}
              </p>
            </section>

            <section className="col-span-2 flex flex-col justify-center items-center lg:ml-36 order-first lg:order-last">
              <Image
                src={image}
                alt={alt}
                priority={true}
                width={250}
                height={250}
                className=" mx-auto h-3/5 lg:h-full drop-shadow-lg rounded-xl "
              />
              <p className="mt-2 ">{copyright}</p>
            </section>
          </article>
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white  z-10"></div> */}
      </section>
    </div>
  );
};
export default About;
