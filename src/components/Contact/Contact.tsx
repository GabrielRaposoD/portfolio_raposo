import * as yup from 'yup';

import { SubmitHandler, useForm } from 'react-hook-form';

import { ActionButton } from 'components/ActionButton';
import { CustomInput } from 'components/CustomInput';
import { SectionTitle } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';

interface ContactProps {
  title: string;
  namePlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  button: string;
}

type contactInputs = {
  email: string;
  name: string;
  message: string;
  subject: string;
};

const contactSchema = yup
  .object({
    email: yup.string().required().email(),
    name: yup.string().required().min(3),
    subject: yup.string().required().min(5),
    message: yup.string().required().min(20),
  })
  .required();

const Contact: React.FC<ContactProps> = ({
  button,
  messagePlaceholder,
  namePlaceholder,
  subjectPlaceholder,
  title,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<contactInputs>({ resolver: yupResolver(contactSchema) });
  const onSubmit: SubmitHandler<contactInputs> = (data) => console.log(data);

  return (
    <section
      className='bg-lighterGray w-full py-[100px] bg-contact-bg bg-no-repeat bg-cover px-8 xl:px-0'
      id='contact'
    >
      <div className='container flex flex-col items-center justify-center mx-auto'>
        <SectionTitle title={title} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='lg:w-1/2 flex flex-col w-full'
        >
          <div className='gap-x-8 lg:flex-row flex flex-col w-full'>
            <CustomInput
              type='text'
              placeholder={namePlaceholder}
              {...register('name')}
              error={errors.name}
            />
            <CustomInput
              type='text'
              placeholder={subjectPlaceholder}
              {...register('subject')}
              error={errors.subject}
            />
          </div>
          <CustomInput
            type='email'
            placeholder='Email'
            {...register('email')}
            error={errors.email}
          />
          <CustomInput
            type='textarea'
            placeholder={messagePlaceholder}
            {...register('message')}
            error={errors.message}
            rows={7}
          />
          <hr className='w-0 h-0 mb-8' />
          <ActionButton text={button} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
