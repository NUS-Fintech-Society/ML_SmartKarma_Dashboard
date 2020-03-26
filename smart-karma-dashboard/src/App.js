import "./App.css";
import "antd/dist/antd.css";

import React from "react";
import Line from "./components/Line.js";
import Pie from "./components/Pie.js";
import fintech_logo from "./assets/images/nus_fintech_logo.png"

import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <div>
      <Layout className="layout">
        <Header style ={{ background: "ghostwhite"}}>
          <div className = "logo"><img src = {fintech_logo} className = "logo"/></div>
          <div className = "title">SmartKarma Dashboard</div>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <div className="line">
              <Line />
            </div>
            <div className="pie">
              <Pie />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          SmartKarma Dashboard by NUS Fintech Society 2020
        </Footer>
      </Layout>
    </div>
  );
}
