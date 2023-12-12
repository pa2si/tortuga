import Hero from './_sections/Hero/Hero';
import Events from './_sections/Events/Events';
import Modal from './_sections/Events/_components/Modal/Modal';
import Programs from './_sections/Programs/Programs';
import About from './_sections/About/About';
import Contacts from './_sections/Contacts/Contacts';
import { getFetchData } from '@/utils/fetchingData';

export default async function Home() {
  const storyData = await getFetchData();

  return (
    <main className="font-abhayaLibre ">
      <Hero />
      <About fetchedData={storyData.about_section} />
      <Events fetchedData={storyData.events_section} />
      <Modal />
      <Programs fetchedData={storyData.programs_section} />
      <Contacts fetchedData={storyData.contacts_section} />
    </main>
  );
}
