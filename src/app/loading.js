import { FaSpinner } from 'react-icons/fa6';

const loading = () => {
  return (
    <div className="m-auto h-16 animate-spin">
      <FaSpinner />
    </div>
  );
};
export default loading;
