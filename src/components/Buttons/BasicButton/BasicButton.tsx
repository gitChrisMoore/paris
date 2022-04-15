import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  variant?: string;
  type?: 'submit' | 'button';
  [x: string | number | symbol]: unknown;
}

const BasicButton: FC<Props> = (props) => {
  const { children, type = 'button', variant = 'primary', ...params } = props;

  const handleStyle = () => {
    if (variant === 'outlined') {
      return 'outline outline-1	text-slate-800 ';
    } else if (variant === 'outlined-grow') {
      return 'grow outline outline-1	text-slate-800 ';
    } else if (variant === 'text-grow') {
      return 'grow text-slate-800 ';
    } else if (variant === 'text-bold') {
      return 'px-4 text-slate-800 text-sm	font-bold';
    } else if (variant === 'primary-grow') {
      return 'grow bg-slate-800 text-white ';
    } else {
      return 'bg-slate-800 text-white';
    }
  };

  return (
    // Snippet
    <>
      <button
        type={type}
        className={`px-6 h-10 rounded-full ${handleStyle()}`}
        {...params}>
        {children}
      </button>
    </>
  );
};

export default BasicButton;
