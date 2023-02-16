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
const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div>
      <Row>
        <Col className={` container pt-4 ${Styles.graydin}`} lg={12}>
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
        <Col lg={12} className="container df aic jcc">
          <div>
            <p className="fon16 fontw4">We are glad to see you again!</p>
            <h1 className="fon30 fontw7">Login to You Account.</h1>
            <div className={`${Styles.hr}`}></div>
            <Form className="mt-2">
              <Form.Item>
                <p className="fon18 m-0 fontw5">Email Address*</p>
                <Input
                  prefix={
                    <MailOutlined
                      style={{ color: "#C7C7C7", fontSize: "16px" }}
                    />
                  }
                  className={`mt-1 px-1 ${Styles.Inputfrom}`}
                />
              </Form.Item>
              <Form.Item>
                <p className="fon18 m-0 fontw5">Password*</p>
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
                <button
                  onClick={() => {
                    navigate("../dashboard");
                  }}
                  className={`fon18 fontw6 mt-1 ${Styles.logbtn}`}
                >
                  Login
                </button>
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
