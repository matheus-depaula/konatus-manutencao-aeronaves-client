import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from '../components/Header';

import { Dashboard } from '../pages/Dashboard';

export function AuthRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Dashboard} />
    </BrowserRouter>
  );
}
