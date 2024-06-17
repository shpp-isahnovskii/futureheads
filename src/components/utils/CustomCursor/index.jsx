import useMouseMove from '@/utils/useMouseMove';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';

const CustomCursor = ({ cursorState }) => {
  const { x, y } = useMouseMove();
  const cursor = useRef(null);

  const tlGrowth = useMemo(() => gsap.timeline(), []);
  const tlInverse = useMemo(() => gsap.timeline(), []);

  let isGrowing = useMemo(
    () =>
      [
        'circle-growth',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'arrow-down',
        'circle-inverse-and-growth',
      ].includes(cursorState),
    [cursorState],
  );
  let isBlendReversed = useMemo(
    () =>
      ['circle-inverse-and-growth', 'circle-inverse'].includes(cursorState),
    [cursorState],
  );

  useGSAP(
    () => {
      tlGrowth.to(cursor.current, {
        attr: { r: 37 },
        strokeWidth: 2,
        duration: 0.1,
        ease: 'linear',
      });
      tlGrowth.pause();

      tlInverse.to(cursor.current, {
        attr: { stroke: 'none', fill: '#FFFFFF' },
        duration: 0.1,
        ease: 'linear',
      });
      tlInverse.pause();
    },
    { scope: cursor, dependencies: [] },
  );

  useGSAP(
    () => {
      if (isBlendReversed) {
        tlInverse.play();
      } else {
        tlInverse.reverse();
      }
      if (isGrowing) {
        tlGrowth.play();
      } else {
        tlGrowth.reverse();
      }
    },
    { scope: cursor, dependencies: [cursorState] },
  );

  return (
    <>
      {createPortal(
        <svg
          className={`fixed -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none ${
            isBlendReversed ? 'mix-blend-difference' : ''
          }`}
          style={{ top: y, left: x }}
          width="76"
          height="76"
          viewBox="0 0 76 76"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            ref={cursor}
            cx="38"
            cy="38"
            r="27"
            strokeWidth="1"
            fill="none"
            stroke="#FFED00"
          ></circle>

          <path
            style={{ display: cursorState === 'arrow-down' ? 'block' : 'none' }}
            d="M37.2812 26.0156L37.2812 47.5244L33.7355 43.9614C33.3398 43.5638 32.6968 43.5623 32.2992 43.958C31.9016 44.3537 31.9001 44.9968 32.2957 45.3943L37.577 50.7012C37.5773 50.7015 37.5777 50.7018 37.578 50.7021C37.9736 51.0986 38.6188 51.0999 39.0158 50.7022C39.0161 50.7018 39.0164 50.7016 39.0167 50.7013L44.298 45.3944C44.6936 44.9969 44.6922 44.3538 44.2945 43.9581C43.897 43.5624 43.2539 43.5639 42.8582 43.9615L39.3125 47.5244L39.3125 26.0156C39.3125 25.4547 38.8578 25 38.2969 25C37.7359 25 37.2812 25.4547 37.2812 26.0156Z"
            fill="#FFED00"
          ></path>

          <path
            style={{ display: cursorState === 'arrow-left' ? 'block' : 'none' }}
            d="M16.4756 37.6533L20.0386 34.1076C20.4362 33.7119 20.4377 33.0688 20.042 32.6713C19.6463 32.2737 19.0032 32.2722 18.6057 32.6678L13.2988 37.9491L13.2979 37.95C12.9014 38.3457 12.9001 38.9908 13.2978 39.3879L13.2987 39.3888L18.6056 44.6701C19.0031 45.0656 19.6462 45.0643 20.0419 44.6666C20.4376 44.269 20.4361 43.626 20.0385 43.2303L16.4756 39.6846C16 38.8721 16 38.3721 16.4756 37.6533Z"
            fill="#FFED00"
          ></path>
          <path
            style={{
              display: cursorState === 'arrow-right' ? 'block' : 'none',
            }}
            d="M60.2344 39.3125L56.6714 42.8583C56.2738 43.2539 56.2723 43.897 56.668 44.2945C57.0636 44.6922 57.7067 44.6936 58.1043 44.298L63.4111 39.0168L63.4121 39.0158C63.8086 38.6201 63.8099 37.975 63.4122 37.578L63.4112 37.577L58.1044 32.2958C57.7069 31.9002 57.0638 31.9015 56.6681 32.2992C56.2724 32.6968 56.2739 33.3398 56.6715 33.7355L60.2344 37.2813C60.71 38.0937 60.71 38.5937 60.2344 39.3125Z"
            fill="#FFED00"
          ></path>

          <path
            style={{ display: cursorState === 'arrow-up' ? 'block' : 'none' }}
            d="M38.7188 49.9844L38.7188 28.4756L42.2645 32.0386C42.6602 32.4362 43.3032 32.4377 43.7008 32.042C44.0984 31.6463 44.0999 31.0032 43.7043 30.6057L38.423 25.2988C38.4227 25.2985 38.4223 25.2982 38.422 25.2979C38.0264 24.9014 37.3812 24.9001 36.9842 25.2978C36.9839 25.2982 36.9836 25.2984 36.9833 25.2987L31.702 30.6056C31.3064 31.0031 31.3078 31.6462 31.7055 32.0419C32.103 32.4376 32.7461 32.4361 33.1418 32.0385L36.6875 28.4756L36.6875 49.9844C36.6875 50.5453 37.1422 51 37.7031 51C38.2641 51 38.7188 50.5453 38.7188 49.9844Z"
            fill="#FFED00"
          ></path>
        </svg>,
        document.getElementById('root'),
      )}
    </>
  );
};

export default CustomCursor;
