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
      <section className="flex flex-wrap bg-white max-w-[calc(100%-90px)] m-auto text-black py-[270px] px-[130px]">
        <h3 className="basis-full text-4xl leading-snug tracking-wide">
          Otherwise we can contact you! <br /> Just fill in your details and
          we&lsquo;ll respond in 24 hours.
        </h3>
        <div className="flex justify-between w-full mt-20">
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="flex flex-wrap w-[760px] items-start"
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
              className="basis-full mt-10 mb-16"
            />
            <button
              onMouseEnter={() => setCursorState('circle-growth')}
              onMouseLeave={() => setCursorState(undefined)}
              type="submit"
              className="px-8 py-5 border-2 border-black tracking-[0.2em] font-bold hover:bg-black hover:text-white transition-colors duration-300"
              disabled={isSubmitting}
            >
              SEND MESSAGE
            </button>
            <UploadFile
              onMouseEnter={() => setCursorState('circle-growth')}
              onMouseLeave={() => setCursorState(undefined)}
              id="file"
              name="file"
              register={register}
              watch={watch}
              resetField={resetField}
              errors={errors}
            />
          </form>
          <div className="w-[250px]">
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
