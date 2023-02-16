import Styles from "./auth.module.css";
import { Row, Col, Form, Input, Checkbox } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Newpass = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
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
            <Form className="mt-2">
              <Form.Item>
                <p className="fon18 m-0 fontw5">New Password*</p>
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
              <Form.Item>
                <p className="fon18 m-0 fontw5">Confirm Password*</p>
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

              <Form.Item>
                <button
                  onClick={() => {
                    navigate("../confirompass");
                  }}
                  className={`fon18 fontw6 mt-1 ${Styles.logbtn}`}
                >
                  Continue
                </button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Newpass;
