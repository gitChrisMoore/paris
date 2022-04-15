import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  errorText?: string;
  id: string;
  label: string;
}

const InputFieldWrapper: FC<Props> = (props) => {
  const { id, label, errorText, children } = props;

  return (
    <>
      <div
        className="grow bg-slate-100 pt-2 mb-0.5 rounded-t-md border-b border-slate-600 /
                           focus-within:bg-slate-200 focus-within:mb-px focus-within:border-b-2 focus-within:border-violet-500">
        <div className="ml-3 relative grow  mt-2 z-10 ">
          {children}
          <label
            htmlFor={id}
            className="absolute -top-1 -z-1 duration-300 origin-0">
            {label}
          </label>
        </div>
      </div>
      {errorText ? (
        <div className="ml-3 text-xs text-red-600">{errorText}</div>
      ) : (
        <div className="ml-3 text-xs">{`\u00a0`}</div>
      )}
    </>
  );
};

export default InputFieldWrapper;
