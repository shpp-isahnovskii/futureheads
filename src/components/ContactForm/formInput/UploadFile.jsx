import { ErrorMessage } from '@hookform/error-message';
import AnimatedCheck from '@/components/images/AnimatedCheck';

const UploadFile = ({
  id,
  name,
  register,
  watch,
  errors,
  resetField,
  onMouseEnter,
  onMouseLeave,
}) => {
  const fileValue = watch(name);
  return (
    <>
      <div className="flex relative">
        <label
          htmlFor={id}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="px-8 py-5 tracking-[0.2em] font-bold"
        >
          UPLOAD FILE
        </label>
        <input
          {...register(name, {
            validate: {
              checkFileType: (value) => {
                if (
                  value &&
                  value[0] &&
                  !['image/jpeg', 'image/png', 'application/pdf'].includes(
                    value[0].type,
                  )
                ) {
                  return 'allowed: JPEG PNG SVG files';
                }
                return true;
              },
              checkFileSize: (value) => {
                if (value && value[0] && value[0].size > 1024 * 1024 * 3) {
                  return 'File size should be less than 3MB';
                }
                return true;
              },
            },
          })}
          id={id}
          name={name}
          type="file"
          accept="image/*,.pdf"
          hidden
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p className="error-message absolute bottom-1 left-[30px]">
              {message}
            </p>
          )}
        />
        {fileValue && !!fileValue.length && (
          <button
            type="button"
            className="my-auto w-6 h-6"
            onClick={() => resetField(name)}
          >
            <AnimatedCheck />
          </button>
        )}
      </div>
    </>
  );
};

export default UploadFile;
