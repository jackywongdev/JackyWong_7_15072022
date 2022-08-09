import { Layout, Menu } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";
import { HomeOutlined, ToolOutlined, TeamOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const NavBar = () => {
  const location = useLocation();

  return (
    <Sider style={{ backgroundColor: "white" }}>
      <img
        src="./images/groupomania/logo.png"
        alt="logo banière groupomania"
        className="groupomania-logo"
      />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <HomeOutlined />
          <span>Acceuil</span>
          <Link to="/"></Link>
        </Menu.Item>

        <Menu.Item key="/profil">
          <TeamOutlined />
          <span>Mon Profil</span>
          <Link to="/profil"></Link>
        </Menu.Item>

        <Menu.Item key="/mon-comtpe">
          <ToolOutlined />
          <span>Mon Compte</span>
          <Link to="/mon-compte"></Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default NavBar;
/*
<Sider trigger={null}>
        <div className="groupomania-logo-container" />
        <img
          className="groupomania-logo"
          src={groupomaniaLogo}
          alt="logo groupomania"
        />
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <HomeOutlined />
            <span>Accueil</span>
            <Link to="/accueil" />
          </Menu.Item>
          <Menu.Item key="2" activeClassName="is-active">
            <UsergroupDeleteOutlined />
            <span>Mes amis</span>
            <Link to="/amis" />
          </Menu.Item>
          <Menu.Item key="3" activeClassName="is-active">
            <span>Mon Profil</span>
            <Link to="/profil:id" />
          </Menu.Item>
          <Menu.Item key="4" activeClassName="is-active">
            <ToolOutlined />
            <span>Mon Compte</span>
            <Link to="/mon-compte" />
          </Menu.Item>
        </Menu>
      </Sider>

*/
