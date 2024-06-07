import { useContext } from 'react';
import CursorContext from '@/providers/CursorProvider';

const HeaderComponent = () => {
  const { setCursorState } = useContext(CursorContext);
  return (
    <>
      <a
        href="#"
        onMouseEnter={() => setCursorState('circle-growth')}
        onMouseLeave={() => setCursorState(undefined)}
      >
        <p className="text-left text-lg font-bold leading-[1.2em]">
          tomorrow
          <br />
          heads
          <span className="inline-block border border-white rounded-full ml-2 -mb-[2px] w-[18px] h-[18px]" />
        </p>
      </a>
    </>
  );
};

export default HeaderComponent;
