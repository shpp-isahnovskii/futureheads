import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import HeaderComponent from '@/components/Header/HeaderComponent';
import VideoBanner from '@/components/VideoBanner'; 
import CompanyServices from './components/CompanyServices';

function App() {
  gsap.registerPlugin(useGSAP);

  return (
    <>
      <HeaderComponent />
      <VideoBanner />
      <CompanyServices />
    </>
  );
}

export default App;
