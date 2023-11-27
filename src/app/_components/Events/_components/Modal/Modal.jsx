'use client';

import { useGlobalContext } from '@/utils/context';
import Image from 'next/image';
import styles from './Modal.module.css';

const Modal = () => {
  const { isModalOpen, closeModal, selectedEvent } = useGlobalContext();

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.modal_overlay)) {
      closeModal();
    }
  };

  return (
    <div
      className={`${styles.modal_overlay} ${
        isModalOpen ? styles.modal_show : ''
      }`}
      onClick={handleOverlayClick}
    >
      {isModalOpen && selectedEvent ? (
        <div className="relative bg-white max-w-4xl text-center grid place-items-center p-8 rounded-md ">
          <Image
            src={selectedEvent.image}
            alt={selectedEvent.alt}
            priority={true}
            width="300"
            height="300"
            className="mb-4"
          />

          <h5 className="">{selectedEvent.title}</h5>
          <p className="">{selectedEvent.title}</p>
          <p className="">{selectedEvent.description}</p>
          <a
            href={selectedEvent.eventLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logos/fb.png"
              alt="facebook logo"
              width={80}
              height={80}
            />
          </a>

          <button
            className={styles.close_modal_btn}
            onClick={closeModal}
          ></button>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
