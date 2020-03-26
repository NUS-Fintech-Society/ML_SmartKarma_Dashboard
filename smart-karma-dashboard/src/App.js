import "antd/dist/antd.css";
import "./App.css";
import React from "react";
import Line from "./components/Line.js";
import Pie from "./components/Pie.js";
import fintech_logo from "./assets/images/nus_fintech_logo.png";

import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <div>
      <Layout className="layout">
        <Header style={{ background: "#6f858c", height: "70px" }}>
          <div className="logo">
            <img src={fintech_logo} className="logo" />
          </div>
          <div className="title">SmartKarma Dashboard</div>
        </Header>
        <Content style={{ padding: "40px" }}>
          <div className="site-layout-content">
            <div className="line">
              <h1 className="chartTitle">Sentiment vs Volume</h1>
              <Line />
            </div>
            <div className="pie">
              <h1 className="chartTitle">Positive vs Negative sentiments</h1>
              <Pie />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          {"\u00A9"} SmartKarma Dashboard by NUS Fintech Society 2020
        </Footer>
      </Layout>
    </div>
  );
}
