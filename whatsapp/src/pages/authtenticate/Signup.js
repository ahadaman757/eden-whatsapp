import Styles from "./auth.module.css";
import { Row, Col, Form, Input, Checkbox, Button } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import seticon from "../../assets/ph_gear.png";
import braketicon from "../../assets/material-symbols_code.png";
import messageicon from "../../assets/mdi_message-processing-outline.png";
import { useState } from "react";
import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";

import Axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const getFlag = (short = "string") => {
    const data = require(`world_countries_lists/data/flags/24x24/${short.toLowerCase()}.png`);
    // for dumi
    if (typeof data === "string") {
      return data;
    }
    // for CRA
    return data.default;
  };
  const onFinish = (values) => {
    console.log("Success:", value, values);

    Axios.post("http://139.144.2.43:3001/register", {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      whatsapp_number: values.whatsapp_number,
      password: values.password,
    })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("accessToken", response.data.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Row>
        <Col className={` container pt-4 ${Styles.graydin}`} lg={12}>
          <div className="px-3  fon25 fontw7">LOGOHERE</div>
          <div className={`df aic jcc px-3 ${Styles.graydinma}`}>
            <div>
              <h1 className="fon31 fontw7">
                Why We Are the best from the others
              </h1>
              <div className="df mt-2">
                <div className="me-1">
                  <img src={seticon} />
                </div>

                <div>
                  <h1 className="fon22 fontw7">Easy to setup</h1>
                  <p className="c61 fon18 fontw4">
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur{" "}
                  </p>
                </div>
              </div>
              <div className="df mt-1">
                <div className="me-1">
                  {" "}
                  <img src={braketicon} />
                </div>

                <div>
                  <h1 className="fon22 fontw7">Easy to setup</h1>
                  <p className="c61 fon18 fontw4">
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur{" "}
                  </p>
                </div>
              </div>
              <div className="df mt-1">
                <div className="me-1">
                  <img src={messageicon} />
                </div>

                <div>
                  <h1 className="fon22 fontw7">Messages</h1>
                  <p className="c61 fon18 fontw4">
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={12} className="container df py-2 aic jcc">
          <div>
            <p className="fon16 fontw4">We are glad to see you again!</p>
            <h1 className="fon30 fontw7">Create you new account.</h1>
            <div className={`${Styles.hr}`}></div>
            <Form
              className="mt-2"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Row className=" df jcb ">
                {" "}
                <Col lg={11}>
                  <p className="fon18 m-0 fontw5">First Name*</p>
                  <Form.Item
                    name="first_name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input className={`mt-1 px-1 ${Styles.Inputfromf}`} />
                  </Form.Item>
                </Col>
                <Col lg={11}>
                  <p className="fon18 m-0 fontw5">Last Name*</p>
                  <Form.Item
                    name="last_name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input className={`mt-1 px-1 ${Styles.Inputfromf}`} />
                  </Form.Item>
                </Col>
              </Row>
              <div>
                <p className="fon18 m-0 fontw5">Email Address*</p>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input className={`mt-1 px-1 ${Styles.Inputfrom}`} />
                </Form.Item>
              </div>
              <div>
                <p className="fon18 m-0 fontw5">
                  WhatsApp Number (with country code)*
                </p>
                <Form.Item
                  name="whatsapp_number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <PhoneInput
                    className={`mt-1 px-1  ${Styles.Inputfrom}`}
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                  />
                </Form.Item>
              </div>
              <div>
                <p className="fon18 m-0 fontw5">Password*</p>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input.Password
                    className={`mt-1 px-1  ${Styles.Inputfrom}`}
                    suffix={(visible) =>
                      visible ? (
                        <EyeTwoTone
                          style={{ color: "#C7C7C7", fontSize: "24px" }}
                        />
                      ) : (
                        <EyeInvisibleOutlined
                          style={{ color: "#C7C7C7", fontSize: "24px" }}
                        />
                      )
                    }
                  />
                </Form.Item>
              </div>
              <div>
                <p className="fon18 m-0 fontw5">Confirm Password*</p>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input.Password
                    className={`mt-1 px-1  ${Styles.Inputfrom}`}
                    suffix={(visible) =>
                      visible ? (
                        <EyeTwoTone
                          style={{ color: "#C7C7C7", fontSize: "24px" }}
                        />
                      ) : (
                        <EyeInvisibleOutlined
                          style={{ color: "#C7C7C7", fontSize: "24px" }}
                        />
                      )
                    }
                  />
                </Form.Item>
              </div>

              <Form.Item>
                <Button
                  htmlType="submit"
                  className={`fon18 fontw6 mt-1 ${Styles.logbtn}`}
                >
                  Login
                </Button>
              </Form.Item>

              <div className="df jcc aic">
                {" "}
                <p className="tc fon15 m-0 c61">Already have an account?</p>
                <a className={`fon16 m-0 fontw5 ${Styles.atag}`}>Login</a>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Signup;
