import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { getImgUrl } from '@/utils/getImgUrl';

import "./style.css";

const OurWorks = () => {
  const timeline = gsap.timeline();
  const ourWorksRef = useRef(null);
  const container = useRef(null);

  useGSAP(
    () => {
      timeline.to(ourWorksRef.current, {
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+800px',
          pin: true,
          scrub: 2,
        },
        maskSize: 16000,
        ease: 'power4.in',
      });
    },
    { scope: container },
  );
  return (
    <>
      <section ref={container} className="h-svh overflow-hidden">
        <div className="w-full h-full">
          <img
            ref={ourWorksRef}
            src={getImgUrl('our-works.webp')}
            className="object-cover relative w-full h-full img-mask pointer-events-none"
            style={{
              maskSize: '98%',
              maskRepeat: 'no-repeat',
              maskPosition: 'center center',
            }}
          />
        </div>
      </section>
    </>
  );
};

export default OurWorks;
