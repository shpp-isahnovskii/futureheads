import { useContext } from 'react';
import CursorContext from '@/providers/CursorProvider';

const OurClients = () => {
  const { setCursorState } = useContext(CursorContext);
  return (
    <>
      <section className="mt-20 sm:mt-[210px]">
        <div
          onMouseEnter={() => setCursorState('circle-inverse-and-growth')}
          onMouseLeave={() => setCursorState(undefined)}
          className="flex flex-wrap justify-between items-center md:py-12 md:px-10 lg:px-30 lg:py-24 border-2 max-w-[calc(100%-32px)] sm:max-w-[calc(100%-90px)] m-auto"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
            <figure
              key={key}
              className={`basis-1/3 md:basis-1/4 px-4 my-6 sm:px-8 sm:my-12 lg:px-12 xl:px-16 flex ${
                key % 4 === 0
                  ? 'justify-end'
                  : key % 4 === 1
                  ? 'justify-start'
                  : 'justify-center'
              }`}
            >
              <img
                src={`/src/assets/images/clients/${key}_logo.png`}
                alt="logo"
              />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurClients;
