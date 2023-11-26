import Image from 'next/image';

const Program = ({ src, alt, copyright, title, description }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg m-4 rounded overflow-hidden ">
      <div className="relative w-full h-[20rem]">
        <Image
          src={src}
          alt={alt}
          priority={true}
          fill={true}
          sizes="30vw"
          className="object-cover absolute"
        />
      </div>

      {/*      <img className="w-full" src={src} alt={alt} /> */}
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {copyright}
      </span>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
};
export default Program;
