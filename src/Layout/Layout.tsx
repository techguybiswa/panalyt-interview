import React from "react";
import { Layout, Menu } from "antd";
const { Header, Content } = Layout;
export interface LayoutProps {
  children: any;
}

class AppLayout extends React.Component<LayoutProps> {
  constructor(props: LayoutProps) {
    super(props);
  }
  render() {
    return (
      <>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">Panalyt</Menu.Item>
            </Menu>
          </Header>
          <Content
            style={{
              margin: "50px",
              padding: "50px",
              backgroundColor: "white",
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </>
    );
  }
}

export default AppLayout;
