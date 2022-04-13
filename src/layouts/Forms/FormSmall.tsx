import { FC, ReactNode } from 'react';

interface Props {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}

const FormSmall: FC<Props> = (props) => {
  const { title, subtitle, children } = props;

  return (
    // Snippet
    <>
      <div className="max-w-sm mx-auto">
        {title ? <div className="text-lg font-medium mb-2">{title}</div> : <></>}
        {title ? <div className="font-light mb-4">{subtitle}</div> : <></>}
        {children}
      </div>
    </>
  );
};

export default FormSmall;
