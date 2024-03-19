import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import '../css/layout.css';

function Layout() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
      > 
      <div style={{ marginTop: "64px" }}></div>
      <Menu.Item key="/" icon={<AppstoreOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="/Services" icon={<ShoppingCartOutlined />}>
          Services
        </Menu.Item>
        <Menu.Item key="/Aboutus" icon={<ShopOutlined />}>
          About us
        </Menu.Item>
        <Menu.Item key="/Dashboard" icon={<UserOutlined />}>
          Dashboard
        </Menu.Item>
        
      </Menu>
    </div>
  );
}

export default Layout;
