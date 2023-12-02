import Image from 'next/image';

const Program = ({ title, image, alt, description1, description2 }) => {
  return (
    <article className="grid xl:grid-cols-2 grid-cols-1 bg-white p-4 sm:p-8 border-2 shadow-xl rounded-xl program-margin">
      <section className="font-poorStory flex flex-col justify-center order-last xl:order-first">
        <h3 className="text-2xl font-bold md:text-3xl xl:text-4xl mb-8">
          {title}
        </h3>
        <div className="text-gray-700 text-xl sm:text-2xl xl:text-3xl sm:text-justify lg:text-left">
          <p className="leading-8 lg:leading-10">
            {description1}
            <br />
            {description2}
          </p>
        </div>
      </section>
      <section className="relative flex justify-center items-center w-full h-[14rem] mx-auto mb-20 sm:h-[18rem] xl:w-5/6 lg:h-[26rem] xl:mb-0 xl:mt-12 xl:mx-0 xl:ml-16 order-first xl:order-last">
        <Image
          src={image}
          alt={alt}
          priority={true}
          fill
          className="object-cover rounded-lg shadow-lg "
          /*       style={{ borderRadius: '30px' }} */
        />
      </section>
    </article>
  );
};
export default Program;
