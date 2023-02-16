import Styles from "./faq.module.css";
import Navbar from "../../component/Navbar/Nabar";
import Footer from "../../component/Footer/Footer";
import { Row, Col, Collapse, Space } from "antd";
import { useState } from "react";
import { UpOutlined } from "@ant-design/icons";
import Accordian from "../../component/accodian/accordin";

const { Panel } = Collapse;
const Faq = () => {
  const [accordian, setaccordian] = useState(false);
  const acoStyle = {
    color: accordian ? "white" : "black",
    border: accordian ? "none" : "1px solid #C8C8C8",
    background: accordian ? "#0275d8" : "white",
  };
  return (
    <div>
      <div className={`${Styles.Faqmain}`}>
        {" "}
        <Navbar />
        <div className="tc py-3">
          <h1 className="fon50 fontw7">Frequently asked questions</h1>
          <p className="fon18 fontw4 c61">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            blandit sem a <br /> eros vulputate, et rhoncus nulla{" "}
          </p>
        </div>
      </div>
      <div className="container py-5">
        <Row className="df jcb">
          <Col lg={9} className="df aic">
            <div>
              <h1 className="fon40 fontw7">Do You Have Any Questions?</h1>
              <p className="fon18 fontw4 c61">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                blandit sem a eros vulputate, et rhoncus nulla{" "}
              </p>
              <div>
                <button className={`fon16 fontw7 me-1 ${Styles.faqbtn}`}>
                  Get Started
                </button>
                <button className={`fon16 fontw7 ${Styles.contactusbtn}`}>
                  Contact Us
                </button>
              </div>
            </div>
          </Col>
          <Col lg={13}>
            <div>
              <Accordian
                header={"Frequently asked questions"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit sem a  eros vulputate et rhoncus nulla"
                }
              />
              <Accordian
                header={"Frequently asked questions"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit sem a  eros vulputate et rhoncus nulla"
                }
              />
              <Accordian
                header={"Frequently asked questions"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit sem a  eros vulputate et rhoncus nulla"
                }
              />
              <Accordian
                header={"Frequently asked questions"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit sem a  eros vulputate et rhoncus nulla"
                }
              />
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};
export default Faq;
