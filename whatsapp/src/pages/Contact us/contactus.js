import Styles from "./contactus.module.css";
import Navbar from "../../component/Navbar/Nabar";
import Footer from "../../component/Footer/Footer";
import { Row, Col, Button, Form, Input, InputNumber } from "antd";

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const Contactus = () => {
  return (
    <div>
      <div className={`${Styles.contactmain}`}>
        <Navbar />
        <div className="container py-5">
          <Row className="df ">
            <Col lg={12} className="df aic">
              <div>
                <p className="fon24 D8 fontw7">CONTACT US</p>
                <h1 className="fon50 fontw7">Get in touch with our team</h1>
                <p className="fon20 fontw4 c61">
                  Our support team will response you within 24hrs
                </p>
              </div>
            </Col>
            <Col lg={10}>
              <div className={`p-3 ${Styles.formcon}`}>
                <h1 className="fon28 tc fontw7">
                  Send Us <span className="D8">Message</span>
                </h1>
                <Form
                  name="nest-messages"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
                  <h1 className="fon16 fontw4">Full Name</h1>
                  <Form.Item
                    name={["user", "name"]}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <h1 className="fon16 fontw4">Email Address</h1>
                  <Form.Item
                    name={["user", "email"]}
                    rules={[
                      {
                        type: "email",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <h1 className="fon16 fontw4">Message</h1>
                  <Form.Item name={["user", "introduction"]}>
                    <Input.TextArea style={{ height: "141px" }} />
                  </Form.Item>
                  <Form.Item>
                    <button className={`fon16 fontw6 ${Styles.formbtn}`}>
                      Start A Free Trail
                    </button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contactus;
