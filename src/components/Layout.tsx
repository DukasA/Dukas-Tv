import { useLocation } from 'react-router';
import AppRouter from './AppRouter';

export const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === '/' || location.pathname.startsWith('/movie/')
          ? 'w-full min-h-[100vh] overflow-hidden'
          : 'w-full min-h-[100vh] pt-[50px] md:pt-[125px] overflow-hidden'
      }
    >
      <div className="w-full min-h-[100vh]">
        <AppRouter />
      </div>
    </div>
  );
};

export default Layout;
