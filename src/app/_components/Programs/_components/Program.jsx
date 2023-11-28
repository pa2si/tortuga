import Image from 'next/image';

const Program = ({ title, image, alt, description1, description2 }) => {
  return (
    <section className="grid md:grid-cols-2 grid-cols-1">
      <div className=" flex flex-col justify-center ">
        <h3 className="text-2xl md:text-3xl xl:text-4xl mb-8">{title}</h3>
        <div className="text-lg sm:text-2xl">
          <p className="lg:leading-10">
            {description1}
            <br />
            {description2}
          </p>
        </div>
      </div>
      <div className="relative w-3/4 h-[10rem]  mt-20 md:mt-0  sm:h-[20rem] md:h-[28rem] mx-auto  ">
        <Image
          src={image}
          alt={alt}
          priority={true}
          fill
          sizes="30vw"
          className="object-cover absolute  "
          style={{ borderRadius: '30px' }}
        />
      </div>
    </section>
  );
};
export default Program;
