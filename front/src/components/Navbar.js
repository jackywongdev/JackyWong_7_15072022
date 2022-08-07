import {
  ToolOutlined,
  HomeOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

import React from "react";
import { Link } from "react-router-dom";
import groupomaniaLogo from "../assets/groupomania/logo.png";

const { Sider } = Layout;

export default function Navbar() {
  return (
    <div className="home-page-container">
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
          <Menu.Item key="2">
            <UsergroupDeleteOutlined />
            <span>Mes amis</span>
            <Link to="/amis" />
          </Menu.Item>
          <Menu.Item key="3">
            <span>Mon Profil</span>
            <Link to="/profil:id" />
          </Menu.Item>
          <Menu.Item key="4">
            <ToolOutlined />
            <span>Mon Compte</span>
            <Link to="/mon-compte" />
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}
