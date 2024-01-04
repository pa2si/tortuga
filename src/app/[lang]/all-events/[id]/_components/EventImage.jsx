'use client';

import { useGlobalContext } from '@/utils/context';
import ImageModal from '../../_components/Modal/ImageModal';

import Image from 'next/image';

const EventImage = ({ imageData }) => {
  // console.log(imageData);

  const { openImageModal } = useGlobalContext();

  const blurDataURL =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8+vx1PQMRgHFUIX0VAgAKVyAngaWJUwAAAABJRU5ErkJggg==';

  const handleImageClick = () => {
    openImageModal(imageData.filename);
  };

  if (!imageData.filename) {
    return <div>Event not found</div>;
  }

  return (
    <div className="hover:cursor-pointer flex justify-center sm:bg-gray-100  rounded-t-lg sm:border-2 lg:border-0">
      <Image
        src={imageData.filename}
        alt={imageData.alt || 'Event Image'}
        priority={true}
        width="650"
        height="350"
        placeholder="blur"
        blurDataURL={blurDataURL}
        className="rounded-md shadow-lg  max-h-80 "
        onClick={handleImageClick}
      />
      <ImageModal />
    </div>
  );
};
export default EventImage;
