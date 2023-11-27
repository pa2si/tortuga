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
      className={`${styles.modal_overlay} ${
        isModalOpen ? styles.modal_show : ''
      }`}
      onClick={handleOverlayClick}
    >
      {isModalOpen && selectedEvent ? (
        <div className="relative bg-white max-w-4xl text-center grid place-items-center p-8 rounded-md ">
          <h5 className="text-3xl mb-3">{selectedEvent.title}</h5>
          <Image
            src={selectedEvent.image}
            alt={selectedEvent.alt}
            priority={true}
            width="300"
            height="300"
            className="rounded-md"
          />
          <div className="my-4">
            <p className="text-gray-700 text-base">
              Date: {selectedEvent.date}
            </p>
            <p className="text-gray-700 text-base">
              Location: {selectedEvent.location}
            </p>
            <p className="text-gray-700 text-base">
              City: {selectedEvent.city}
            </p>
            <p className="text-gray-700 text-base">
              Address: {selectedEvent.address}
            </p>
            <p className="text-gray-700 text-base">
              Postal Code: {selectedEvent.postal}
            </p>
          </div>
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
