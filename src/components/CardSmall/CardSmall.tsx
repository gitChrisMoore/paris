import { FC, ReactNode } from 'react';

interface Props {
  headline?: string;
  subhead?: string;
  supportingText?: string;
  children: ReactNode;
}

const CardSmall: FC<Props> = (props) => {
  const { headline, subhead, supportingText, children } = props;

  return (
    // Snippet
    <>
      <div className="text-xl font-medium">{headline}</div>
      <div>{subhead}</div>
      <div>{supportingText}</div>
      <div>{children}</div>
    </>
  );
};

export default CardSmall;
