'use client';

import { useGlobalContext } from '@/utils/context';
import Image from 'next/image';
import styles from './Modal.module.css';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
  const { isModalOpen, closeModal, selectedEvent } = useGlobalContext();

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.modal_overlay)) {
      closeModal();
    }
  };

  return (
    <div
      className={`  ${styles.modal_overlay} ${
        isModalOpen ? styles.modal_show : ''
      }`}
      onClick={handleOverlayClick}
    >
      {isModalOpen && selectedEvent ? (
        <div className="relative bg-white max-h-screen-30 lg:max-w-3xl xl:max-w-4xl text-center grid place-items-center p-8 rounded-md overflow-scroll">
          <h5 className="text-3xl lg:text-4xl mb-4 mt-4 font-kalam">
            {selectedEvent.title}
          </h5>
          <Image
            src={selectedEvent.image.filename}
            alt={selectedEvent.image.alt || 'Event Image'}
            priority={true}
            width="300"
            height="300"
            className="rounded-md h-[10rem] md:h-[15rem] shadow-lg mb-10 mt-1"
          />
          <p className="max-w-xl text-justify font-text md:text-lg lg:text-[1rem] lg:leading-[1.8rem] text-neutral-700 mb-4">
            {selectedEvent.description}
            <br />
            {selectedEvent.description2}
          </p>
          <div className="my-4 pt-1 leading-[1.4rem] text-[1.1rem] md:text-[1.2rem] md:leading-[1.5rem] lg:text-[1.3rem] lg:leading-[1.6rem]">
            <div className=" bg-tortuga-light h-[2px] mb-2 "></div>{' '}
            <p className="text-tortuga-dark"> {selectedEvent.date}</p>
            <p className="text-gray-700"> {selectedEvent.location}</p>
            <p className="text-gray-700"> {selectedEvent.city}</p>
            <p className="text-gray-700">{selectedEvent.address}</p>
            <p className="text-gray-700">{selectedEvent.postal}</p>
          </div>
          <a
            href={selectedEvent.event_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={selectedEvent.fb_logo.filename}
              alt={selectedEvent.fb_logo.alt}
              width={100}
              height={100}
            />
          </a>
          <button
            className={`text-red-600 ${styles.close_modal_btn}`}
            onClick={closeModal}
          >
            <FaTimes />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
