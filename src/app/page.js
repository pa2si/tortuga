import Hero from './_components/Hero/Hero';
import Events from './_components/Events/Events';
import Modal from './_components/Events/_components/Modal/Modal';

export default function Home() {
  return (
    <main>
      <Hero />
      <Events />
      <Modal />
    </main>
  );
}
