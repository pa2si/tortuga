import Hero from './_sections/Hero/Hero';
import Events from './_sections/Events/Events';
import Modal from './_sections/Events/_components/Modal/Modal';
import Programs from './_sections/Programs/Programs';
import About from './_sections/About/About';
import Contacts from './_sections/Contacts/Contacts';

export default function Home() {
  return (
    <main className="font-abhayaLibre ">
      <Hero />
      <About />
      <Events />
      <Modal />
      <Programs />
      <Contacts />
    </main>
  );
}
