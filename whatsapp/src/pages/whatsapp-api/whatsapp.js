import Styles from "./whatsapp.module.css";
import Navbar from "../../component/Navbar/Nabar";
import Footer from "../../component/Footer/Footer";
import { Col, Row } from "antd";
import herosecimg from "../../assets/Group 25.png";
import secimg from "../../assets/Group 26.png";
import Greenicon1 from "../../assets/greenSvg/carbon_chart-custom (1).svg";
import Greenicon2 from "../../assets/greenSvg/Group 17.svg";
import Greenicon3 from "../../assets/greenSvg/ion_cart-outline.svg";
import Greenicon4 from "../../assets/greenSvg/mdi_graph-timeline-variant.svg";
import Greenicon5 from "../../assets/greenSvg/nimbus_marketing.svg";
import Whiteicon1 from "../../assets/whiteSvg/Group 17.svg";
import Whiteicon2 from "../../assets/whiteSvg/carbon_chart-custom.svg";
import Whiteicon3 from "../../assets/whiteSvg/ion_cart-outline (1).svg";
import Whiteicon4 from "../../assets/whiteSvg/mdi_graph-timeline-variant (1).svg";
import Whiteicon5 from "../../assets/whiteSvg/nimbus_marketing (1).svg";
import { useState } from "react";
const WhatsAppApi = () => {
  const [icon1, setIcon1] = useState(Greenicon1);
  const [icon2, setIcon2] = useState(Greenicon2);
  const [icon3, setIcon3] = useState(Greenicon3);
  const [icon4, setIcon4] = useState(Greenicon4);
  const [icon5, setIcon5] = useState(Greenicon5);
  return (
    <div>
      <div className={`${Styles.whapimain}`}>
        <Navbar />
        <div className="container">
          <Row>
            <Col className="df aic pe-3" lg={12}>
              <div>
                <h1 className="fon38 fontw7">
                  Build stronger <br /> customer connections with WhatsApp API
                  Integration
                </h1>
                <p className="fon18 line-h27 fontw4 c61">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  blandit sem a eros vulputate, et rhoncus nulla{" "}
                </p>
                <div>
                  <button className={`fon18 me-1 fontw6 ${Styles.getbtn}`}>
                    Get Started
                  </button>
                  <a className="fon16  fontw6">Contact US</a>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <img className={`${Styles.herosecimg}`} src={herosecimg} />
            </Col>
          </Row>
        </div>
      </div>
      <div className="container py-5">
        <Row>
          <Col className="df jcc" lg={12}>
            <img className={`${Styles.secimg}`} src={secimg} />
          </Col>
          <Col className="df jcc aic" lg={12}>
            <div>
              <h1 className="fon38 fontw7">
                What is WhatsApp Order Notification?
              </h1>
              <p className="fon18 line-h27 fontw4 c61">
                WhatsApp Order Notification allows the store admin to send
                various order notifications to customers via the WhatsApp
                messaging platform. The store owner can set up the plugin in
                just 5 minutes. It allows sending messages for New Order,
                Pending Payment, On-Hold, Order Processing, Order Completed,
                Order Cancelled, Payment Refund, and Payment Failure.
              </p>
              <button className={`fon18 me-1 fontw6 ${Styles.getbtn}`}>
                Contact US
              </button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container py-4">
        <h1 className="tc fon38 fontw7">WhatsApp API Features</h1>
        <p className="tc fon18 line-h27 fontw4 c61">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit
          sem a eros
          <br /> vulputate, et rhoncus nulla{" "}
        </p>
        <Row className="df jcc">
          <Col className="p-1">
            <div
              onMouseEnter={() => {
                setIcon3(Whiteicon3);
              }}
              onMouseLeave={() => {
                setIcon3(Greenicon3);
              }}
              className={`${Styles.hovericon}`}
            >
              <div className="df jcc pt-1 ">
                <img src={icon3} />
              </div>
              <div className="p-1">
                <p className="tc fon27 fontw6 m-0">E-commerce </p>
                <p className="tc fon27 fontw6">Notification</p>
              </div>
            </div>
          </Col>
          <Col className="p-1">
            {" "}
            <div
              onMouseEnter={() => {
                setIcon2(Whiteicon1);
              }}
              onMouseLeave={() => {
                setIcon2(Greenicon2);
              }}
              className={`${Styles.hovericon}`}
            >
              <div className="df jcc pt-1 ">
                <img src={icon2} />
              </div>
              <div className="p-1">
                <p className="tc fon27 fontw6 m-0">WhatsApp </p>
                <p className="tc fon27 m-0 fontw6">Chatbot</p>
              </div>
            </div>
          </Col>
          <Col className="p-1">
            {" "}
            <div
              onMouseEnter={() => {
                setIcon4(Whiteicon4);
              }}
              onMouseLeave={() => {
                setIcon4(Greenicon4);
              }}
              className={`${Styles.hovericon}`}
            >
              <div className="df jcc pt-1 ">
                <img src={icon4} />
              </div>
              <div className="p-1">
                <p className="tc fon27 fontw6 m-0">Analytics & </p>
                <p className="tc fon27 fontw6">Performance</p>
              </div>
            </div>
          </Col>
          <Col className="p-1">
            {" "}
            <div
              onMouseEnter={() => {
                setIcon1(Whiteicon2);
              }}
              onMouseLeave={() => {
                setIcon1(Greenicon1);
              }}
              className={`${Styles.hovericon}`}
            >
              <div className="df jcc pt-1 ">
                <img src={icon1} />
              </div>
              <div className="p-1">
                <p className="tc fon27 fontw6 m-0">Template </p>
                <p className="tc fon27 fontw6">Customization</p>
              </div>
            </div>
          </Col>
          <Col className="p-1">
            {" "}
            <div
              onMouseEnter={() => {
                setIcon5(Whiteicon5);
              }}
              onMouseLeave={() => {
                setIcon5(Greenicon5);
              }}
              className={`${Styles.hovericon}`}
            >
              <div className="df jcc pt-1 ">
                <img src={icon5} />
              </div>
              <div className="p-1">
                <p className="tc fon27 fontw6 m-0">Personalized </p>
                <p className="tc fon27 fontw6">Marketing</p>
              </div>
            </div>
          </Col>
          <Col className="p-1">
            {" "}
            <div className={` df jcc aie   ${Styles.hovericon}`}>
              <div className="p-1">
                <p className="tc fon27 fontw6 m-0">Personalized </p>
                <p className="tc fon27 m-0 fontw6">Marketing</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};
export default WhatsAppApi;
