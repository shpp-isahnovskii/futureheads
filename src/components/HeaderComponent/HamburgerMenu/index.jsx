import { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import BurgerButton from './BurgerButton';
import './styles.css';

const HamburgerMenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <BurgerButton isActive={isActive} onShow={() => setIsActive(!isActive)} />
      <NavigationMenu isActive={isActive} />
    </>
  );
};

export default HamburgerMenu;
