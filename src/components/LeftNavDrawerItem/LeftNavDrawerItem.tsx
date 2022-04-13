//asdasd

import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  title: string;
}

const LeftNavDrawerItem: FC<Props> = (props) => {
  const { to, title } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        // Base Attributes
        'p-2 mb-1 text-lg w-full rounded-2xl hover:bg-slate-200 ' +
        (!isActive
          ? ///
            'bg-white'
          : ///
            'outline outline-2 outline-slate-800')
      }>
      <div className="mx-2">
        {''}
        {title}
      </div>
    </NavLink>
  );
};

export default LeftNavDrawerItem;
