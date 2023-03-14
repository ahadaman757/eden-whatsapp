import Styles from "./auth.module.css";
import { Row, Col, Form, Input, Checkbox, Button } from "antd";
import { useParams } from "react-router-dom";
import {
  MailOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const Newpass = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post(`http://139.144.2.43:3001/reset-pass`, {
        newPassword: values.password,
        code: code,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/confirompass");
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
            <h1 className="fon30 fontw7">Reset Password</h1>

            <div className={`${Styles.hr}`}></div>
            <Form
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="mt-2"
            >
              <div>
                <p className="fon18 m-0 fontw5">New Password*</p>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
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
              <p className="fon18 m-0 fontw5">Confirm Password*</p>
              <div>
                <Form.Item>
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

              <Form.Item>
                <Button
                  htmlType="submit"
                  className={`fon18 fontw6 mt-1 ${Styles.logbtn}`}
                >
                  Continue
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Newpass;
