import { useRef, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ServiceListItem = ({
  content,
  isActiveService,
  setActiveService,
}) => {
  const container = useRef(null);
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);

  const timeline = useMemo(() => gsap.timeline({ paused: true, ease: 'back.out' }), []);

  useGSAP(() => {
    timeline
      .add('mainTL')
      .to(
        container.current,
        {
          marginLeft: '100px',
          duration: '0.4',
        },
        'mainTL',
      )
      .to(
        headerRef.current,
        {
          marginBottom: '50px',
          fontSize: '80px',
          fontWeight: 'bold',
          color: 'transparent',
          className: 'text-stroke',
        },
        'mainTL',
      )
      .to(descriptionRef.current, { marginLeft: '8px' }, 'mainTL');
  });

  useGSAP(
    () => {
      isActiveService ? timeline.play() : timeline.reverse();
    },
    { scope: container, dependencies: [isActiveService] },
  );
  return (
    <>
      <li
        ref={container}
        className="h-32 mb-9"
        onMouseEnter={() => {
          setActiveService();
        }}
      >
        <h2 ref={headerRef}>{content.service}</h2>
        <div ref={descriptionRef} className="font-gilroy text-lg/[1.2] mt-3 w-[430px]">
          {content.description}
        </div>
      </li>
    </>
  );
};

export default ServiceListItem;
