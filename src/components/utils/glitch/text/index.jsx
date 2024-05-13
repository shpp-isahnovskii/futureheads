import './style.css';

const GlitchText = ({ children }) => {
  return (
    <>
      <span inner-text={children} className="text-animation--glitch text-black">
        {children}
      </span>
    </>
  );
};

export default GlitchText;
