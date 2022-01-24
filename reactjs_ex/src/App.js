import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavHome from "./components/NavHome";
import NavAdmin from "./components/NavAdmin";
import FooterComponent from "./components/FooterComponent";
import UserInfos from "./config.js/UserInfos";
import NavRespo from "./components/NavRespo";
import NavAgent from "./components/NavAgent";
import { Toaster } from "react-hot-toast";

function nav() {
  console.log(UserInfos.userInfos);
  if (UserInfos.userInfos == null || UserInfos.userInfos.length == 0) {
    return <NavHome />;
  } else {
    console.log(UserInfos.userInfos);

    if (UserInfos.userInfos.profil == "ADMIN") {
      return <NavAdmin />;
    }
    if (UserInfos.userInfos.profil == "RESPONSABLE") {
      return <NavRespo />;
    }
    if (UserInfos.userInfos.profil == "AGENT") {
      return <NavAgent />;
    }
  }
}

function App() {
  return (
    <div>
      <Toaster position="top-center" />
      {nav()}
      <FooterComponent />
    </div>
  );
}

export default App;
