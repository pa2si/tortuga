'use client';

import Contact from './_components/Contact';
import Privacy from './_components/Privacy';
import Imprint from './_components/Imprint';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Contacts = ({ fetchedData, fetchedData2 }) => {
  const { title, contact_btns, bg } = fetchedData;

  const [activeComponent, setActiveComponent] = useState('contact');

  return (
    <section
      style={{
        backgroundImage: `url(${bg.filename})`,
        /*         backgroundAttachment: 'fixed', */
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="relative max-h-max mx-4 bg-opacity-0 sm:mx-0 lg:mx-8 xl:mx-0 text-slate-50 overflow-auto bg-gray-500 sm:bg-opacity-30  "
        id="contact"
      >
        <div className="my-10 sm:mx-8 max-w-6xl lg:mx-auto pt-8 pb-1 lg:py-12 lg:px-16 bg-white bg-opacity-90 rounded-xl">
          <div className=" w-full flex justify-center items-center ">
            <div className="flex flex-col items-center">
              <h2 className="font-title text-black text-center">{title}</h2>
              <div className="relative w-full h-1 mt-6 md:mt-1 mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tortuga-light to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Button Group */}
          <div className="flex gap-4 justify-center mt-8 lg:mt-2 border-b-2 border-offset-8 p-2">
            {contact_btns.map((btn) => {
              const { _uid, btn_name } = btn;

              return (
                <button
                  key={_uid}
                  className={` hover:bg-tortuga-light text-white font-kalam py-1 px-4 rounded transition-all duration-200 ease-in-out ${
                    activeComponent === btn_name
                      ? 'bg-tortuga-light text-white'
                      : 'bg-tortuga-dark'
                  }`}
                  onClick={() => setActiveComponent(btn_name)}
                >
                  {btn_name}
                </button>
              );
            })}
          </div>

          {/* Conditional Component Rendering */}
          <AnimatePresence mode="wait">
            {activeComponent === 'contact' && (
              <Contact key="contact" fetchedData2={fetchedData2} />
            )}
            {activeComponent === 'imprint' && <Imprint key="imprint" />}
            {activeComponent === 'privacy' && <Privacy key="privacy" />}
          </AnimatePresence>
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white  z-10"></div> */}
      </div>
    </section>
  );
};
export default Contacts;
