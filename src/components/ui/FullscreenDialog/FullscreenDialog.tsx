import React, { useRef } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';
import BasicButton from '../../Buttons/BasicButton/BasicButton';
import ArrowLeft from '../icons/ArrowLeft';
import NavIcon from '../NavIcon/NavIcon';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
  handleSave: () => void;
  title: string;
  saveText: string;
}

const FullscreenDialog: React.FC<Props> = (props) => {
  const { isOpen, setIsOpen, handleSave, title, saveText } = props;

  const handleClose = () => {
    console.log('Close');
    setIsOpen(!isOpen);
  };

  // Area detecting clicks outside
  const divRef = useRef<HTMLDivElement>(null);
  useOutsideClick(isOpen, divRef, () => {
    handleClose();
  });

  const closeIcon = <ArrowLeft />;

  const TopAppBar = (
    <div className="flex sticky top-0 h-12 z-20 justify-between content-center">
      <div className="flex">
        <div onClick={handleClose} className="my-auto">
          <NavIcon>{closeIcon}</NavIcon>
        </div>
        <div className="my-auto mx-2">{title}</div>
      </div>
      <div onClick={handleSave} className="flex my-auto">
        <BasicButton variant="text-bold">{saveText}</BasicButton>
      </div>
    </div>
  );

  const Content = (
    <div className="max-h-screen h-full sm:h-auto ">{props.children}</div>
  );

  const ModalBackground = (
    <div
      className={` ${
        isOpen ? 'opacity-40 fixed inset-0 z-10 bg-black' : ''
      } `}></div>
  );

  return (
    <>
      <div
        className={`fixed inset-0 z-20 transistion transform duration-75 ease-in-out 
                ${isOpen ? 'active' : '-translate-x-full'} `}>
        <div
          ref={divRef}
          className="flex flex-col p-2 bg-white w-full h-full  / 
                     sm:h-auto sm:mx-auto sm:w-96 sm:mt-20 sm:rounded-xl">
          {TopAppBar}
          {Content}
        </div>
      </div>
      {ModalBackground}
    </>
  );
};

export default FullscreenDialog;
