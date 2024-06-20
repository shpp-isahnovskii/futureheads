import { useRef, useMemo, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ServiceListItem = ({
  content,
  isActiveService,
  setActiveService,
  onMouseEnter,
  onMouseLeave,
  children,
  className,
}) => {
  const container = useRef(null);

  const timeline = useMemo(
    () => gsap.timeline({ paused: true, ease: 'back.out' }),
    [],
  );

  const mm = gsap.matchMedia();

  useGSAP(
    () => {
      mm.add(
        {
          xs: '(max-width: 639px)',
          sm: '(min-width: 640px) and (max-width: 767px)',
          md: '(min-width: 768px) and (max-width: 1023px)',
          lg: '(min-width: 1024px) and (max-width: 1279px)',
          xl: '(min-width: 1280px) and (max-width: 1536px)',
          xxl: '(min-width: 1536px)',
        },
        (context) => {
          const { xs, sm, md, lg } = context.conditions;
          timeline.to(
            container.current,
            {
              marginLeft: xs ? '2px' : sm ? '5px' : md ? '10px' : lg ? '50px' : '100px',
              duration: '0.4',
            },
            'mainTL',
          );
          timeline
            .to(
              'h2',
              {
                marginBottom: xs ? '8px' : sm ? '18px' : md ? '10px' : lg ? '24px' : '50px',
                fontSize: xs
                  ? '30px'
                  : sm
                  ? '58px'
                  : lg
                  ? '62px'
                  : '80px',
                fontWeight: 'bold',
                color: 'transparent',
                className: 'text-stroke',
                duration: '0.4',
              },
              'mainTL',
            )
            .to('.description', { marginLeft: xs ? '0px' : sm ? '2px' : '8px' }, '<');
        },
      );
      return () => mm.revert();
    },
    { scope: container },
  );

  useLayoutEffect(() => {
    isActiveService ? timeline.play() : timeline.reverse();
  }, [isActiveService]);
  return (
    <>
      <li
        className={className}
        onMouseEnter={() => {
          setActiveService();
          onMouseEnter();
        }}
        onMouseLeave={() => {
          onMouseLeave();
        }}
      >
        <div className="relative z-20">
          <div ref={container}>
            <h2 className="w-fit">{content.service}</h2>
            <div className="description font-gilroy text-xs sm:text-sm md:text-lg lg:text-lg/[1.2] mt-1 sm:mt-3 w-[40%] sm:w-full md:w-[430px]">
              {content.description}
            </div>
          </div>
          {children}
        </div>
      </li>
    </>
  );
};

export default ServiceListItem;
