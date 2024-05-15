import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handlerResize = () => {
      setScreenSize({ width: window.width, height: window.height });
    };
    window.addEventListener('resize', handlerResize);
    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, []);
  return { screenWidth: screenSize.width, screenHeight: screenSize.height };
};

export default useScreenSize;
