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
const Forgetpass = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post("http://139.144.2.43:3004/reset-password", {
        email: values.email,
      })
      .then((response) => {
        console.log(response.data);
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
              <p className="fon18 fontw4">Don’t Worry!</p>
              <h1 className="fon33 fontw7">
                We are here help you to recover your password.
              </h1>
            </div>
          </div>
        </Col>
        <Col lg={12} className="container df aic jcc">
          <div>
            <h1 className="fon30 fontw7">Forgot password?</h1>
            <p className="fon16 fontw4">
              Enter the email address or mobile number associated with <br />
              your account.
            </p>
            <div className={`${Styles.hr}`}></div>
            <Form
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="mt-2"
            >
              <div>
                <p className="fon18 m-0 fontw5">Email Address*</p>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
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

              <Form.Item>
                <Button
                  htmlType="submit"
                  className={`fon18 fontw6 mt-1 ${Styles.logbtn}`}
                >
                  Continue
                </Button>
              </Form.Item>

              <div className="df jcc">
                {" "}
                <a
                  className={`fon18 m-0 fontw5 ${Styles.atag}`}
                  onClick={() => {
                    navigate("../login");
                  }}
                >
                  Back To Login
                </a>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Forgetpass;
