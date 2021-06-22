// React
import React from 'react';

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
        <GlobalStyle />
        <Routes />
      </AuthContextProvider>
    </>
  );
}

export default App;
