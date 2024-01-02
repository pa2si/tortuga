import Image from 'next/image';
import InView from './InView';
import { MotionArticle } from '@/utils/MotionDiv';

const Program = ({ title, image, description1, description2, date }) => {
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
        className="grid grid-cols-1 bg-white border-2 xl:p-8 drop-shadow-2xl rounded-xl xl:px-2 xl:py-4 xl:grid-cols-2 program-margin"
        variants={slideIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Program Description */}
        <div className="font-text flex flex-col p-4 xl:p-0 justify-center order-last xl:order-first">
          <h3 className="font-bold text-3xl xl:text-4xl mb-8 font-kalam  xl:pl-2">
            {title}
          </h3>
          <div className="text-gray-700 text-xl sm:text-[1.65rem] md:text-2xl sm:text-justify lg:text-left xl:pl-2">
            <p className="leading-8 md:leading-9 xl:leading-10">
              {description1}
              <br />
              {description2}
            </p>
          </div>
        </div>
        {/* Program Image */}
        <div className="relative flex justify-center items-center w-full h-[14rem] mx-auto mb-20 sm:h-[18rem] md:h-[22rem] lg:h-[26rem] xl:w-5/6  xl:mb-0 xl:place-self-center xl:mx-0 xl:ml-16 order-first xl:order-last">
          <Image
            src={image.filename}
            alt={image.alt}
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
