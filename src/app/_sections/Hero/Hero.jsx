import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section
      className={`relative h-[30rem] sm:h-[42rem] w-full  ${styles.heroContainer}`}
    >
      <Image
        src="/images/tortuga-hero.jpg"
        layout="fill"
        alt="stage where Johanna performed"
        sizes="100vw"
        className="object-cover overflow-hidden "
        priority={true}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>
    </section>
  );
};

export default Hero;
