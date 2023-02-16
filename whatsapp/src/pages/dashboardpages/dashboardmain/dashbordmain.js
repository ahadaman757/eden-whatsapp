import Styles from "./dashboardmain.module.css";
import sendicon from "../../../assets/Vector (1).png";
import seenicon from "../../../assets/charm_tick-double.png";
import pageicon from "../../../assets/Paper.png";
import Charts from "../../../component/charts/chart";
import { Row, Col } from "antd";
import Piechart from "../../../component/charts/piechart";
import Tablejs from "../../../component/table/table";
const Dashboardmain = () => {
  return (
    <div>
      <div className={`df aic jcb py-2  ${Styles.dashmin}`}>
        <div className={`df aic px-2 ${Styles.hr}`}>
          <div className={`df aic jcc me-1 ${Styles.bacolor}`}>
            <img src={sendicon} />
          </div>
          <div>
            <p className="pb10 m-0 fon16 fontw6 ">WhatsApp Sent</p>
            <p className="m-0 fon20 fontw7">3</p>
          </div>
        </div>
        <div className={`df aic px-2 ${Styles.hr}`}>
          <div className={`df aic jcc me-1 ${Styles.bulecolor}`}>
            <img src={seenicon} />
          </div>
          <div>
            <p className="pb10 m-0 fon16 fontw6 ">WhatsApp Read</p>
            <p className="m-0 fon20 fontw7">3</p>
          </div>
        </div>
        <div className={`df aic px-2 ${Styles.hr}`}>
          <div className={`df aic jcc me-1 ${Styles.orcolor}`}>
            <img src={pageicon} />
          </div>
          <div>
            <p className="pb10 m-0 fon16 fontw6 ">SMS Sent</p>
            <p className="m-0 fon20 fontw7">3</p>
          </div>
        </div>
        <div className={`df aic px-2 `}>
          <div className={`df aic jcc me-1 ${Styles.orcolor}`}>
            <img src={pageicon} />
          </div>
          <div>
            <p className="pb10 m-0 fon16 fontw6 ">SMS Sent</p>
            <p className="m-0 fon20 fontw7">3</p>
          </div>
        </div>
      </div>
      <div className="my-1 ">
        <Row className="df jcb">
          <Col lg={15}>
            <div className={` ${Styles.chartcon}`}>
              <div className={`df jcb p-1 ${Styles.chartheas}`}>
                <h1 className="m-0 fon18 fontw6">
                  WhatsApp message sent chart
                </h1>
                <button className={`fon14 fontw5 c61 ${Styles.chartbtn}`}>
                  This Month
                </button>
              </div>
              <div className="p-1">
                <Charts />
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className={` ${Styles.chartcon}`}>
              <div className={`df jcb p-1 ${Styles.chartheas}`}>
                <h1 className="m-0 fon18 fontw6">Read Statistic</h1>
                <button className={`fon14 fontw5 c61 ${Styles.chartbtn}`}>
                  This Month
                </button>
              </div>
              <div className="p-1">
                <Piechart />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <div className={`${Styles.Tablecobtainer}`}>
          <h1 className="m-0 p-1 fon18 fontw6">Recent Activity</h1>
          <Tablejs />
        </div>
      </div>
    </div>
  );
};
export default Dashboardmain;
