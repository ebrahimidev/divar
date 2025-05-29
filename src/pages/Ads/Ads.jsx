import React, { useState } from "react";
import Header from "../../components/layout/Header";
import { Default } from "../Auth/Default";
import FirstStage from "../../components/layout/ads/FirstStage";
import SecondStage from "../../components/layout/ads/SecondStage";

function Ads() {
  const [dataAds, setdataAds] = useState([]);
  console.log(dataAds);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [getStage, setStage] = useState(1);
  return (
    <>
      <Header
        isOpenLogin={isOpenLogin}
        setIsOpenLogin={setIsOpenLogin}
        isLoggedIn={isLoggedIn}
      />

      {getStage === 1 ? (
        <FirstStage setStage={setStage} setdataAds={setdataAds} />
      ) : getStage === 2 ? (
        <SecondStage setStage={setStage} />
      ) : null}

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

export default Ads;
