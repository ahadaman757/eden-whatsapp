import { Row, Col } from "antd";
import Styles from "./footer.module.css";
import facebookicon from "../../assets/feFacebook0.png";
import instaicon from "../../assets/ri_instagram-fill.png";
import linked from "../../assets/bi_linkedin.png";
import tiweter from "../../assets/bi_twitter.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Row className="df jcb">
        <Col lg={5}>
          <div></div>
          <p className="fon18">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            blandit sem a eros vulputate, et rhoncus nulla{" "}
          </p>
        </Col>
        <Col className="df fdc" lg={5}>
          <h1 className="fon20 fontw6">Useful Links</h1>
          <a className="fon18 fontw4 mb-1 bck">Home</a>
          <a className="fon18 fontw4 mb-1 bck">Pricing</a>
          <a className="fon18 fontw4 mb-1 bck">Features</a>
          <a className="fon18 fontw4 mb-1 bck"> FAQ</a>
          <a
            className="fon18 fontw4 mb-1 bck"
            onClick={() => {
              navigate("/contactus");
            }}
          >
            Contact Us
          </a>
        </Col>
        <Col className="df fdc" lg={5}>
          {" "}
          <h1 className="fon20 fontw6">Policies</h1>
          <a className="fon18 fontw4 mb-1 bck">Terms & Conditions</a>
          <a className="fon18 fontw4 mb-1 bck">Privacy Policy</a>
        </Col>
        <Col lg={6}>
          <h1 className="fon20 fontw6">Follow Us</h1>
          <div className="df ">
            <img className="me-1" src={facebookicon} />
            <img className="me-1" src={instaicon} />
            <img className="me-1" src={linked} />
            <img className="me-1" src={tiweter} />
          </div>
        </Col>
      </Row>
      <div className={`${Styles.hr}`}></div>
      <p className="tc p-1 fon18">2023 © Copyright Jataq Technologies</p>
    </div>
  );
};
export default Footer;
