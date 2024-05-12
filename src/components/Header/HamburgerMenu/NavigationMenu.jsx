import { createPortal } from 'react-dom';

const NavigationMenu = ({ isActive }) => {
  return (
    <>
      {createPortal(
        <nav
          className={`transition-all ease-out duration-1000 fixed w-screen bg-black h-screen top-0 rotate-180 pt-6 ${
            isActive ? 'left-0' : 'left-[100svw]'
          } z-40`}
        >
          <ul
            className="flex flex-col w-full justify-center font-bold"
            style={{ writingMode: 'vertical-lr' }}
          >
            <li className="order-5 relative h-max ml-16 list-item--after hover:text-stroke hover:text-transition-transparent">
              Home
            </li>
            <li className="order-4 relative h-max ml-16 list-item--after hover:text-stroke hover:text-transition-transparent">
              About
            </li>
            <li className="order-3 relative h-max ml-16 list-item--after hover:text-stroke hover:text-transition-transparent">
              Services
            </li>
            <li className="order-2 relative h-max ml-16 list-item--after hover:text-stroke hover:text-transition-transparent">
              Work
            </li>
            <li className="order-1 relative h-max ml-16 list-item--after list-item--before hover:text-stroke hover:text-transition-transparent">
              Contact
            </li>
          </ul>
        </nav>,
        document.body,
      )}
    </>
  );
};

export default NavigationMenu;
