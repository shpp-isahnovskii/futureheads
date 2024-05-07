import './style.css';

const GlitchText = ({ children }) => {
  return (
    <>
      <span inner-text={children} className="text-animation--glitch">
        {children}
      </span>
    </>
  );
};

export default GlitchText;
