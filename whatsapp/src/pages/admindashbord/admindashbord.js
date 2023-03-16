import Styles from "./admindashbord.module.css";
import { useState, useEffect } from "react";
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
import { Breadcrumb, Layout, Skeleton, theme } from "antd";
import axios from "axios";

const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;
const Admindashbord = () => {
  const [accordian, setaccordian] = useState(false);
  const [accordian1, setaccordian1] = useState(false);
  const [userData, setUserdata] = useState();
  const [loading, setLoading] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [resposiv, setres] = useState();

  const [collapsed, setCollapsed] = useState(false);
  //   const history = useHistory();
  const navigate = useNavigate();
  const acoStyle = {};
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://139.144.2.43:3001/protected-route", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setLoading(false);

          setUserdata(res.data.details[0]);
        });
    }, 200);
    // GET USER DATA
  }, []);

  return (
    <div className={` ${Styles.main}`}>
      <Sider
        style={{ zIndex: screenWidth === 768 ? "" : resposiv ? "-1" : "1" }}
        width={240}
        className={` p-2  ${Styles.manuem} `}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className={`df ${collapsed ? "" : "px-2"} ${collapsed ? "jcc" : ""} `}
        >
          <h1 className="fon20 me-1">{collapsed ? "" : "LGOGOHERE"}</h1>
          <button
            className={`${Styles.mobtn}`}
            onClick={() => setres(!resposiv)}
          >
            <span>
              <MenuUnfoldOutlined />
            </span>
          </button>{" "}
          {/* <button
            className={`trigger ${Styles.switch}`}
            onClick={() => setCollapsed(!collapsed)}
          >
            <span>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </span>
          </button> */}
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
          <Menu.Item
            className={`${Styles.ssd}`}
            key="1"
            icon={
              <Icon
                icon="ant-design:layout-outlined"
                style={{ fontSize: "23px" }}
              />
            }
          >
            <Link to="contacts">dashboard</Link>
          </Menu.Item>
          <Menu.Item
            className={`${Styles.ssd}`}
            key="2"
            icon={<Icon icon="uil:users-alt" style={{ fontSize: "23px" }} />}
          >
            <Link to="user">Users</Link>
          </Menu.Item>
          <Menu.Item
            className={`${Styles.ssd}`}
            key="3"
            icon={
              <Icon icon="carbon:integration" style={{ fontSize: "23px" }} />
            }
          >
            <Link to="/dashboard">Integration</Link>
          </Menu.Item>
          <Menu.Item
            className={`${Styles.ssd}`}
            key="4"
            icon={<Icon icon="ep:setting" style={{ fontSize: "23px" }} />}
          >
            <Link to="setting">Setting</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <div className={`${Styles.navb}`}>
        <div className={`p-1 df aic jcb ${Styles.nav}`}>
          <div className="df">
            <button
              className={`${Styles.mobtn}`}
              onClick={() => setres(!resposiv)}
            >
              <span>
                <MenuUnfoldOutlined />
              </span>
            </button>{" "}
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
            <div className={`${Styles.snum}`}>
              <Skeleton
                style={{ width: "200px", height: "30px" }}
                loading={loading}
                paragraph={{ rows: 1 }}
              >
                <p className="fon16 fontw6 m-0 me-2">Connected</p>
                <p className="fon16 fontw6 m-0 gr31 me-2">
                  {" "}
                  {loading ? "" : userData.whatsapp_number}
                </p>
              </Skeleton>
            </div>
            <div className={`${Styles.snam}`}>
              <Skeleton
                style={{ width: "200px", height: "30px" }}
                loading={loading}
                paragraph={{ rows: 1 }}
              >
                <div className={``}>
                  <p className="fon16 fontw6 m-0 me-2">
                    Hello, {loading ? "" : userData.first_name}{" "}
                    {loading ? "" : userData.last_name}
                  </p>
                </div>
              </Skeleton>

              <p className="fon16 fontw6 m-0 c61 me-2">
                {loading ? "" : userData.email}
              </p>
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

export default Admindashbord;
