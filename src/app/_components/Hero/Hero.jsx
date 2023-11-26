import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section
      className={`relative h-[42rem] w-full bg-green-300 ${styles.heroContainer}`}
    >
      <Image
        src="/images/tortuga-hero.jpg"
        fill={true}
        alt="stage where i performed"
        sizes="100vw"
        className="object-cover overflow-hidden absolute w-auto"
        priority={true}
      />
    </section>
  );
};
export default Hero;
