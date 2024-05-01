import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import HeaderComponent from '@/components/Header/HeaderComponent';

function App() {
  gsap.registerPlugin(useGSAP);
  
  const text = useRef(null);
  useGSAP(() => {
    gsap.to(text.current, { fontSize: '4rem', duration: 3 });
  });
  return (
    <>
      <HeaderComponent />
      <div ref={text} className="h1 text-red-500">
      </div>
    </>
  );
}

export default App;
