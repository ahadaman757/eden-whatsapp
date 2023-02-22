import Styles from "./dashboard.module.css";
import { useState } from "react";
import React from "react";
import { Icon } from "@iconify/react";
import {
  UpOutlined,
  MenuFoldOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

import settingicon from "../../assets/ep_setting.svg";
import settingiconb from "../../assets/ep_setting (1).svg";
import notificatinbell from "../../assets/mdi_bell-notification-outline.svg";
import profimg from "../../assets/Ellipse 21.png";
import { Menu } from "antd";
import {
  Routes,
  Route,
  useNavigate,
  useHistory,
  NavLink,
  Link,
  Outlet,
} from "react-router-dom";

import Dashboardmain from "../dashboardpages/dashboardmain/dashbordmain";
import Profile from "../dashboardpages/profile/profile.js";
import { Breadcrumb, Layout, theme } from "antd";

const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;
const Dashboard = () => {
  const [accordian, setaccordian] = useState(false);
  const [accordian1, setaccordian1] = useState(false);

  const [collapsed, setCollapsed] = useState(false);
  //   const history = useHistory();
  const navigate = useNavigate();
  const acoStyle = {};

  function handel(id) {
    if ((id = "profile")) {
      <Profile />;
    }
  }
  return (
    <div className={` ${Styles.main}`}>
      <Sider
        width={240}
        className={` p-2  ${Styles.manuem}`}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className={`df ${collapsed ? "" : "px-2"} ${collapsed ? "jcc" : ""} `}
        >
          <h1 className="fon20 me-1">{collapsed ? "" : "LGOGOHERE"}</h1>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </div>
        <Menu
          className="fon16 fontw6 m-0 py-2"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <SubMenu
            key="sub1"
            icon={
              <Icon
                icon="ant-design:layout-outlined"
                style={{ fontSize: "23px" }}
              />
            }
            title="Navigation One"
          >
            <Menu.Item key="3">
              {" "}
              <Link to="/dashboard">Overview</Link>{" "}
            </Menu.Item>
            <Menu.Item key="4">
              {" "}
              <Link to="recentactivity">Recent Activity</Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item
            className={` ${Styles.ssd}`}
            key="2"
            icon={
              <Icon
                icon="fluent:mail-template-20-regular"
                style={{ fontSize: "23px" }}
              />
            }
          >
            <Link to="/dashboard/templete">Template</Link>
          </Menu.Item>
          <Menu.Item
            className={`${Styles.ssd}`}
            key="3"
            icon={<Icon icon="uil:users-alt" style={{ fontSize: "23px" }} />}
          >
            <Link to="/dashboard">Contacts</Link>
          </Menu.Item>
          <Menu.Item
            className={`${Styles.ssd}`}
            key="4"
            icon={
              <Icon icon="carbon:integration" style={{ fontSize: "23px" }} />
            }
          >
            <Link to="/dashboard">Integration</Link>
          </Menu.Item>
          <Menu.Item
            className={`${Styles.ssd}`}
            key="5"
            icon={<Icon icon="ep:setting" style={{ fontSize: "23px" }} />}
          >
            <Link to="/dashboard">Setting</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <div className={`${Styles.navb}`}>
        <div className={`p-1 df aic jcb ${Styles.nav}`}>
          <div className="df">
            {" "}
            <div>
              <h1 className="fon20 fontw6 m-0 me-2">Dashboard</h1>
            </div>{" "}
            <div className={`me-2 ${Styles.bage}`}>
              <p className="m-0">Free Trial - 5 days left, Pricing Plan</p>
            </div>
          </div>
          <div className="df">
            {" "}
            <div className="df me-2">
              <div className={`${Styles.setnot}`}>
                <img src={notificatinbell} />
              </div>
              <div className={`${Styles.settnot}`}>
                <img src={settingicon} />
              </div>
            </div>
            <div>
              <p className="fon16 fontw6 m-0 me-2">Connected</p>
              <p className="fon16 fontw6 m-0 gr31 me-2">+1 223 223 4444</p>
            </div>
            <div>
              {" "}
              <p className="fon16 fontw6 m-0 me-2">Hello, Scott Butler</p>
              <p className="fon16 fontw6 m-0 c61 me-2">useremail@gmail.com</p>
            </div>{" "}
            <div>
              <img src={profimg} />
            </div>
          </div>
        </div>
        <div className="p-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
