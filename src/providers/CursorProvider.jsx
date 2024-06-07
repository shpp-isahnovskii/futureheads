import { useState, createContext } from 'react';
import CustomCursor from '@/components/utils/CustomCursor';

const CursorContext = createContext('cursorContext');

const CursorProvider = ({ children }) => {
  const [cursorState, setCursorState] = useState(undefined);
  return (
    <>
      <CursorContext.Provider value={{setCursorState}}>
        <CustomCursor cursorState={cursorState} />
        {children}
      </CursorContext.Provider>
    </>
  );
};

export default CursorContext;
export { CursorProvider };
