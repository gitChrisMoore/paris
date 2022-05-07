import { FC } from 'react';

export interface TransactionListItemProps {
  headline: string;
  amount: number;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onActionClick: (v: any) => void;
}

const TransactionListItem: FC<TransactionListItemProps> = (props) => {
  const { headline, amount } = props;
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between p-4">
          <div>{headline}</div>
          <div>{amount}</div>
        </div>
      </div>
    </>
  );
};

export default TransactionListItem;
