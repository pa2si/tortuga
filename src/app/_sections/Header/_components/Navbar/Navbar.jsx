'use client';

import { socialLinks, email, pageLinks } from './data';
import { FaBars } from 'react-icons/fa';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
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
        className={` mx-auto mmax-w-screen-2xl px-0 md:px-3 xl:px-20  ${styles.nav_center}`}
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
              className="w-3/4 sm:w-full md:w-3/4 lg:w-full"
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
        >
          <ul
            className={` text-[1.2rem] md:gap-[1.1rem] md:text-[1rem] md:mr-[3.1rem] lg:text-[1.2rem] lg:mr-0 lg:gap-[1.5rem] xl:gap-8 ${styles.links} ${styles.menu__links}`}
            ref={linksRef}
          >
            {pageLinks.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id} className="hover:text-tortuga-light">
                  <Link
                    className={pathname === url ? '!text-tortuga-dark ' : ''}
                    href={`/${url}`}
                    onClick={toggleLinks}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.section>

        {/* email */}

        <ul className={`mr-4 ${styles.social__icons}`}>
          {email.map((item) => {
            const { id, email, icon } = item;
            return (
              <li
                key={id}
                className={`${styles.mailIcon} text-2xl text-tortuga-dark hover:tortuga-light hover:scale-105 transition-all duration-200`}
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
                className="text-xl text-tortuga-dark hover:tortuga-light hover:scale-105 transition-all duration-200"
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
