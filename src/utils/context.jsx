'use client';

import { eventList } from '@/app/_components/Events/data';
import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [event, setEvent] = useState(eventList);

  const openModal = (event) => {
    setIsModalOpen(true);
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        selectedEvent,
        event,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
