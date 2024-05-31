import GlitchText from '@/components/utils/glitch/text';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const OurEnterprise = ({ isVideoEnded, className }) => {
  useEffect(() => {
    if (isVideoEnded) {
      textBounceAnimation();
      textMoveAnimation();
    }
  }, [isVideoEnded]);

  const test = useRef(null);
  const tl = gsap.timeline();

  const textBounceAnimation = () => {
    tl.to(test.current, { opacity: 1, duration: 0.01 });
    tl.to(test.current, { scale: 0.3, duration: 0.01 }, '>');
    tl.to(test.current, { scale: 1.2, duration: 0.1 }, '>');
    tl.to(test.current, { scale: 0.9, duration: 0.1 }, '>');
    tl.to(test.current, { scale: 1, duration: 0.1 }, '>');
  };

  const textMoveAnimation = () => {
    tl.to(test.current, {
      transform: 'translateY(-100%)',
      top: '94vh',
      left: '2.75rem',
      duration: 2,
    });
  };
  return (
    <>
      <h1
        ref={test}
        className={`opacity-0 flex flex-col font-bold text-black text-stroke absolute-center ${className}`}
      >
        <GlitchText>SOFTWARE</GlitchText>
        <GlitchText>DEVELOPMENT</GlitchText>
        <GlitchText>COMPANY</GlitchText>
      </h1>
    </>
  );
};

export default OurEnterprise;
