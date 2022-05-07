import { ElementType } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface INavItem {
  label: string;
  route: string;
  inactiveIcon: ElementType;
  activeIcon: ElementType;
}

const BottomNavBar = () => {
  const { state: activeLocation } = useLocation();
  const navigate = useNavigate();

  const handleactiveNavChange = (nav: INavItem) => {
    navigate(nav.route, { state: nav.label });
  };

  const dashboardPathInactive = (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  );

  const dashboardPath = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-500"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );

  const scanPathInactive = (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
    />
  );

  const scanPath = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-500"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path
        fillRule="evenodd"
        d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z"
        clipRule="evenodd"
      />
      <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
    </svg>
  );

  const accountPathInactive = (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  );

  const accountPath = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-500"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
      <path
        fillRule="evenodd"
        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
        clipRule="evenodd"
      />
    </svg>
  );

  const profilePathInactive = (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  );

  const userPath = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-500"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </svg>
  );

  const navList = [
    {
      label: 'Dashboard',
      route: '/customer/customer-dashboard',
      inactiveIcon: dashboardPathInactive,
      activeIcon: dashboardPath
    },
    {
      label: 'Scan',
      route: '/app/scan',
      inactiveIcon: scanPathInactive,
      activeIcon: scanPath
    },
    {
      label: 'Account',
      route: '/app/account',
      inactiveIcon: accountPathInactive,
      activeIcon: accountPath
    },
    {
      label: 'Profile',
      route: '/app/profile',
      inactiveIcon: profilePathInactive,
      activeIcon: userPath
    }
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-slate-100 flex justify-between text-xs text-blue-900 uppercase">
      {navList.map((navItem: any) => (
        <button
          key={navItem.label}
          onClick={() => handleactiveNavChange(navItem)}
          className="w-full block py-1  text-center hover:bg-slate-200 transition duration-300">
          <div
            className={`transition-all duration-300 w-16 py-0.5 mt-0.5 mx-auto rounded-full  \
                              ${
                                activeLocation === navItem.label
                                  ? 'bg-slate-300   '
                                  : ''
                              } \
                              focus:outline-indigo-600 focus:bg-indigo-50`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // className="w-5 h-5 my-1 mx-auto stroke-slate-600 fill-transparent"
              className={`transistion-all duration-300 w-5 h-5 my-1 mx-auto \
                              ${
                                activeLocation === navItem.label
                                  ? ' stroke-slate-600 fill-transparent'
                                  : 'stroke-slate-600 fill-transparent'
                              } \
                              focus:outline-indigo-600 focus:bg-indigo-50`}
              viewBox="0 0 24 24">
              {activeLocation === navItem.label
                ? navItem.activeIcon
                : navItem.inactiveIcon}
            </svg>
          </div>
          {navItem.label}
        </button>
      ))}
    </nav>
  );
};

export default BottomNavBar;
