import { useState, useRef, useEffect } from 'react';

const AnimatedCheck = () => {
  const stepZero = useRef(null);
  const stepOne = useRef(null);
  const stepTwo = useRef(null);

  const [state, setState] = useState(false);

  useEffect(() => {
    if (state === true) {
      stepOne.current.beginElement();
      stepTwo.current.beginElement();
    } else {
      stepZero.current.beginElement();
    }
  }, [state]);

  return (
    <>
      <svg
        onMouseEnter={() => setState(true)}
        onMouseLeave={() => setState(false)}
        width="30"
        height="20"
        viewBox="0 0 522 518"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          fill="#1E1E1E"
          points="54.850 166.550, 0.000 221.425, 136.075 357.500, 136.500 357.925, 192.000 413.425, 192.400 413.000, 193.000 412.400, 245.901 359.500, 246.850 358.550, 550.000 55.425, 495.100 0.575, 192.000 303.650, 54.850 166.550"
        >
          <animate
            ref={stepZero}
            attributeName="points"
            fill="freeze"
            dur="200ms"
            begin="indefinite"
            to="54.850 166.550, 0.000 221.425, 136.075 357.500, 136.500 357.925, 192.000 413.425, 192.400 413.000, 193.000 412.400, 245.901 359.500, 246.850 358.550, 550.000 55.425, 495.100 0.575, 192.000 303.650, 54.850 166.550"
          />
          <animate
            ref={stepOne}
            attributeName="points"
            fill="freeze"
            dur="200ms"
            begin="indefinite"
            to="55.425 136.975, 0.575 191.850, 137.000 327.500, 137.500 327.925, 193.000 383.425, 192.975 383.425, 328.150 517.400, 381.051 464.500, 247.425 328.975, 521.150 55.275, 466.250 0.425, 192.575 274.075, 55.425 136.975"
          />
          <animate
            ref={stepTwo}
            attributeName="points"
            fill="freeze"
            dur="200ms"
            begin="indefinite"
            to="56.000 0.425, 1.150 55.300, 137.575 190.950, 0.500 327.925, 56.000 383.425, 193.550 246.875, 328.725 380.850, 381.626 327.950, 248.000 192.425, 384.150 55.275, 329.250 0.425, 193.150 137.525, 56.000 0.425"
          />
        </polygon>
      </svg>
    </>
  );
};

export default AnimatedCheck;
