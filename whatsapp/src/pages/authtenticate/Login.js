import Styles from "./auth.module.css";
import { Row, Col, Form, Input, Checkbox, Button } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);

    axios
      .post("http://139.144.2.43:3001/login", {
        email: values.email,
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
        <Col lg={12} md={12} className={` container pt-4 ${Styles.graydin}`}>
          <div className="px-3  fon25 fontw7">LOGOHERE</div>
          <div className={`df aic jcc px-3 ${Styles.graydinma}`}>
            <div>
              <h1 className="fon40 fontw7">New here?</h1>
              <h2 className="fon30 fontw4 line-h41">
                Create your account now to get your{" "}
                <span className="fontw7">WhatsApp</span> and{" "}
                <span className="fontw7">SMS API</span> now!
              </h2>
            </div>
          </div>
        </Col>
        <Col
          lg={12}
          md={12}
          className={`container df aic jcc mt-3 ${Styles.Form}`}
        >
          <div>
            <p className="fon16 fontw4">We are glad to see you again!</p>
            <h1 className="fon30 fontw7">Login to You Account.</h1>
            <div className={`${Styles.hr}`}></div>
            <Form
              className="mt-2"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
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
                  <Input
                    prefix={
                      <MailOutlined
                        style={{ color: "#C7C7C7", fontSize: "16px" }}
                      />
                    }
                    className={`mt-1 px-1 ${Styles.Inputfrom}`}
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
                    prefix={
                      <LockOutlined
                        style={{ color: "#C7C7C7", fontSize: "18px" }}
                      />
                    }
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

              <div className="df jcb">
                <Checkbox className="fon18 m-0 fontw5">Remember me</Checkbox>
                <a
                  className={`fon18 m-0 fontw5 ${Styles.atag}`}
                  onClick={() => {
                    navigate("../forgetpass");
                  }}
                >
                  Forgot password?
                </a>
              </div>
              <Form.Item>
                <Button
                  htmlType="submit"
                  className={`fon18 fontw6 mt-1 ${Styles.logbtn}`}
                >
                  Login
                </Button>
              </Form.Item>
              <div>
                <p className="tc fon15 c61">OR</p>
              </div>
              <div className="df jcc">
                {" "}
                <a
                  className={`fon18 m-0 fontw5 ${Styles.atag}`}
                  onClick={() => {
                    navigate("../signup");
                  }}
                >
                  Create An Account
                </a>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Login;
