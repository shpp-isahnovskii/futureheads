import { useRef, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import GlitchImage from '@/components/utils/glitch/image';

const ServiceListImage = ({ content, isActiveService, className }) => {
  const container = useRef(null);
  const timeline = useMemo(
    () => gsap.timeline({ paused: true, ease: 'back.out' }),
    [],
  );

  useGSAP(() => {
    timeline
      .addLabel('mainTL')
      .to(
        container.current,
        { opacity: 1, duration: '0.4' },
        'mainTL',
      )
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
      <div
        ref={container}
        className={`absolute w-32 sm:w-64 md:w-[26rem] lg:w-[38rem] xl:w-[54rem] -z-10 sm:z-10 ${className}`}
      >
        <GlitchImage image={content.image} alt={content.alt} />
        <img
          className={`absolute -right-4 sm:-right-8 md:-right-12 sm:-top-14 md:-top-16 lg:-top-20 xl:-top-32 ${content.imageNum.position}`}
          src={content.imageNum.src}
          alt={content.alt}
        />
      </div>
    </>
  );
};

export default ServiceListImage;
