import Link from 'next/link';

export const metadata = {
  title: 'Dashboard',
  description: 'User dashboard',
};

const DashboardLayout = ({ children }) => {
  return (
    <div className='drawer lg:drawer-open'>
      <input
        id='my-drawer-3'
        type='checkbox'
        className='drawer-toggle'
      />

      <div className='drawer-content flex flex-col'>
        <div className='w-full min-h-screen'>{children}</div>

        <label
          htmlFor='my-drawer-3'
          className='btn drawer-button lg:hidden fixed top-4 left-4'>
          Open drawer
        </label>
      </div>

      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        />

        <ul className='menu bg-base-200 min-h-full w-80 p-4'>
          <li>
            <Link href='/dashboard'>Dashboard</Link>
          </li>

          <li>
            <Link href='/dashboard/revenue'>Revenue</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
