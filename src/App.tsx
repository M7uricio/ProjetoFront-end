import React from 'react';

import Global from "./styles/global";
import Routes from "./routes";

import UserProvider from './contexts/UserContext';

const App =() => {
  return (
    <>
      <Global/>

      <UserProvider>
        <Routes/>
      </UserProvider>
    </>
  );
}

export default App;
