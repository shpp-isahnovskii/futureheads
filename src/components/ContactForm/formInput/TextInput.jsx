import FormInputWrapper from '.';
import { ErrorMessage } from '@hookform/error-message';

const TextInput = ({ id, label, name, register, watch, errors, validations, disabled, className }) => {
  const inputValue = watch(name, '');
  return (
    <>
      <FormInputWrapper id={id} label={label} name={name} isNotEmpty={!!inputValue} className={className}>
        <input
          id={id}
          {...register(name, validations ? validations : {})}
          className="border-b-2 border-black mt-5 peer w-full"
          type="text"
          autoComplete="nope"
          disabled={disabled}
        />
        <ErrorMessage errors={errors} name={name} render={({ message }) => <p className="error-message">{message}</p>} />
      </FormInputWrapper>
    </>
  );
};

export default TextInput;
