import { useAuth } from '../hooks/useAuth';

import { AuthRoutes } from './auth.routes';
import { CommonRoutes } from './common.routes';

export function Routes() {
  const { user } = useAuth();

  return user ? <AuthRoutes /> : <CommonRoutes />;
}
