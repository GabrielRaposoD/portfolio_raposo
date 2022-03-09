/* eslint-disable react/display-name */

import React, { createElement, forwardRef } from 'react';

import { FieldError } from 'react-hook-form';
import cs from 'clsx';

interface CustomInputProps {
  error?: FieldError | undefined;
}

type CustomInputType = CustomInputProps &
  (
    | React.InputHTMLAttributes<HTMLInputElement>
    | React.TextareaHTMLAttributes<HTMLTextAreaElement>
  );

const Element = forwardRef((props: any, ref) => {
  return createElement(props.type === 'textarea' ? 'textarea' : 'input', {
    ...props,
    className: cs(
      'bg-transparent border-b border-solid border-[#353535] text-[14px] text-white py-[15px] outline-none placeholder:opacity-[60%] w-full',
      {
        'border-red-500': props.error,
      }
    ),
    ref,
  });
});

const CustomInput: React.FC<CustomInputType> = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  CustomInputType
>((props, ref) => {
  return <Element {...props} ref={ref} />;
});

export default CustomInput;
