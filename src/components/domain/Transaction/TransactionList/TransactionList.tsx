import TransactionListItem from './TransactionListItem';

const TransactionList = () => {
  const txData = [
    {
      id: '0001',
      amount: 323.82,
      type: 'Credit'
    },
    {
      id: '0002',
      amount: 123.21,
      type: 'Debit'
    },
    {
      id: '0003',
      amount: 443.21,
      type: 'Credit'
    },
    {
      id: '0004',
      amount: 212.23,
      type: 'Debit'
    },
    {
      id: '0005',
      amount: 251.21,
      type: 'Credit'
    },
    {
      id: '0006',
      amount: 91.23,
      type: 'Credit'
    },
    {
      id: '0007',
      amount: 102.12,
      type: 'Credit'
    },
    {
      id: '0008',
      amount: 123.21,
      type: 'Debit'
    },
    {
      id: '0009',
      amount: 443.21,
      type: 'Credit'
    },
    {
      id: '0010',
      amount: 212.23,
      type: 'Debit'
    },
    {
      id: '0011',
      amount: 251.21,
      type: 'Credit'
    }
  ];
  return (
    // Snippet
    <>
      <div className="shadow-md mb-2 max-w-xs mx-auto rounded-xl ">
        <div className="grid justify-items-center">
          <div className="bg-slate-100 p-4 font-light rounded-t-xl w-full">
            {' '}
            <div className="grid justify-items-center">Recent Transactions</div>
          </div>
          <div className="flex flex-wrap gap-2 ">
            {txData.map((i) => (
              <TransactionListItem
                key={i.id}
                headline={i.type}
                amount={i.amount}
                onActionClick={() => {
                  console.log('Click');
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionList;
