import React, { useState } from "react";
import Header from "../../components/layout/Header";
import Main from "../../components/layout/Main";
import { Default } from "../Auth/Default";

function Home() {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  return (
    <>
      <Header
        isOpenLogin={isOpenLogin}
        setIsOpenLogin={setIsOpenLogin}
        isLoggedIn={isLoggedIn}
      />
      <Main />
      {isOpenLogin && (
        <Default
          isOpenLogin={isOpenLogin}
          setIsOpenLogin={setIsOpenLogin}
          setisLoggedIn={setisLoggedIn}
        />
      )}
    </>
  );
}

export default Home;
