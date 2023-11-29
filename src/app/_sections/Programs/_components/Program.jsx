import Image from 'next/image';

const Program = ({ title, image, alt, description1, description2 }) => {
  return (
    <article className="grid xl:grid-cols-2 grid-cols-1 ">
      <sections className=" flex flex-col justify-center order-last xl:order-first ">
        <h3 className="text-2xl md:text-3xl xl:text-4xl mb-8">{title}</h3>
        <div className="text-xl sm:text-2xl text-center sm:text-justify lg:text-left">
          <p className="leading-8 lg:leading-10">
            {description1}
            <br />
            {description2}
          </p>
        </div>
      </sections>
      <section className="relative w-3/4 h-[10rem] mt-[-4rem] mb-20 xl:mb-0  xl:mt-0 sm:h-[20rem] lg:h-[28rem] mx-auto xl:mx-0 xl:ml-auto order-first xl:order-last ">
        <Image
          src={image}
          alt={alt}
          priority={true}
          fill
          sizes="30vw"
          className="object-cover absolute  "
          style={{ borderRadius: '30px' }}
        />
      </section>
    </article>
  );
};
export default Program;
