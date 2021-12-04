import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Routes } from './routes';
import { AuthContextProvider } from './contexts/AuthContext';

import './styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthContextProvider>
          <Routes />
          <ToastContainer
            position="top-right"
            theme="colored"
            autoClose={5000}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </AuthContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
