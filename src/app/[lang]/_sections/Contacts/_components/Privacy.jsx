import { motion } from 'framer-motion';

const Privacy = () => {
  const variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div
      className="text-black"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      Privay
    </div>
  );
};
export default Privacy;
