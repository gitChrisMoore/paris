import { FC, ReactNode } from 'react';

interface Props {
  initials?: ReactNode;
}

const NavAvatar: FC<Props> = (props) => {
  const { initials = 'LI' } = props;
  return (
    // Snippet
    <>
      <button className="bg-slate-300 my-auto rounded-full text-sm h-10 w-10">{initials}</button>
    </>
  );
};

export default NavAvatar;
