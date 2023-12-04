const Title = ({ text }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-title text-black text-center">{text}</h2>
      <div className="relative w-full h-1 mt-2">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tortuga-light to-transparent"></div>
      </div>
    </div>
  );
};

export default Title;
