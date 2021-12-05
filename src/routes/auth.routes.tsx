import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from '../components/Common/Header';

import { Dashboard } from '../pages/Dashboard';
import { Maintenance } from '../pages/Maintenance';

export function AuthRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/maintenance/:id" component={Maintenance} />
    </BrowserRouter>
  );
}
