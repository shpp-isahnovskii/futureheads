import { useContext } from 'react';
import CursorContext from '@/providers/CursorProvider';
import CustomSocialList from '@/components/utils/CustomSocialList';
import useMediaQuery from '@/utils/useMediaQuery';

const PageFooter = () => {
  const { setCursorState } = useContext(CursorContext);
  const { media } = useMediaQuery();
  return (
    <>
      {media === 'desktop' && (
        <footer className="flex justify-between pt-40 pb-44 max-w-[calc(100%-90px)] m-auto px-12 xl:px-32">
          <div className="flex">
            <div className="border-r-2 pr-16 xl:pr-24 mr-16 xl:mr-24">
              <p className="text-4xl mb-12 mt-1">
                tomorrow
                <br />
                heads
                <span className="inline-block border-2 border-white rounded-full ml-3 -mb-[4px] w-[32px] h-[32px]" />
              </p>
              <p className="leading-[1.25rem]">
                Your guide into tomorrow
                <br />
                2020 All rights reserved.
              </p>
            </div>
            <ul className="flex flex-col justify-around text-lg [&>*]:transition-all [&>*:hover]:text-xl">
              <li
                onMouseEnter={() => setCursorState('circle-growth')}
                onMouseLeave={() => setCursorState(undefined)}
              >
                Home
              </li>
              <li
                onMouseEnter={() => setCursorState('circle-growth')}
                onMouseLeave={() => setCursorState(undefined)}
              >
                About
              </li>
              <li
                onMouseEnter={() => setCursorState('circle-growth')}
                onMouseLeave={() => setCursorState(undefined)}
              >
                Services
              </li>
              <li
                onMouseEnter={() => setCursorState('circle-growth')}
                onMouseLeave={() => setCursorState(undefined)}
              >
                Work
              </li>
              <li
                onMouseEnter={() => setCursorState('circle-growth')}
                onMouseLeave={() => setCursorState(undefined)}
              >
                Contact
              </li>
            </ul>
          </div>

          <div className="w-[250px] text-right">
            <p className="mb-7">
              We are always happy to discuss Your ideas, products and projects!
            </p>
            <a href="tel:+33333333333" className="block font-bold mb-1">
              +33 333 333 33 33
            </a>
            <a
              href="mailto:tomorrowheads@gmail.com"
              className="block font-bold mb-1"
            >
              tomorrowheads@gmail.com
            </a>
            <p className="font-bold mb-6">Kyiv, Ukraine</p>
            <CustomSocialList className="justify-end *:ml-5" />
          </div>
        </footer>
      )}
    </>
  );
};

export default PageFooter;
