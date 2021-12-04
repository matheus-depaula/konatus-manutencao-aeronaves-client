import { BrowserRouter, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';

export function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Dashboard} />
    </BrowserRouter>
  );
}
