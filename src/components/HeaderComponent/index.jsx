import CompanyBrand from './CompanyBrand';
import HamburgerMenu from './HamburgerMenu';

const HeaderComponent = () => {
  return (
    <>
      <header className="absolute w-full flex justify-between px-4 sm:px-12 top-4 sm:top-8 md:top-12 z-50">
        <CompanyBrand />
        <HamburgerMenu />
      </header>
    </>
  );
};

export default HeaderComponent;
