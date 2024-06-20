const ScrollingText = () => {
  const devTools = [
    [
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
    [
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
    [
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
  ];

  return (
    <>
      <section className=" my-10 overflow-hidden text-5xl md:text-9xl lg:text-[200px] font-bold leading-[1.1] [&>*:nth-child(odd)]:animation-running-text--forward [&>*:nth-child(even)]:animation-running-text--backward [&>*:nth-child(3)]:!animation-duration-[90s]">
        {devTools.map((row, rowKey) => (
          <ul key={rowKey} className="flex w-fit">
            {row.map((listItem, key) => (
              <li
                className={
                  'text-nowrap text-stroke md:text-stroke--bold hover:text-white text-black'
                }
                key={key}
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
