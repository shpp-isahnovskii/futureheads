import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import useScreenSize from '@/utils/useScreenResize';

const ScrollingText = () => {
  const container = useRef(null);

  const firstRow = useRef(null);
  const secondRow = useRef(null);
  const thirdRow = useRef(null);

  const timelineOne = gsap.timeline();
  const timelineTwo = gsap.timeline();
  const timelineThree = gsap.timeline();

  const devTools = [
    {
      ref: firstRow,
      timeline: timelineOne,
      keyword: [
        'Kotlin',
        'Objective-c',
        'Swift',
        'Dart',
        'JavaScript',
        'React',
        'NodeJS',
        'HTML/CSS',
        'Python',
        'Java',
        'Go',
        'PHP',
        'Wordpress',
      ],
    },
    {
      ref: secondRow,
      timeline: timelineTwo,
      keyword: [
        'Dart',
        'React',
        'Kotlin',
        'Java',
        'NodeJS',
        'Objective-c',
        'Swift',
        'HTML/CSS',
        'JavaScript',
        'Wordpress',
        'Go',
        'Python',
        'PHP',
      ],
    },
    {
      ref: thirdRow,
      timeline: timelineThree,
      keyword: [
        'Photoshop',
        'Adobe-XD',
        'Sketch',
        'Figma',
        'Invision',
        'Zeplin',
        'After',
        'Effects',
        'Premiere Pro',
        'Illustrator',
        'InDesign',
        'Blender',
      ],
    },
  ];

  const { screenWidth } = useScreenSize();
  useGSAP(
    () => {
      timelineOne.fromTo(
        firstRow.current,
        { translateX: 0 },
        {
          translateX: -(firstRow.current.offsetWidth - screenWidth),
          yoyo: true,
          repeat: -1,
          duration: 50,
          ease: 'none',
        },
      );
      timelineTwo.fromTo(
        secondRow.current,
        {
          translateX: -secondRow.current.offsetWidth / 2 - screenWidth,
        },
        {
          translateX: 0,
          duration: 70,
          yoyo: true,
          repeat: -1,
          ease: 'none',
        },
      );
      timelineThree.fromTo(
        thirdRow.current,
        { translateX: 0 },
        {
          translateX: -(thirdRow.current.offsetWidth - screenWidth),
          yoyo: true,
          repeat: -1,
          duration: 80,
          ease: 'none',
        },
      );
    },
    { scope: container },
  );

  const handleMouseOver = (timeline, isPaused) => {
    isPaused ? timeline.pause() : timeline.play();
  };

  return (
    <>
      <section
        ref={container}
        className="h-screen text-[200px] font-bold leading-[1.1]"
      >
        {devTools.map((row, rowKey) => (
          <ul ref={row.ref} key={rowKey} className="flex w-fit">
            {row.keyword.map((listItem, key) => (
              <li
                className={
                  'text-nowrap text-stroke--bold hover:text-white text-black'
                }
                key={key}
                onMouseEnter={() => handleMouseOver(row.timeline, true)}
                onMouseLeave={() => handleMouseOver(row.timeline, false)}
              >
                {key !== 0 ? '\u00A0' : ''}
                {listItem}
              </li>
            ))}
          </ul>
        ))}
      </section>
    </>
  );
};

export default ScrollingText;
