import { useState, useLayoutEffect } from 'react';

const useMouseMove = () => {
  const [position, setPosition] = useState({ x: 0, y: 0});

  useLayoutEffect(() => {
    const handlerMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handlerMouseMove);
    return () => {
      window.removeEventListener('mousemove', handlerMouseMove);
    };
  }, []);
  return position;
};

export default useMouseMove;
