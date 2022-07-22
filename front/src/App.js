import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Anthentification from "./pages/Authentification";
import { UidContext } from "./components/AppContext";
import axios from "axios";

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res);
          setUid(res.data);
        })
        .catch((err) => console.log("No Token"));
    };
    fetchToken();
  }, [uid]);
  return (
    <div>
      <UidContext.Provider value={uid}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Anthentification />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/mon-compte" element={<Account />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UidContext.Provider>
    </div>
  );
};

export default App;
