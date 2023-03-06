import Styles from "./setting.module.css";
import { Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";
import icon1 from "../../../assets/grommet-icons_shield-security.png";
import icon2 from "../../../assets/uil_bill.png";
import icon3 from "../../../assets/ph_user-circle-thin.png";
import { Link } from "react-router-dom";
const Setting = () => {
  return (
    <div>
      <div>
        <Row className="df jcb">
          <Col lg={10} className="p-1">
            <div className={`  ${Styles.settcard} `}>
              <div className="p-1 df">
                <img className="pe-1" src={icon3} />{" "}
                <div>
                  <h1 className="fon20 fontw5">Personal Info</h1>
                  <p className="fon14 fontw4 c61">
                    See your profile data and manage your Account to choose what
                    is saved in our system.
                  </p>
                </div>
              </div>
              <div className={`p-1 df jcb ${Styles.btns}`}>
                <Link to="/dashboard/profile" className="fon14 fontw5 ">
                  Manage your account
                </Link>
                <RightOutlined />
              </div>
            </div>
          </Col>
          <Col lg={10} className="p-1">
            <div className={`${Styles.settcard} m-1`}>
              <div className="p-1 df">
                <img className="pe-1" src={icon1} />{" "}
                <div>
                  <h1 className="fon20 fontw5">Security Setting</h1>
                  <p className="fon14 fontw4 c61">
                    See your profile data and manage your Account to choose what
                    is saved in our system.
                  </p>
                </div>
              </div>
              <div className={`p-1 df jcb ${Styles.btns}`}>
                <Link to="/dashboard/profile" className="fon14 fontw5 ">
                  Account setting
                </Link>
                <RightOutlined />
              </div>
            </div>
          </Col>

          <Col lg={10} className="p-1">
            <div className={`${Styles.settcard} `}>
              <div className="p-1 df">
                <img className="pe-1" src={icon2} />{" "}
                <div>
                  <h1 className="fon20 fontw5">Billing & Subscription</h1>
                  <p className="fon14 fontw4 c61">
                    See your profile data and manage your Account to choose what
                    is saved in our system.
                  </p>
                </div>
              </div>
              <div className={`p-1 df jcb ${Styles.btns}`}>
                <a className="fon14 fontw5 ">Billing & Subscription setting</a>
                <RightOutlined />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Setting;
