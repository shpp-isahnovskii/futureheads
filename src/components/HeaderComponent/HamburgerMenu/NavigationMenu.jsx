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
        className={`transition-all ease-out duration-1000 fixed w-screen bg-black h-screen top-0 rotate-180 pt-6 ${
          isActive ? 'left-0' : 'left-[105vw]'
        } z-30`}
      >
        <ul
          className="flex flex-col w-full justify-center font-bold"
          style={{ writingMode: 'vertical-lr' }}
        >
          <li
            onMouseEnter={() => {
              setCursorState('circle-growth');
            }}
            onMouseLeave={() => {
              setCursorState(undefined);
            }}
            className="order-5 relative h-max ml-16 list-item--after hover:text-stroke hover:text-transition-transparent"
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
            className="order-4 relative h-max ml-16 list-item--after hover:text-stroke hover:text-transition-transparent"
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
            className="order-3 relative h-max ml-16 list-item--after hover:text-stroke hover:text-transition-transparent"
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
            className="order-2 relative h-max ml-16 list-item--after hover:text-stroke hover:text-transition-transparent"
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
            className="order-1 relative h-max ml-16 list-item--after list-item--before hover:text-stroke hover:text-transition-transparent"
          >
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationMenu;
