import { FC } from 'react';
import NavIcon from './NavIcon';

interface Props {
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
}

const NavButton: FC<Props> = (props) => {
  const { isNavOpen, setIsNavOpen } = props;

  return (
    // Snippet
    <>
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="my-auto rounded-full h-10 w-10 text-sm flex justify-center items-center /
                                    focus:bg-stone-300 focus:outline-1 focus:outline-black /
                                    hover:bg-stone-300 hover:outline hover:outline-1 hover:outline-black ">
        <NavIcon />
      </button>
    </>
  );
};

export default NavButton;
