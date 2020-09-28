import React, { useState } from "react";

import { Layout, Menu } from "antd";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { adminRoutes } from "../routes";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const showRoutes = adminRoutes.filter((item) => item.isListItem);

function Frame(props: any) {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div
          className="logo"
          style={{
            height: "64px",
            backgroundColor: "rgba(255,255,255,1)",
          }}>
          <img src="" alt="logo" />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={[showRoutes[0].path]}
          mode="inline">
          {showRoutes.map((route: any) => {
            return (
              <Menu.Item
                key={route.path}
                icon={<PieChartOutlined />}
                onClick={() => props.history.push(route.path)}>
                {route.title}
              </Menu.Item>
            );
          })}
          <SubMenu key="sub1" icon={<UserOutlined />} title="保留">
            <Menu.Item key="3">保留1</Menu.Item>
            <Menu.Item key="4">保留2</Menu.Item>
            <Menu.Item key="5">保留3</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>{props.children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default withRouter(Frame);
