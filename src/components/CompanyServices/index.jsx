import { useState } from 'react';
import ServiceListItem from './ServiceListItem';
import ServiceListImage from './ServiceListImage';

const CompanyServices = () => {
  const [activeService, setActiveService] = useState(1);
  const services = [
    {
      service: 'Development',
      description: 'Elegant and innovative tech solutions',
      image: '/src/assets/images/development.png',
      imageNum: {
        src: '/src/assets/images/development-num.png',
        position: '-top-36 -right-[76px]',
      },
      alt: 'development',
    },
    {
      service: 'Design',
      description: 'Web, application, product, and UI/UX design',
      image: '/src/assets/images/design.png',
      imageNum: {
        src: '/src/assets/images/design-num.png',
        position: '-top-[140px] -right-[80px]',
      },
      alt: 'design',
    },
    {
      service: 'Marketing',
      description: 'Bridging the gap between you an your customers',
      image: '/src/assets/images/marketing.png',
      imageNum: {
        src: '/src/assets/images/marketing-num.png',
        position: '-top-32 -right-[142px]',
      },
      alt: 'marketing',
    },
    {
      service: 'Consulting',
      description:
        'Help in coming up with new ideas and finding the matching solutions',
      image: '/src/assets/images/consulting.png',
      imageNum: {
        src: '/src/assets/images/consulting-num.png',
        position: '-top-[170px] -right-[76px]',
      },
      alt: 'consulting',
    },
  ];

  return (
    <>
      <section className="flex relative h-screen w-[calc(100%-90px)] mx-auto">
        <ul className="ml-48 z-20 w-auto">
          {services.map((content, index) => (
            <ServiceListItem
              key={index}
              isActiveService={index === activeService}
              setActiveService={() => setActiveService(index)}
              content={content}
            />
          ))}
        </ul>
        <div className="absolute right-0 top-[-3rem] scale-[0.73] z-10">
          {services.map((content, index) => (
            <ServiceListImage
              key={index}
              isActiveService={index === activeService}
              content={content}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CompanyServices;
