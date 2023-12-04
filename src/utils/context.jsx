'use client';

import { eventList } from '@/app/_sections/Events/data';
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

  const [isEventsInView, setIsEventsInView] = useState(false);
  const [isProgramsInView, setIsProgramsInView] = useState(false);
  const [isAboutInView, setIsAboutInView] = useState(false);
  const [isContactInView, setIsContactInView] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        selectedEvent,
        event,
        openModal,
        closeModal,
        isEventsInView,
        setIsEventsInView,
        isProgramsInView,
        setIsProgramsInView,
        isAboutInView,
        setIsAboutInView,
        isContactInView,
        setIsContactInView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
