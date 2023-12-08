'use client';

import { useGlobalContext } from '@/utils/context';
import { eventList } from '@/app/_sections/Events/data';
import ImageModal from '../../_components/Modal/ImageModal';

import Image from 'next/image';

const EventImage = ({ id }) => {
  const event = eventList.find((event) => event.id === parseInt(id, 10));

  const { openImageModal } = useGlobalContext();

  const handleImageClick = () => {
    openImageModal(event.image);
  };

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="hover:cursor-pointer">
      <Image
        src={event.image}
        alt={event.alt}
        priority={true}
        width="350"
        height="300"
        className="mb-4 rounded-md shadow-lg hover:scale-105"
        onClick={handleImageClick}
      />
      <ImageModal />
    </div>
  );
};
export default EventImage;
