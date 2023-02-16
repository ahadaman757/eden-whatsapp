import Styles from "./reviewcard.module.css";
import Avatar from "../../assets/Group 1.png";
import star from "../../assets/Group 3.png";

import { Col, Divider, Row } from "antd";
const Reviewcard = (props) => {
  return (
    <div className="df jcc my-4">
      <Row className="df jcc">
        <Col lg={18}>
          <Row className={`p-4 ${Styles.Reviewcard}`}>
            <Col lg={3}>
              <img src={Avatar} />
            </Col>
            <Col lg={20}>
              <h1 className=" fon22 fontw6">Aiden Campbell</h1>
              <img className="pb-1" src={star} />
              <p className="fon18 fontw4">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Reviewcard;
