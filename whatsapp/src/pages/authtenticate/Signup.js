import Styles from "./auth.module.css";
import { Row, Col, Form, Input, Checkbox } from "antd";
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
import Axios from "axios";
const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const register = () => {
    Axios.post("http://localhost:3002/register", {
      name: "ksd",
      email: "sds",
      password: "sd",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
            <Form className="mt-2">
              <div className="df jcb">
                {" "}
                <Form.Item>
                  <p className="fon18 m-0 fontw5">First Name*</p>
                  <Input
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className={`mt-1 px-1 ${Styles.Inputfromf}`}
                  />
                </Form.Item>
                <Form.Item>
                  <p className="fon18 m-0 fontw5">Last Name*</p>
                  <Input className={`mt-1 px-1 ${Styles.Inputfromf}`} />
                </Form.Item>
              </div>
              <Form.Item>
                <p className="fon18 m-0 fontw5">Email Address*</p>
                <Input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className={`mt-1 px-1 ${Styles.Inputfrom}`}
                />
              </Form.Item>
              <Form.Item>
                <p className="fon18 m-0 fontw5">
                  WhatsApp Number (with country code)*
                </p>
                <Input className={`mt-1 px-1 ${Styles.Inputfrom}`} />
              </Form.Item>
              <Form.Item>
                <p className="fon18 m-0 fontw5">Password*</p>
                <Input.Password
                  onChange={(e) => {
                    password(e.target.value);
                  }}
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
                  onClick={register()}
                  className={`fon18 fontw6 mt-1 ${Styles.logbtn}`}
                >
                  Login
                </button>
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
