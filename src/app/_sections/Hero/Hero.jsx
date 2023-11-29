import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <section
        className={`relative h-[30rem] sm:h-[42rem] w-full  ${styles.heroContainer}`}
      >
        <Image
          src="/images/tortuga-hero.jpg"
          fill={true}
          alt="stage where Johanna performed"
          sizes="100vw"
          className="object-cover overflow-hidden absolute w-auto"
          priority={true}
        />
      </section>
    </>
  );
};
export default Hero;
