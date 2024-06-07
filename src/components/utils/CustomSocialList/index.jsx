import CustomListItem from './CustomListItem';
import CursorContext from '@/providers/CursorProvider';
import { useContext } from 'react';
const CustomSocialList = ({ className }) => {
  const { setCursorState } = useContext(CursorContext);

  const socials = [
    { icon: 'icon-instagram', href: 'https://www.instagram.com' },
    { icon: 'icon-telegram', href: 'https://telegram.org' },
    { icon: 'icon-facebook', href: 'https://www.facebook.com' },
    { icon: 'icon-behance', href: 'https://www.behance.net' },
  ];

  return (
    <>
      <ul className={`flex text-lg h-8 items-center ${className}`}>
        {socials.map(({ icon, href }, key) => (
          <CustomListItem
            key={key}
            href={href}
            className={icon}
            onMouseEnter={() => {
              setCursorState('circle-growth');
            }}
            onMouseLeave={() => {
              setCursorState(undefined);
            }}
          />
        ))}
      </ul>
    </>
  );
};

export default CustomSocialList;
