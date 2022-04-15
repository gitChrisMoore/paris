import React, { useEffect, useRef } from 'react';

interface Props {
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}

const LeftNavDrawer: React.FC<Props> = (props) => {
  const { isNavOpen, setIsNavOpen } = props;

  const divRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const toggleIsOpen = (e?: any) => {
    e.preventDefault();
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const checkIfClickedOutside = (e: any) => {
      if (isNavOpen && divRef.current && !divRef.current.contains(e.target)) {
        toggleIsOpen(e);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isNavOpen]);

  return (
    <>
      <div
        className={`transistion transform duration-200 ease-in-out m-auto flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none
                ${isNavOpen ? 'active' : '-translate-x-full'} `}>
        <div className="justify-items-start mt-10 m-2 pt-1 ">
          {/*content*/}
          <div
            ref={divRef}
            className="border-0 m-2 p-2 rounded-2xl shadow-lg relative flex flex-col w-60 bg-white outline-none focus:outline-none">
            {props.children}
          </div>
        </div>
      </div>
      {/* Modal background */}
      <div
        className={` ${
          isNavOpen ? 'opacity-25 fixed inset-0 z-10 bg-black' : ''
        } `}></div>
    </>
  );
};

export default LeftNavDrawer;
