import GlitchText from '@/components/utils/glitch/text';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useMediaQuery from '@/utils/useMediaQuery';

const OurEnterprise = ({ isVideoEnded, className }) => {
  const { media } = useMediaQuery();
  const text = useRef(null);
  const tl = gsap.timeline();

  useGSAP(
    () => {
      if (isVideoEnded && media !== 'mobile') {
        textBounceAnimation();
        textMoveAnimation();
      }
    },
    { scope: text.current, dependencies: [isVideoEnded] },
  );

  const textBounceAnimation = () => {
    tl.to(text.current, { opacity: 1, duration: 0.01 });
    tl.to(text.current, { scale: 0.3, duration: 0.01 }, '>');
    tl.to(text.current, { scale: 1.2, duration: 0.1 }, '>');
    tl.to(text.current, { scale: 0.9, duration: 0.1 }, '>');
    tl.to(text.current, { scale: 1, duration: 0.1 }, '>');
  };

  const textMoveAnimation = () => {
    tl.to(text.current, {
      transform: 'translateY(-100%)',
      top: '94vh',
      left: '2.75rem',
      duration: 2,
    });
  };

  return (
    <>
      <h1
        ref={text}
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
