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
      <div className=" max-w-xs mx-auto">
        <div className="grid justify-items-center">
          <QRCode size={150} value={payload} />
        </div>
      </div>
    </>
  );
};

export default QRAccountCode;
