import CompanyBrand from '@/components/Header/CompanyBrand';
import HamburgerMenu from '@/components/Header/HamburgerMenu';

const HeaderComponent = () => {
  return (
    <>
      <header className="absolute w-full flex justify-between px-11 top-12 z-50">
        <CompanyBrand />
        <HamburgerMenu />
      </header>
    </>
  );
};

export default HeaderComponent;
