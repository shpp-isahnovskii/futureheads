import { useContext, useEffect } from 'react';
import CursorContext from '@/providers/CursorProvider';

const NavigationMenu = ({ isActive }) => {
  const { setCursorState } = useContext(CursorContext);

  const scrollFreeze = (isActive) => {
    if (isActive) {
      document.body.classList.add('no-scroll');
      return;
    }
    document.body.classList.remove('no-scroll');
  };
  useEffect(() => {
    scrollFreeze(isActive);
  }, [isActive]);
  return (
    <>
      <nav
        className={`transition-all ease-out duration-1000 fixed w-screen bg-black h-screen px-10 sm:px-0 pt-16 sm:pt-6 top-0 sm:rotate-180 ${
          isActive ? 'left-0' : 'left-full'
        } z-30`}
      >
        <ul
          className="flex flex-col w-full justify-center font-bold sm:vertical-lr sm:[&>*]:ml-20 sm:[&>*]:mr-10"
        >
          <li
            onMouseEnter={() => {
              setCursorState('circle-growth');
            }}
            onMouseLeave={() => {
              setCursorState(undefined);
            }}
            className="order-5 relative h-max list-item--after hover:text-stroke hover:text-transition-transparent"
          >
            Home
          </li>
          <li
            onMouseEnter={() => {
              setCursorState('circle-growth');
            }}
            onMouseLeave={() => {
              setCursorState(undefined);
            }}
            className="order-4 relative h-max list-item--after hover:text-stroke hover:text-transition-transparent"
          >
            About
          </li>
          <li
            onMouseEnter={() => {
              setCursorState('circle-growth');
            }}
            onMouseLeave={() => {
              setCursorState(undefined);
            }}
            className="order-3 relative h-max list-item--after hover:text-stroke hover:text-transition-transparent"
          >
            Services
          </li>
          <li
            onMouseEnter={() => {
              setCursorState('circle-growth');
            }}
            onMouseLeave={() => {
              setCursorState(undefined);
            }}
            className="order-2 relative h-max list-item--after hover:text-stroke hover:text-transition-transparent"
          >
            Work
          </li>
          <li
            onMouseEnter={() => {
              setCursorState('circle-growth');
            }}
            onMouseLeave={() => {
              setCursorState(undefined);
            }}
            className="order-1 relative h-max list-item--after list-item--before hover:text-stroke hover:text-transition-transparent"
          >
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationMenu;
