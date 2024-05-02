import {forwardRef,  HTMLProps } from "react";
import clsx, { ClassValue } from "clsx";

interface Props<T extends HTMLElement> extends HTMLProps<T> {
  errors?: string;
}

interface InputProps extends Props<HTMLInputElement> {}
interface TextareaProps extends Props<HTMLTextAreaElement> {}

export const inputClasses: ClassValue = `ring-slate-600 ring-1 rounded-md outline-none p-2 font-medium text-slate-800  w-full focus:ring-2 `;

export const InputError = ({errors}: {errors?: string}) => {
  return errors ? <p className="bg-rose-500 text-white my-2 p-2 rounded-lg">
    {errors}
  </p>: null
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ errors, ...props}, ref) => {
  const addClasses = props.className
  return (
    <label className="relative flex flex-col justify-center w-full">
      <input
        {...props}
        ref={ref}
        className={clsx(inputClasses, addClasses && addClasses)}
      />
      <InputError errors={errors} />
    </label>
  );
});

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({label, errors, ...props}, ref) => {
  return (
    <label className="relative flex flex-col justify-center">
      <textarea
        {...props}
        ref={ref}
        className={clsx(inputClasses, props.className && props.className)}
      />
      <InputError errors={errors} />
    </label>
  );
});





Textarea.displayName = "Textarea";
Input.displayName = "Input";
export default Input;