import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import TextInput from './formInput/TextInput';
import TextAreaInput from './formInput/TextAreaInput';
import UploadFile from './formInput/UploadFile';
import CursorContext from '@/providers/CursorProvider';
import CustomSocialList from '@/components/utils/CustomSocialList';

const ContactForm = () => {
  const { setCursorState } = useContext(CursorContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    resetField,
  } = useForm();

  return (
    <>
      <section className="flex flex-wrap bg-white border-2 max-w-[calc(100%-32px)] sm:max-w-[calc(100%-90px)] m-auto text-black py-20 sm:py-36 xl:py-[270px] lg:px-14 xl:px-[130px] justify-center">
        <h3 className="basis-full px-4 md:px-8 lg:px-0 text-3xl sm:text-4xl leading-snug tracking-wide max-w-7xl">
          Otherwise we can contact you! <br /> Just fill in your details and
          we&lsquo;ll respond in 24 hours.
        </h3>
        <div className="flex flex-col lg:flex-row justify-between w-full lg:mt-20 max-w-7xl">
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="flex flex-col lg:flex-row lg:flex-wrap w-full lg:w-[760px] items-start px-4 md:px-8 lg:px-0 [&>*]:w-full [&>*]:mt-10 lg:[&>*]:mt-0 mb-16"
          >
            <TextInput
              id="name"
              register={register}
              watch={watch}
              errors={errors}
              validations={{ required: 'required field' }}
              disabled={isSubmitting}
              name="name"
              label="Name*"
              className="basis-[29.75%] mr-[5.333%]"
            />
            <TextInput
              id="email"
              register={register}
              watch={watch}
              errors={errors}
              validations={{
                required: 'required field',
                pattern: {
                  value: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'invalid email',
                },
              }}
              disabled={isSubmitting}
              name="email"
              label="Email*"
              className="basis-[29.75%] mr-[5.333%]"
            />
            <TextInput
              id="phone"
              register={register}
              watch={watch}
              errors={errors}
              disabled={isSubmitting}
              name="phone"
              label="Phone"
              className="basis-[29.833%]"
            />
            <TextAreaInput
              id="message"
              register={register}
              watch={watch}
              disabled={isSubmitting}
              name="message"
              label="Message"
              className="basis-full mt-10 mb-4 lg:mb-16"
            />
            <div className='flex flex-wrap'>
              <button
                onMouseEnter={() => setCursorState('circle-growth')}
                onMouseLeave={() => setCursorState(undefined)}
                type="submit"
                className="w-full sm:w-auto px-8 py-5 border-2 border-black tracking-[0.2em] font-bold hover:bg-black hover:text-white transition-colors duration-300"
                disabled={isSubmitting}
              >
                SEND MESSAGE
              </button>
              <UploadFile
                className={'flex justify-center w-full mt-4 sm:mt-0 sm:w-auto'}
                onMouseEnter={() => setCursorState('circle-growth')}
                onMouseLeave={() => setCursorState(undefined)}
                id="file"
                name="file"
                register={register}
                watch={watch}
                resetField={resetField}
                errors={errors}
              />
            </div>
          </form>
          <div className="px-4 md:px-8 lg:px-0 w-full lg:ml-10 xl:ml-0 lg:w-[250px]">
            <p className="mb-7">
              We are always happy to discuss Your ideas, products and projects!
            </p>
            <a href="tel:+380990667188" className="block font-bold mb-1">
              +38 099 066 71 88
            </a>
            <a
              href="mailto:tomorrowheads@gmail.com"
              className="block font-bold mb-1"
            >
              tomorrowheads@gmail.com
            </a>
            <p className="font-bold mb-6">Kyiv, Ukraine</p>
            <p className="mb-4">Social:</p>
            <CustomSocialList className="*:mr-5" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
