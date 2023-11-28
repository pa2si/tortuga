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
      <div className={` mx-auto max-w-6xl ${styles.nav_center}`}>
        {/* header */}

        <section className={styles.nav__header}>
          <Link href="/">
            <Image
              href={'/'}
              src="/logos/tortuga-logo.webp"
              alt="tortuga logo"
              priority={true}
              width="90"
              height="90"
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
            className={`${styles.links} ${styles.menu__links}`}
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
