import React, { useState, FunctionComponent } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link';


import {
  DesktopOutlined,
  DashboardOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import "antd/dist/antd.css";
import { withRouter } from 'next/router';

const { SubMenu, Item } = Menu;
const { Sider, Content } = Layout;


const AppLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onChangeIsCollapsed = (isCollapsed: boolean) => {
    setIsCollapsed(isCollapsed);
  };


  return (
    <Layout style={{ minHeight: '100vh' }} >
      <Sider
        collapsible
        collapsed={isCollapsed}
        onCollapse={onChangeIsCollapsed}
      >
        <Link href="/menu1">
          <a>
            <div className="App-logo" />
          </a>
        </Link>
        <Menu
          theme="dark"
          defaultSelectedKeys={['/menu1']}

          mode="inline"
        >
          <Item key="menu1" icon={<DesktopOutlined />}>
            <Link href="/menu1">
              <a>Menu 1</a>
            </Link>
          </Item>
          <Item key="menu2" icon={<DashboardOutlined />}>
            <Link href="/menu2">
              <a>Menu 2</a>
            </Link>
          </Item>
          <SubMenu key="menu3" icon={<SettingOutlined />} title="Menu 3">
            <Item key="submenu1">
              <Link href="/menu3/submenu1">
                <a>Submenu 1</a>
              </Link>
            </Item>
            <Item key="submenu2">
              <Link href="/menu3/submenu2">
                <a>Submenu 2</a>
              </Link>
            </Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 16px 16px' }} className="site-layout">
        <Breadcrumb
          style={{ margin: '16px 0' }}
    
        />
        <Content
          className="site-layout-background"
          style={{
            padding: 16,
            minHeight: 280,
            backgroundColor: '#ffffff',
          }}
        >

        </Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(AppLayout);