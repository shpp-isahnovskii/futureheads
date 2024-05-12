const BurgerButton = ({onShow, isActive}) => {

  return (
    <>
      <div
        className="flex items-center justify-center h-11 w-11 border-2 rounded-full"
        onClick={onShow}
      >
        <div className="h-4 w-4 flex flex-wrap relative rotate-45 [&>*]:transition-all [&>*]:duration-500">
          <div
            className={`absolute h-1 w-1 right-1/2 translate-x-1/2 rounded-full bg-white ${
              isActive && 'h-2'
            }`}
          />
          <div
            className={`absolute h-1 w-1 bottom-0 right-1/2 translate-x-1/2 rounded-full bg-white ${
              isActive && 'h-2'
            }`}
          />
          <div
            className={`absolute h-1 w-1 top-1/2 -translate-y-1/2 rounded-full bg-white ${
              isActive && 'w-2'
            }`}
          />
          <div
            className={`absolute h-1 w-1 top-1/2 right-0 -translate-y-1/2 rounded-full bg-white ${
              isActive && 'w-2'
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default BurgerButton;
