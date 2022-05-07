import React from 'react';

interface Props {
  amount?: number;
  fullname?: string;
  accountNumber?: string;
}

const VirtualAccountCard: React.FC<Props> = (props) => {
  const {
    amount = 0,
    fullname = 'John Smith',
    accountNumber = '4901 29100 930192 109220 XXXX'
  } = props;

  function formatBalance(amount: number) {
    const balanceView = '$' + amount;
    return balanceView;
  }

  return (
    <div className="max-w-xs m-auto bg-slate-300 rounded-lg mt-12 h-44 shadow-md mb-4">
      <div className="grid grid-cols-12 h-full ml-4 py-2">
        <div
          className="col-span-8 row-span-4 mt-2 mb-2 /
                            text-2xl text-slate-900">
          {formatBalance(amount)}
        </div>
        <div
          className="col-span-2 row-span-4 mt-2 mb-2 /
                            text-2xl text-slate-900 font-bold">
          iBANK
        </div>

        <div
          className="col-span-12 row-span-2 mt-4 mb-2 /
                            text-md text-slate-700 font-light ">
          {accountNumber}
        </div>

        <div className="col-span-9 row-span-1"></div>
        <div className=" col-span-3 row-span-1 text-xs font-light">
          valid thru
        </div>
        <div className=" col-span-9 row-span-1">{fullname}</div>
        <div className=" col-span-3 row-span-1 pb-3">10/11</div>
      </div>
    </div>
  );
};

export default VirtualAccountCard;
