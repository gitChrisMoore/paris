import { FC } from 'react';
import NavAvatar from '../NavAvatar/NavAvatar';
import NavButton from '../NavButton/NavButton';

interface Props {
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
}

const TopAppBarBrand: FC<Props> = (props) => {
  const { isNavOpen, setIsNavOpen } = props;

  return (
    // Snippet
    <>
      <nav className="sticky top-0 bg-white back h-12	z-20 flex justify-between content-center">
        <NavButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </nav>
    </>
  );
};

export default TopAppBarBrand;
