import { Menu, Button } from "antd";
import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  HomeOutlined,
  ToolOutlined,
  TeamOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { UidContext } from "../../components/AppContext";

const NavBar = () => {
  const uid = useContext(UidContext);
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      {uid ? (
        <div className="navbar-menu">
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
              marginBottom: 16,
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            inlineCollapsed={collapsed}
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
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar;
