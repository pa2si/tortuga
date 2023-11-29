import Image from 'next/image';
import { aboutData } from './data';

const About = () => {
  const { title, image, alt, copyright, description } = aboutData;

  return (
    <section className="relative bg-white  bg-opacity-90 max-h-max text-slate-50 overflow-auto">
      <div className="mx-8 max-w-6xl xl:mx-auto">
        <h2
          className=" font-title text-tortuga-dark underline underline-offset-4 mt-4 mb-8  sm:my-12 flex justify-center"
          id="about"
        >
          About
        </h2>
        <article className="text-slate-900 mb-2 lg:mb-20 grid grid-cols-1 lg:grid-cols-2">
          <section className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl xl:text-4xl mb-8">{title}</h3>
            <div className="text-xl sm:text-2xl text-center sm:text-justify lg:text-left">
              <p className="leading-8 sm:leading-9 tracking-wide">
                {description}
              </p>
            </div>
          </section>

          <section className="flex flex-col justify-center lg:justify-end  items-center">
            <Image
              src={image}
              alt={alt}
              priority={true}
              width={300}
              height={300}
              className="h-2/4 sm:h-3/4 w-4/4 lg:h-3/4 mx-auto lg:mt-0 lg:mx-0 lg:ml-[18em] drop-shadow-lg rounded-xl border-r-2 border-tortuga-light"
            />
            <p className="mt-2 lg:ml-[18em]">{copyright}</p>
          </section>
        </article>
      </div>
    </section>
  );
};
export default About;
