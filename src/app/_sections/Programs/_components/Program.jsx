import Image from 'next/image';
import InView from './InView';
import { MotionArticle } from '@/utils/MotionDiv';

const Program = ({ title, image, alt, description1, description2 }) => {
  const slideIn = {
    initial: {
      opacity: 0,
    },
    animate: () => ({
      opacity: 1,

      transition: {
        duration: 1,
      },
    }),
  };
  return (
    <>
      <MotionArticle
        className="grid xl:grid-cols-2 grid-cols-1 bg-white py-4 px-2 sm:p-8 border-2 shadow-xl rounded-xl program-margin"
        variants={slideIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Program Description */}
        <div className="font-poorStory flex flex-col justify-center order-last xl:order-first">
          <h3 className="text-2xl font-bold md:text-3xl xl:text-4xl mb-8 font-kalam ">
            {title}
          </h3>
          <div className="text-gray-700 text-2xl sm:text-[1.65rem] md:text-3xl  sm:text-justify lg:text-left">
            <p className="leading-8 md:leading-9 xl:leading-10">
              {description1}
              <br />
              {description2}
            </p>
          </div>
        </div>
        {/* Program Image */}
        <div className="relative flex justify-center items-center w-full h-[14rem] mx-auto mb-20 sm:h-[18rem] xl:w-5/6 lg:h-[26rem] xl:mb-0 xl:mt-12 xl:mx-0 xl:ml-16 order-first xl:order-last">
          <Image
            src={image}
            alt={alt}
            priority={true}
            fill
            sizes="(max-width: 768px) 80vw, 33vw"
            className="object-cover rounded-lg shadow-lg "
          />
        </div>
      </MotionArticle>
      <InView />
    </>
  );
};
export default Program;
