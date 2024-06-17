import { useState, createContext } from 'react';
import CustomCursor from '@/components/utils/CustomCursor';
import useMediaQuery from '@/utils/useMediaQuery';

const CursorContext = createContext('cursorContext');

const CursorProvider = ({ children }) => {
  const { media } = useMediaQuery();
  const [cursorState, setCursorState] = useState(undefined);
  return (
    <>
      <CursorContext.Provider value={{ setCursorState }}>
        {media === 'desktop' && <CustomCursor cursorState={cursorState} />}
        {children}
      </CursorContext.Provider>
    </>
  );
};

export default CursorContext;
export { CursorProvider };
