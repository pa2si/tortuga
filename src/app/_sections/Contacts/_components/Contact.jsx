import { contactData } from '../data';
import Image from 'next/image';
import { email as contactEmail } from '@/app/_sections/Header/_components/Navbar/data';
import { socialLinks } from '@/app/_sections/Header/_components/Navbar/data';
import { motion } from 'framer-motion';
import InView from './InView';

const Contact = () => {
  const { image, alt, description } = contactData;
  const { email } = contactEmail;

  const variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.article
      className="grid grid-cols-1 lg:grid-cols-5  text-slate-900 lg:mt-8 mb-12 lg:mb-8  "
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="flex flex-col col-span-3 px-4 text-xl text-justify sm:text-2xl sm:px-8 lg:px-0 lg:mb-8 lg:text-left order-last lg:order-first ">
        <p className="text-gray-700 font-poorStory leading-8 sm:leading-9 tracking-wide">
          {description}
        </p>
        <div className=" h-full flex flex-col items-center justify-center gap-4">
          <a
            href={`mailto:${email}`}
            className="text-tortuga-dark hover:text-tortuga-light text-2xl mt-8 md:text-3xl transition-all duration-200"
          >
            tortuga.storytelling@posteo.de
          </a>
          <InView />
          <ul className="flex gap-2">
            {socialLinks.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li
                  key={id}
                  className="text-3xl md:text-4xl text-tortuga-dark hover:text-tortuga-light hover:scale-105 transition-all duration-200"
                >
                  <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* Tortuga Logo */}
          <Image
            src="/logos/tortuga-logo-w-text.webp"
            alt="tortuga logo"
            priority={true}
            width={500}
            height={70}
            className=" w-5/6 sm:w-4/6 md:w-3/6 lg:w-5/6 xl:w-4/6 mx-auto  "
          />
        </div>
      </div>
      {/* Contact Image */}
      <div className="col-span-2 flex flex-col justify-center items-center lg:ml-36 my-[-2rem] sm:my-[0rem] order-first lg:order-last">
        <Image
          src={image}
          alt={alt}
          priority={true}
          width={130}
          height={400}
          className=" mx-auto h-3/5 sm:h-4/6 lg:h-full drop-shadow-lg rounded-xl "
        />
      </div>
    </motion.article>
  );
};
export default Contact;
