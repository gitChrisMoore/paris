import { useEffect } from 'react';

const useOutsideClick = (
  isOpen: boolean,
  ref: React.RefObject<HTMLDivElement>,
  handler: { (): void; (): void }
) => {
  useEffect(() => {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const checkIfClickedOutside = (e: any) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpen]);
};

export default useOutsideClick;
