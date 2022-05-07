import { useEffect, useState } from 'react';
import { useProjectContext } from '../../../../contexts/Project';
import QRCode from 'qrcode.react';

const QRAccountCode = () => {
  const { accounts } = useProjectContext();
  const [payload, setPayload] = useState('asd');

  useEffect(() => {
    if (accounts && accounts[0] && accounts[0].user_id) {
      setPayload(accounts[0].user_id);
    }
  }, [accounts]);

  return (
    // Snippet
    <>
      <div className="shadow-md mb-2 max-w-xs mx-auto rounded-xl ">
        <div className="grid justify-items-center">
          <div className="bg-slate-100 p-4 font-light rounded-t-xl w-full">
            {' '}
            <div className="grid justify-items-center">
              Present this code during checkout as payment!{' '}
            </div>
          </div>
          <div className="grid py-8  justify-items-center">
            <QRCode size={150} value={payload} />
          </div>
          <div className="grid py-8 border-t w-full border-slate-300 justify-items-center">
            <div className="font-light text-xl">$0.00</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QRAccountCode;
