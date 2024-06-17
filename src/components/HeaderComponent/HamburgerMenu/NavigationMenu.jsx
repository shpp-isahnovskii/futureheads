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

  const menuItems = [
    {
      item: 'Home',
    },
    {
      item: 'About',
    },
    {
      item: 'Services',
    },
    {
      item: 'Work',
    },
    {
      item: 'Contact',
    },
  ];

  return (
    <>
      <nav
        className={`flex transition-all ease-out duration-1000 fixed w-svw bg-black h-svh px-10 md:px-0 md:pb-6 xl:pb-8 top-0 ${
          isActive ? 'left-0' : 'left-full'
        } z-30`}
      >
        <ul className="flex flex-col w-full justify-center font-bold md:flex-row md:items-end">
          {menuItems.map(({ item }, key) => (
            <li
              key={key}
              onMouseEnter={() => {
                setCursorState('circle-growth');
              }}
              onMouseLeave={() => {
                setCursorState(undefined);
              }}
              className={` ${
                key !== menuItems.length - 1
                  ? 'list-item--after'
                  : 'list-item--before list-item--after'
              } relative h-max w-min hover:text-stroke hover:text-transition-transparent md:vertical-lr md:rotate-180 mb-6 md:mb-0 ml-10 md:mr-5 lg:ml-16 lg:mr-8`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavigationMenu;
