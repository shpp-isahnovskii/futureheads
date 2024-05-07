import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import HeaderComponent from '@/components/Header/HeaderComponent';
import VideoBanner from '@/components/VideoBanner'; 

function App() {
  gsap.registerPlugin(useGSAP);

  return (
    <>
      <HeaderComponent />
      <VideoBanner />
    </>
  );
}

export default App;
