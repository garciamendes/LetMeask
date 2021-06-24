// React
import React from 'react';

// Third party
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Local
import { GlobalStyle } from "./styles/global";

// Routes
import Routes from "./routes";

// Context
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {

  return (
    <>
      <AuthContextProvider>
        <ToastContainer />
        <GlobalStyle />
        <Routes />
      </AuthContextProvider>
    </>
  );
}

export default App;
