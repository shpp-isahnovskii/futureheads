import CompanyBrand from '@/components/Header/CompanyBrand';
import HamburgerMenu from '@/components/Header/HamburgerMenu';

const HeaderComponent = () => {
  return (
    <>
      <header className="flex justify-between px-11 pt-12">
        <CompanyBrand />
        <HamburgerMenu />
      </header>
    </>
  );
};

export default HeaderComponent;
