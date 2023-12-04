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
        <div className="relative bg-white max-h-screen lg:max-w-3xl xl:max-w-4xl text-center grid place-items-center p-8 rounded-md overflow-scroll">
          <h5 className="text-3xl lg:text-4xl mb-4 mt-4 font-kalam">
            {selectedEvent.title}
          </h5>
          <Image
            src={selectedEvent.image}
            alt={selectedEvent.alt}
            priority={true}
            width="300"
            height="300"
            className="rounded-md h-[10rem] md:h-[15rem] shadow-lg"
          />
          <div className="my-4 lg:text-lg">
            <p className="text-gray-700 ">Date: {selectedEvent.date}</p>
            <p className="text-gray-700 ">Location: {selectedEvent.location}</p>
            <p className="text-gray-700 ">City: {selectedEvent.city}</p>
            <p className="text-gray-700 ">Address: {selectedEvent.address}</p>
            <p className="text-gray-700 ">
              Postal Code: {selectedEvent.postal}
            </p>
          </div>
          <p className="max-w-xl lg:text-xl">{selectedEvent.description}</p>
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
