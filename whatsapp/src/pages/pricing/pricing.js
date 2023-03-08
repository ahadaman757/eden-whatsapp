import Styles from "./pricing.module.css";
import Navbar from "../../component/Navbar/Nabar";
import Footer from "../../component/Footer/Footer";
import crossicon from "../../assets/gridicons_cross-circle.png";
import tickicon from "../../assets/mdi_tick-circle.png";
import { Row, Col } from "antd";
const Pricing = () => {
  return (
    <div>
      <div className={` ${Styles.Pricingmain} `}>
        <Navbar />
        <div className={`py-4 container ${Styles.Pricingmain} `}>
          <h1 className="fon50 fontw7 tc">
            Ready to start with
            <br />
            Company name?
          </h1>
          <p className="fon16 fontw4 tc  mt-4">HOME > PRICING</p>
        </div>
      </div>
      <div className={`py-4 `}>
        <Row className="container df jcc">
          <Col>
            <div className={`${Styles.plancard} m-1 py-2 df fdc jcb me-1`}>
              <div className={`${Styles.hr}`}>
                <h1 className="tc  fon22 fontw6">Basic</h1>
                <div className="df jcc ">
                  <h1 className="fon38 fontw7 pe-1 aic">$14</h1>
                  <p className="fon13">
                    Per
                    <br /> Month
                  </p>
                </div>
              </div>

              <div className="df jcc">
                <button className={`fon18  fontw6 ${Styles.cpbtn}`}>
                  Choose Plan
                </button>
              </div>
            </div>
          </Col>
          <Col>
            <div className={`${Styles.plancard} m-1 df fdc jcb me-1`}>
              <div className={`${Styles.hr}`}>
                <div className={`${Styles.bahge}`}>
                  <h1 className="tc fon22 fontw6 m-0">Popular</h1>
                </div>
                <h1 className="tc  fon22 fontw6">Standard</h1>
                <div className="df jcc ">
                  <h1 className="fon38 fontw7 pe-1 aic">$40</h1>
                  <p className="fon13">
                    Per
                    <br /> Month
                  </p>
                </div>
              </div>

              <div className="df pb-2 jcc">
                <button className={`fon18  fontw6 ${Styles.cpbtn}`}>
                  Choose Plan
                </button>
              </div>
            </div>
          </Col>
          <Col>
            <div className={`${Styles.plancard} py-2 m-1 df fdc jcb me-1`}>
              <div className={`${Styles.hr}`}>
                <h1 className="tc  fon22 fontw6">Enterprise</h1>
                <div className="df jcc ">
                  <h1 className="fon38 fontw7 pe-1 aic">$80</h1>
                  <p className="fon13">
                    Per
                    <br /> Month
                  </p>
                </div>
              </div>

              <div className="df jcc ">
                <button className={`fon18  fontw6 ${Styles.cpbtn}`}>
                  Choose Plan
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="py-4">
        <table className={`container ${Styles.table}  `}>
          <tr className={` pb-1  ${Styles.titletable}`}>
            <th className="fon16 ps-1 pb-1 df jcs fontw6">FEATURES</th>
            <th className="fon16 pb-1 fontw6">BASIC</th>
            <th className="fon16 pb-1 fontw6">STANDARD</th>
            <th className="fon16 pb-1 fontw6">ENTERPRISE</th>
          </tr>
          <tr className={`   ${Styles.titletableitem}`}>
            <th className="fon16 df jcs py-1 ps-1 fontw4">demo feature 1</th>{" "}
            <th className="py-1">
              <img src={tickicon} />
            </th>
            <th className="py-1">
              <img src={tickicon} />
            </th>
            <th className="py-1">
              <img src={tickicon} />
            </th>{" "}
          </tr>
          <tr className={`   ${Styles.titletableitem}`}>
            <th className="fon16 py-1 df ps-1 jcs fontw4">demo feature 1</th>{" "}
            <th className="py-1">
              <img src={tickicon} />
            </th>
            <th className="py-1">
              <img src={tickicon} />
            </th>
            <th className="py-1">
              <img src={tickicon} />
            </th>{" "}
          </tr>
          <tr className={`   ${Styles.titletableitem}`}>
            <th className="fon16 py-1 ps-1 df jcs fontw4">demo feature 1</th>{" "}
            <th className="py-1">
              <img src={tickicon} />
            </th>
            <th className="py-1">
              <img src={tickicon} />
            </th>
            <th className="py-1">
              <img src={tickicon} />
            </th>{" "}
          </tr>
          <tr className={`   ${Styles.titletableitem}`}>
            <th className="fon16 py-1 ps-1 df jcs fontw4">demo feature 1</th>{" "}
            <th className="py-1">
              <img src={crossicon} />
            </th>
            <th className="py-1">
              <img src={tickicon} />
            </th>
            <th className="py-1">
              <img src={tickicon} />
            </th>{" "}
          </tr>
          <tr className={`   ${Styles.titletableitem}`}>
            <th className="fon16 py-1 ps-1 df jcs fontw4">demo feature 1</th>{" "}
            <th className="py-1">
              <img src={crossicon} />
            </th>
            <th className="py-1">
              <img src={crossicon} />
            </th>
            <th className="py-1">
              <img src={tickicon} />
            </th>{" "}
          </tr>
          <tr className={`  `}>
            <th className="fon16 py-1 ps-1 df jcs fontw4">demo feature 1</th>{" "}
            <th className="py-1">
              <img src={crossicon} />
            </th>
            <th className="py-1">
              <img src={crossicon} />
            </th>
            <th className="py-1">
              <img src={tickicon} />
            </th>{" "}
          </tr>
          <tr className={`   ${Styles}`}>
            <th className="fon16 py-1 df jcs fontw4"></th>{" "}
            <th className="py-1">
              <div>
                {" "}
                <button className={`fon16 fontw6 m-1  ${Styles.tablebtn}`}>
                  Choose Plan
                </button>
              </div>
            </th>
            <th className="py-1">
              {" "}
              <button className={`fon16 fontw6 ${Styles.tablebtn}`}>
                Choose Plan
              </button>
            </th>
            <th className="py-1">
              <button className={`fon16 fontw6 ${Styles.tablebtn}`}>
                Choose Plan
              </button>
            </th>{" "}
          </tr>
        </table>
      </div>

      <Footer />
    </div>
  );
};
export default Pricing;
