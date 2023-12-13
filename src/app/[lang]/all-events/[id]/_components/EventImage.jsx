'use client';

import { useGlobalContext } from '@/utils/context';
import ImageModal from '../../_components/Modal/ImageModal';

import Image from 'next/image';

const EventImage = ({ imageData }) => {
  // console.log(imageData);

  const { openImageModal } = useGlobalContext();

  const handleImageClick = () => {
    openImageModal(imageData.filename);
  };

  if (!imageData.filename) {
    return <div>Event not found</div>;
  }

  return (
    <div className="hover:cursor-pointer">
      <Image
        src={imageData.filename}
        alt={imageData.filename.alt}
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
