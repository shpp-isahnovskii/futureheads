import { useContext } from 'react';
import CursorContext from '@/providers/CursorProvider';

const OurClients = () => {
  const { setCursorState } = useContext(CursorContext);
  return (
    <>
      <section className="mt-[210px]">
        <div
          onMouseEnter={() => setCursorState('circle-inverse-and-growth')}
          onMouseLeave={() => setCursorState(undefined)}
          className="flex flex-wrap justify-between items-center px-24 pt-24 pb-36 border-2 max-w-[calc(100%-90px)] m-auto"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => (
            <figure
              key={key}
              className={`basis-1/4 my-12 flex ${
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
