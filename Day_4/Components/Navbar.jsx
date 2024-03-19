import React, { useState } from "react";
import { Badge, Drawer, List, Space } from "antd";

 
import {
  ShoppingCartOutlined,
  MenuOutlined,
  AppstoreOutlined,
  ShopOutlined,
  
  UserOutlined,
} from "@ant-design/icons";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  
  const [menuOpen, setMenuOpen] = useState(false);

 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="AppHeader">
        <div className="header-left">
          <Space>
            
            <h3> BoatHouse Haven</h3>
             
            

            
          </Space>
        </div>

        <div className="header-right">
        <Space>
            <Badge count={0} dot>
              
            </Badge>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/services">Services</a></li>
              
            </ul>
          </nav>

            
          </Space>
        </div>
        
          
      </div>
      {menuOpen && <Layout />}
    </div>
  );
}

export default Navbar;
