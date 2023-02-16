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
const Confirompass = () => {
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
            <h1 className="fon30 fontw7">
              Your password has been <span className="gr31">reset</span>.
            </h1>
            <p className="fon16 fontw4">
              You can now login with your new password.
            </p>

            <Form className="mt-2">
              <Form.Item>
                <button
                  onClick={() => {
                    navigate("../login");
                  }}
                  className={`fon18 fontw6 mt-1 ${Styles.logbtn}`}
                >
                  Back to login page
                </button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Confirompass;
