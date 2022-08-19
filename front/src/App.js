// React
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UidContext } from "./components/AppContext";

// Layout
import NavBar from "./components/Layout/Navbar";
import HeaderBar from "./components/Layout/HeaderBar";
import { Content } from "antd/lib/layout/layout";
import { Layout } from "antd";

// Page
import Home from "./pages/Home";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Authentification from "./pages/Authentification";

// Redux
import { useDispatch } from "react-redux";
import { getUser } from "./redux/actions/user.actions";

// Dependencies
import axios from "axios";

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res);
          setUid(res.data);
        })
        .catch((err) => console.log("No Token"));
    };
    fetchToken();
    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);
  return (
    <>
      <UidContext.Provider value={uid}>
        <Layout>
          <HeaderBar />
          <NavBar />

          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/auth" element={<Authentification />} />
              <Route path="/" element={<Home />} />
              <Route path="/profil" element={<Profile />} />
              <Route path="/mon-compte" element={<Account />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Content>
          <Layout></Layout>
        </Layout>
      </UidContext.Provider>
    </>
  );
};

export default App;
