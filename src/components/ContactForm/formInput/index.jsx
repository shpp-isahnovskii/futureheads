const FormInputWrapper = ({
  id,
  label,
  className,
  isNotEmpty,
  children,
}) => {
  return (
    <>
      <div className={`relative ${className}`}>
        {children}
        <label
          htmlFor={id}
          className={`block text-lg absolute peer-focus:text-xs peer-focus:top-1 top-2 transition-all duration-300 ${isNotEmpty ? 'top-1 text-xs' : ''}`}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default FormInputWrapper;
