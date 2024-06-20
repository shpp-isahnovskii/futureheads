import { useState, useContext } from 'react';
import ServiceListItem from './ServiceListItem';
import ServiceListImage from './ServiceListImage';
import CursorContext from '@/providers/CursorProvider';
import useMediaQuery from '@/utils/useMediaQuery';

const CompanyServices = () => {
  const { media } = useMediaQuery();
  const { setCursorState } = useContext(CursorContext);

  const [activeService, setActiveService] = useState(0);
  const services = [
    {
      service: 'Development',
      description: 'Elegant and innovative tech solutions',
      image: {
        src: '/src/assets/images/development.webp',
        pseudoAttr:
          "before:bg-[url('/src/assets/images/development.webp')] after:bg-[url('/src/assets/images/development.webp')]",
      },
      imageNum: {
        src: '/src/assets/images/development-num.png',
        position: '-top-8 lg:-top-36 lg:-right-16 w-12 sm:w-32 md:w-36 lg:w-48 xl:w-64',
      },
      alt: 'development',
    },
    {
      service: 'Design',
      description: 'Web, application, product, and UI/UX design',
      image: {
        src: '/src/assets/images/design.webp',
        pseudoAttr:
          "before:bg-[url('/src/assets/images/design.webp')] after:bg-[url('/src/assets/images/design.webp')]",
      },
      imageNum: {
        src: '/src/assets/images/design-num.png',
        position: '-top-4 lg:-top-36 xl:-top-[100px] lg:-right-12 xl:-right-[54px] w-16 sm:w-36 md:w-48 md:w-56 lg:w-[300px] xl:w-[420px]',
      },
      alt: 'design',
    },
    {
      service: 'Marketing',
      description: 'Bridging the gap between you an your customers',
      image: {
        src: '/src/assets/images/marketing.webp',
        pseudoAttr:
          "before:bg-[url('/src/assets/images/marketing.webp')] after:bg-[url('/src/assets/images/marketing.webp')]",
      },
      imageNum: {
        src: '/src/assets/images/marketing-num.png',
        position: '-top-5 lg:-top-32 xl:-top-[120px] lg:-right-20 w-16 sm:w-36 md:w-48 md:w-56 lg:w-80 xl:w-[440px]',
      },
      alt: 'marketing',
    },
    {
      service: 'Consulting',
      description:
        'Help in coming up with new ideas and finding the matching solutions',
      image: {
        src: '/src/assets/images/consulting.webp',
        pseudoAttr:
          "before:bg-[url('/src/assets/images/consulting.webp')] after:bg-[url('/src/assets/images/consulting.webp')]",
      },
      imageNum: {
        src: '/src/assets/images/consulting-num.png',
        position: '-top-[1.62rem] lg:-top-[90px] xl:-top-[130px] lg:-right-10 xl:-right-[60px] w-16 sm:w-36 md:w-48 md:w-56 lg:w-80 xl:w-[460px]',
      },
      alt: 'consulting',
    },
  ];

  return (
    <>
      <section className="flex pt-10 md:pt-0 md:px-7 lg:px-11 mx-auto">
        <div className='relative w-full h-fit max-w-screen-2xl mx-auto'>
          <ul className="px-4 sm:px-4 lg:px-0 xl:ml-48 w-full md:max-w-[33%]">
            {services.map((content, index) => (
              <ServiceListItem
                key={index}
                isActiveService={index === activeService}
                setActiveService={() => setActiveService(index)}
                content={content}
                onMouseEnter={() => setCursorState('circle-growth')}
                onMouseLeave={() => setCursorState(undefined)}
                className="h-24 mb-9 sm:h-44 md:h-32"
              >
                {media === 'mobile' && (
                  <ServiceListImage
                    className={`top-2 sm:-top-1 right-4 sm:right-8 ${
                      index === activeService ? '' : 'grayscale'
                    }`}
                    key={index}
                    isActiveService={index === activeService}
                    content={content}
                  />
                )}
                {/* <picture className="absolute top-0 right-0 w-36">
                <source srcSet={content.image.src} media="(min-width: 320px)" />
                <img src={content.image.src} alt={content.image.alt} />
              </picture> */}
              </ServiceListItem>
            ))}
          </ul>
          {media !== 'mobile' && (
            <div>
              {services.map((content, index) => (
                <ServiceListImage
                  key={index}
                  isActiveService={index === activeService}
                  content={content}
                  className={`top-1/2 -translate-y-1/2 right-5 md:right-10 ${
                    index === activeService ? 'block' : 'hidden'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CompanyServices;
