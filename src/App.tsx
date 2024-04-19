import React, { useState } from 'react';
import LoginForm from "./components/LoginForm";
import UrlShortened from "./components/UrlShortened";
import Header from "./components/Header";
import UserUrlTable from "./components/UserUrlTable";


const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      {
        loggedIn || localStorage.getItem('user') ?
          <>
            <Header setToggle={setToggle} toggle={toggle} />
            {toggle ? <UserUrlTable /> : <UrlShortened />}
          </>
          : <LoginForm setLoggedIn={setLoggedIn} />
      }
    </>
  );
};

export default App;
