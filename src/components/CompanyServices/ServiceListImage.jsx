import { useRef, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ServiceListImage = ({ content, isActiveService }) => {
  const container = useRef(null);
  const timeline = useMemo(
    () => gsap.timeline({ paused: true, ease: 'back.out' }),
    [],
  );

  useGSAP(() => {
    timeline
      .addLabel('mainTL')
      .to(container.current, { opacity: 1, duration: '0.2' }, 'mainTL')
      .to(container.current, { scale: 1.02, duration: '0.2' }, 'mainTL')
      .to(container.current, { scale: 1, duration: '0.2' }, '>');
  });

  useGSAP(
    () => {
      if (isActiveService) {
        timeline.play();
      } else {
        timeline.restart().pause();
      }
    },
    { scope: container, dependencies: [isActiveService] },
  );

  return (
    <>
      <div ref={container} className="absolute right-0 w-max opacity-0 scale-1">
        <img className="object-none" src={content.image} alt={content.alt} />
        <img
          className={`absolute ${content.imageNum.position}`}
          src={content.imageNum.src}
          alt={content.alt}
        />
      </div>
    </>
  );
};

export default ServiceListImage;
