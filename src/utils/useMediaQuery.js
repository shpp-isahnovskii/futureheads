import { useLayoutEffect, useState } from 'react';
import useScreenSize from './useScreenResize';

const useMediaQuery = () => {
  const { screenWidth } = useScreenSize();

  useLayoutEffect(() => {
    setMedia(checkMedia(screenWidth));
  }, [screenWidth]);

  const checkMedia = (media) => {
    return media >= 1024 ? 'desktop' : media >= 768 ? 'tablet' : 'mobile';
  };

  const [media, setMedia] = useState(() => checkMedia(screenWidth));
  return { media };
};

export default useMediaQuery;
