'use client';

import { socialLinks, email, languages } from './data';
import { FaBars } from 'react-icons/fa';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useGlobalContext } from '@/utils/context';

const Navbar = ({ fetchedData }) => {
  const { menu_links } = fetchedData;
  const [showLinks, setShowLinks] = useState(false);
  const [hidden, setHidden] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const { useScroll, useMotionValueEvent } = require('framer-motion');
  const { scrollY } = useScroll();

  const pathname = usePathname();

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 5) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const { isEventsInView, isProgramsInView, isAboutInView, isContactInView } =
    useGlobalContext();

  return (
    <motion.nav
      className={`p-1 font-title ${styles.navbar}`}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <div
        className={` mx-auto max-w-screen-2xl px-0 md:px-3 xl:px-20  ${styles.nav_center}`}
      >
        {/* header */}

        <section className={styles.nav__header}>
          <Link href="/">
            <Image
              href={'/'}
              src="/logos/tortuga-logo-w-text.webp"
              alt="tortuga logo"
              priority={true}
              width="260"
              height="260"
              className="w-3/4  md:w-3/4 xl:w-5/6"
            />
          </Link>
          <button
            className={`text-tortuga-dark hover:text-tortuga-light ${styles.nav__toggle}`}
            onClick={toggleLinks}
          >
            <FaBars />
          </button>
        </section>

        {/* Menu Links */}

        <motion.section
          className={styles.links__container}
          ref={linksContainerRef}
          style={linkStyles}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: 'easeInOut' }}
        >
          <ul
            className={` text-[1.2rem] md:gap-[1.1rem] mb-[-0.3rem] md:text-[1rem] md:mr-[3.1rem] lg:text-[1.2rem] lg:mr-0 lg:gap-[1.5rem] xl:gap-8 ${styles.links} ${styles.menu__links}`}
            ref={linksRef}
          >
            {menu_links.map((link) => {
              let className = '';
              if (link.url === '#events' && isEventsInView) {
                className = '!text-tortuga-dark';
              } else if (link.url === '#programs' && isProgramsInView) {
                className = '!text-tortuga-dark';
              } else if (link.url === '#about' && isAboutInView) {
                className = '!text-tortuga-dark';
              } else if (link.url === '#contact' && isContactInView) {
                className = '!text-tortuga-dark';
              }

              const { id, url, menu_name } = link;
              return (
                <li key={id} className="hover:text-tortuga-light">
                  <Link
                    className={className}
                    href={`/${url}`}
                    onClick={toggleLinks}
                  >
                    {menu_name}
                  </Link>
                </li>
              );
            })}

            {/* language buttons */}
            <div className="flex gap-3 text-tortuga-dark  ml-4 md:ml-6 2xl:ml-[20%]">
              {languages.map((language) => {
                const { id, text } = language;
                return (
                  <li
                    key={id}
                    className="font-kalam hover:scale-105 hover:text-tortuga-light transition-all duration-200 ease-in-out "
                  >
                    <button>{text}</button>
                  </li>
                );
              })}
            </div>
          </ul>
        </motion.section>

        {/* email */}

        <ul className={`mr-4 ${styles.social__icons}`}>
          {email.map((item) => {
            const { id, email, icon } = item;
            return (
              <li
                key={id}
                className={`${styles.mailIcon} text-2xl text-tortuga-dark hover:text-tortuga-light hover:scale-105 transition-all duration-200 ease-in-out`}
              >
                <a href={`mailto:${email}`}>{icon}</a>
              </li>
            );
          })}
        </ul>

        {/* social media */}

        <ul className={styles.social__icons}>
          {socialLinks.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li
                key={id}
                className="text-xl text-tortuga-dark hover:text-tortuga-light hover:scale-105 transition-all duration-200 ease-in-out"
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
      </div>
    </motion.nav>
  );
};

export default Navbar;
