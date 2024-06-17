import './style.css';
import { useState } from 'react';

const GlitchImage = ({ image, alt }) => {
  const [animation, setAnimation] = useState('');
  const onMouseOverHandler = (isActive) => {
    isActive ? setAnimation('show-animation') : setAnimation('');
  };
  return (
    <>
      <div
        className={`${image.pseudoAttr} before:bg-cover after:bg-cover relative image-animation--glitch ${animation}`}
      >
        <img
          src={image.src}
          alt={alt}
          onMouseEnter={() => onMouseOverHandler(true)}
          onMouseLeave={() => onMouseOverHandler(false)}
        />
      </div>
    </>
  );
};

export default GlitchImage;
