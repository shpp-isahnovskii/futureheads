import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const OurWorks = () => {
  const timeline = gsap.timeline();
  const growingText = useRef(null);
  const container = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  useEffect(() => {
    setContainerHeight(container.current.clientHeight);
  }, [container]);
  // useGSAP(
  //   () => {
  //     timeline.to(growingText.current, {
  //       scrollTrigger: {
  //         trigger: container.current,
  //         start: 'top top',
  //         end: '+500px',
  //         pin: true,
  //         scrub: 1,
  //         markers: true,
  //       },
  //     });
  //   },
  //   { scope: container },
  // );
  return (
    <>
      <section ref={container} className="h-screen overflow-hidden">
      </section>
    </>
  );
};

export default OurWorks;
