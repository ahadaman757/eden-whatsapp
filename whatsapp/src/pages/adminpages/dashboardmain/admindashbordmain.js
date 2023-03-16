import Styles from "./admindashbordmain.module.css";
import sendicon from "../../../assets/mdi_graph-timeline-variant.png";
import seenicon from "../../../assets/ph_users-three.png";
import pageicon from "../../../assets/mdi_clock-outline.png";
import pageicon1 from "../../../assets/tabler_premium-rights.png";
import DemoLine from "../../../component/charts/adminchart";
import { Row, Col } from "antd";
import Piechart from "../../../component/charts/piechart";
import Tablejs from "../../../component/admintable/table";
import CA from "../../../assets/flag/CA.png";
import FR from "../../../assets/flag/FR.png";
import ES from "../../../assets/flag/ES.png";
import IL from "../../../assets/flag/IL.png";
import IN from "../../../assets/flag/IN.png";
import NO from "../../../assets/flag/NO.png";
import PK from "../../../assets/flag/PK.png";
import QA from "../../../assets/flag/QA.png";
import RU from "../../../assets/flag/RU.png";
import US from "../../../assets/flag/US.png";

const AdminDashboardmain = () => {
  return (
    <div>
      <div className={`df aic  jcb fw py-2  ${Styles.dashmin}`}>
        <div className={`df aic mb-1 px-2 ${Styles.hr}`}>
          <div className={`df aic jcc me-1 ${Styles.bacolor}`}>
            <img src={sendicon} />
          </div>
          <div>
            <p className="pb10 m-0 fon16 fontw6 ">No. Visitors </p>
            <p className="m-0 fon20 fontw7">3</p>
          </div>
        </div>
        <div className={`df aic mb-1 px-2 ${Styles.hr}`}>
          <div className={`df aic jcc me-1 ${Styles.bulecolor}`}>
            <img src={seenicon} />
          </div>
          <div>
            <p className="pb10 m-0 fon16 fontw6 ">No. Registered Users</p>
            <p className="m-0 fon20 fontw7">3</p>
          </div>
        </div>
        <div className={`df aic mb-1 px-2 ${Styles.hr}`}>
          <div className={`df aic jcc me-1 ${Styles.orcolor}`}>
            <img src={pageicon} />
          </div>
          <div>
            <p className="pb10 m-0 fon16 fontw6 ">No. Trial Users</p>
            <p className="m-0 fon20 fontw7">3</p>
          </div>
        </div>
        <div className={`df aic mb-1 px-2 `}>
          <div className={`df aic jcc me-1 ${Styles.orcolor}`}>
            <img src={pageicon1} />
          </div>
          <div>
            <p className="pb10 m-0 fon16 fontw6 ">No. Premium Users</p>
            <p className="m-0 fon20 fontw7">3</p>
          </div>
        </div>
      </div>
      <div className="my-1 ">
        <Row className="df jcb">
          <Col lg={15}>
            <div className={` ${Styles.chartcon}`}>
              <div className={`df jcb fw p-1 ${Styles.chartheas}`}>
                <h1 className="m-0 fon18 fontw6">Visitors Analytics</h1>
                <button className={`fon14 fontw5 c61 ${Styles.chartbtn1}`}>
                  This Month
                </button>
              </div>
              <div className="p-1">
                <DemoLine />
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className={` ${Styles.chartcon}`}>
              <div className={`df jcb  p-1 ${Styles.chartheas}`}>
                <h1 className="m-0 fon18 fontw6">Read Statistic</h1>
                <button className={`fon14 fontw5 c61 ${Styles.chartbtn}`}>
                  This Month
                </button>
              </div>
              <div className="p-1 df jcb">
                <div className="df fdc">
                  <img className="mb-1" src={US} />
                  <img className="mb-1" src={CA} />
                  <img className="mb-1" src={IL} />
                  <img className="mb-1" src={ES} />
                  <img className="mb-1" src={PK} />
                  <img className="mb-1" src={FR} />
                  <img className="mb-1" src={NO} />
                  <img className="mb-1" src={IN} />
                  <img className="mb-1" src={RU} />
                  <img className="mb-1" src={QA} />
                </div>
                <div>
                  <p className=" fon16 fontw6">USA</p>
                  <p className=" fon16 fontw6">Canada</p>
                  <p className=" fon16 fontw6">Israel</p>
                  <p className=" fon16 fontw6">Spain</p>
                  <p className=" fon16 fontw6">Pakistan</p>
                  <p className=" fon16 fontw6">France</p>
                  <p className=" fon16 fontw6">Norway</p>
                  <p className=" fon16 fontw6">India</p>
                  <p className=" fon16 fontw6">Russia</p>
                  <p className=" fon16 fontw6">Qatar</p>
                </div>
                <div>
                  <p className=" fon16 fontw6">1.3k</p>
                  <p className=" fon16 fontw6">1.3k</p>
                  <p className=" fon16 fontw6">1.3k</p>
                  <p className=" fon16 fontw6">1.3k</p>
                  <p className=" fon16 fontw6">1.3k</p>
                  <p className=" fon16 fontw6">1.3k</p>
                  <p className=" fon16 fontw6">1.3k</p>
                  <p className=" fon16 fontw6">1.3k</p>
                  <p className=" fon16 fontw6">1.3k</p>
                  <p className=" fon16 fontw6">1.3k</p>
                </div>
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
export default AdminDashboardmain;
