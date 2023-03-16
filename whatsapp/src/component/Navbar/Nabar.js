import { Breadcrumb, Drawer, Layout, Menu, theme } from "antd";
import { useState } from "react";
import Styles from "./navbar.module.css";
import { MenuOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `log ${key}`,
}));

const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);
  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#ffffff",
  };
  const heder = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <>
      <Header className="container" style={heder}>
        <div className={`${Styles.logocon}`}></div>
        <div>
          <div className={`${Styles.navbtn}`}>
            <MenuOutlined
              style={{ color: "", fontSize: 30 }}
              onClick={() => {
                setopenmenu(true);
              }}
            />
          </div>
          <div className={`${Styles.navd}`}>
            <Apphor />
          </div>
        </div>

        <Drawer
          placement="left"
          open={openmenu}
          onClose={() => {
            setopenmenu(false);
          }}
          closable={false}
        >
          <Apphor isInline />
        </Drawer>
      </Header>
    </>
  );
};
const Apphor = ({ isInline = false }) => {
  const navigate = useNavigate();
  const manuem = {
    display: "flex",
    alignItems: "center",
  };
  const manue = {
    width: "100%",
    display: "flex",
    justifyContent: "end",
  };
  const logo = {
    height: "100px",
    width: "50px",
    backgroundColor: "black",
  };
  return (
    <>
      <Menu
        className={` ${Styles.manuem}`}
        mode={isInline ? "inline" : "horizontal"}
      >
        <Menu.Item
          onClick={() => {
            navigate("/");
          }}
          className="fon18 fontw4"
        >
          Home
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            navigate("/pricing");
          }}
          className="fon18 fontw4"
        >
          Pricing
        </Menu.Item>
        <Menu.Item
          className="fon18 fontw4"
          onClick={() => {
            navigate("/whatsappapi");
          }}
        >
          Features
        </Menu.Item>
        <Menu.Item
          className="fon18 fontw4"
          onClick={() => {
            navigate("/faq");
          }}
        >
          FAQ
        </Menu.Item>
        <Menu.Item>
          <a
            className={`fon16 fontw6 ${Styles.loginbtn}`}
            onClick={() => {
              navigate("/login");
            }}
          >
            {" "}
            Login
          </a>
        </Menu.Item>
        <Menu.Item>
          <a className={`fon16 fontw6 ${Styles.singupbtn}`}>
            {" "}
            Start A Free Trail
          </a>
        </Menu.Item>
      </Menu>
    </>
  );
};
export default Navbar;
