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
      <QRCode size={200} value={payload} />
    </>
  );
};

export default QRAccountCode;
