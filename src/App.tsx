import 'moment/locale/pt-br';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { AuthContextProvider } from './contexts/AuthContext';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

Modal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthContextProvider>
          <Routes />
          <ToastContainer
            position="bottom-right"
            theme="colored"
            autoClose={5000}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </AuthContextProvider>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
