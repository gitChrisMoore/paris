import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const NavIcon: FC<Props> = (props) => {
  const { children } = props;

  return (
    // Snippet
    <>
      <button
        className="my-auto rounded-full h-10 w-10 flex justify-center items-center /
                                    focus:bg-stone-300 focus:outline-1 focus:outline-black /
                                    hover:bg-stone-300 hover:outline hover:outline-1 hover:outline-black ">
        {children}
      </button>
    </>
  );
};

export default NavIcon;
