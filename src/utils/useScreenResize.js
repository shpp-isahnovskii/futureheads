import { useState, useLayoutEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useLayoutEffect(() => {
    const handlerResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handlerResize);
    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, []);
  return { screenWidth: screenSize.width, screenHeight: screenSize.height };
};

export default useScreenSize;
