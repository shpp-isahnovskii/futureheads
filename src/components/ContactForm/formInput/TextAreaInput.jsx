import { useEffect, useRef, useImperativeHandle } from 'react';
import FormInputWrapper from '.';

const TextAreaInput = ({
  id,
  label,
  name,
  register,
  watch,
  disabled,
  className,
}) => {
  const textAreaRef = useRef(null);
  const { ref, ...rest } = register(name, { required: true });
  useImperativeHandle(ref, () => textAreaRef.current);

  useEffect(() => {
    const textarea = textAreaRef.current;
    const handleAreaHeight = () => {
      //TODO: resize textarea handler
    };

    textarea.addEventListener('keyup', handleAreaHeight);
    return () => {
      textarea.removeEventListener('keyup', handleAreaHeight);
    };
  }, []);

  const inputValue = watch(name, '');
  return (
    <>
      <FormInputWrapper
        id={id}
        label={label}
        name={name}
        isNotEmpty={!!inputValue}
        className={className}
      >
        <textarea
          ref={textAreaRef}
          {...rest}
          id={id}
          className="border-b-2 border-black mt-5 peer w-full overflow-y-hidden resize-y h-auto"
          rows="1"
          disabled={disabled}
        />
      </FormInputWrapper>
    </>
  );
};

export default TextAreaInput;
