import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Drawer, Button } from "antd";
import "./Home.css";

const { Header, Content, Footer } = Layout;

class Home extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <div className="topic">
              <Button
                className="button"
                type="dashed"
                danger
                size="large"
                onClick={this.showDrawer}
              >
                Metro
              </Button>
              <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                width={700}
              >
                <p>
                  Some
                  contents..yyyyyfhfffffffhfffffffffffffffffffffffffffffffffffffhfuy.
                </p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </div>

            <div className="topic">
              <Button
                className="button"
                type="dashed"
                danger
                size="large"
                onClick={this.showDrawer}
              >
                Buses
              </Button>
              <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                width={700}
              >
                <p>
                  Some
                  contents..yyyyyfhfffffffhfffffffffffffffffffffffffffffffffffffhfuy.
                </p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </div>

            <div className="topic">
              <Button
                className="button"
                type="dashed"
                danger
                size="large"
                onClick={this.showDrawer}
              >
                Railways
              </Button>
              <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                width={700}
              >
                <p>
                  Some
                  contents..yyyyyfhfffffffhfffffffffffffffffffffffffffffffffffffhfuy.
                </p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </div>
            <div className="topic">
              <Button
                className="button"
                type="dashed"
                danger
                size="large"
                onClick={this.showDrawer}
              >
                Others
              </Button>
              <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                width={700}
              >
                <p>
                  Some
                  contents..yyyyyfhfffffffhfffffffffffffffffffffffffffffffffffffhfuy.
                </p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Trans-port ©2020 Created by JMI, New Delhi
        </Footer>
      </Layout>
    );
  }
}

export default Home;
