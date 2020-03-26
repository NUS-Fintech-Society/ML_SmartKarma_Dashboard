import "./App.css";
import "antd/dist/antd.css";

import React from "react";

import Line from "./components/Line.js";
import Pie from "./components/Pie.js";

import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
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

export default App;
