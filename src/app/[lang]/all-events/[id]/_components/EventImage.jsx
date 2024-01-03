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
    <div className="hover:cursor-pointer flex justify-center sm:bg-gray-200  rounded-t-lg sm:border-2 lg:border-0">
      <Image
        src={imageData.filename}
        alt={imageData.filename.alt}
        priority={true}
        width="650"
        height="350"
        className="rounded-md shadow-lg hover:scale-105 max-h-80 "
        onClick={handleImageClick}
      />
      <ImageModal />
    </div>
  );
};
export default EventImage;
