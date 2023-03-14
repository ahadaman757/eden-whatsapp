import Navbar from "../../component/Navbar/Nabar";
import mobilegr from "../../assets/Group 15.png";
import setticon from "../../assets/Group 19.png";
import brackicon from "../../assets/Group 20.png";
import Messages from "../../assets/Group 21.png";
import whatsappicon from "../../assets/logos_whatsapp-icon.png";
import conicon6 from "../../assets/image 6.png";
import conicon7 from "../../assets/image 7.png";
import conicon8 from "../../assets/image 8.png";
import conicon9 from "../../assets/image 9.png";
import conicon10 from "../../assets/image 10.png";
import conicon11 from "../../assets/image 11.png";
import laptopi from "../../assets/Group 23.png";
import mesicon from "../../assets/ic_round-textsms.png";
import dwonlodicon from "../../assets/grommet-icons_install-option.png";
import settingicon from "../../assets/ph_gear@2x.png";
import whatsappwicon from "../../assets/ic_twotone-whatsapp.png";
import watch from "../../assets/amazfit-gts-3-pakistan-priceoye-xzefz-500x500 1.png";
import shose from "../../assets/amazfit-gts-3-pakistan-priceoye-xzefz-500x500 2.png";

import Slider from "react-slick";
import { useState } from "react";
import Reviewcard from "../../component/reviwecard/reviewcard";
import { Col, Divider, Row, Button, Modal, Form, Input } from "antd";
import Styles from "./home.module.css";
import Footer from "../../component/Footer/Footer";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [value, setValue] = useState();
  const getFlag = (short = "string") => {
    const data = require(`world_countries_lists/data/flags/24x24/${short.toLowerCase()}.png`);
    // for dumi
    if (typeof data === "string") {
      return data;
    }
    // for CRA
    return data.default;
  };
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [settings, setSettings] = useState({
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <button className="custom-prev-button">Prev</button>,
    nextArrow: <button className="custom-next-button">Next</button>,
    // responsive: [
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 900,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    // ],
  });
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post("http://139.144.2.43:3004/send-message", {
        number: values.number,
        message: `Hey ${values.first_name}! Thank you for choosing us. Your order has been placed successfully and we are reaching out to you for confirmation of 100$ item`,
        from: "saas@gmal.com",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish1 = (values) => {
    console.log("Success:", values);
    axios
      .post("http://139.144.2.43:3004/send-message", {
        number: values.number,
        message: `Hey ${values.first_name}! Thank you for choosing us. Your order has been placed successfully and we are reaching out to you for confirmation of 100$ item`,
        from: "saas@gmal.com",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onFinishFailed1 = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="">
        <Navbar />
        <div className="mt-5">
          <h1 className={`tc fon50 fontw7  ${Styles.heading}`}>
            <span className={`px-1 ${Styles.ling}`}>WhatsApp & SMS </span>
            API for
            <br /> your Brand.
          </h1>
          <p className="mt-3 fon18 fontw4 tc line-h27">
            Enrich your customer experience and conversion with our TOP-NOTCH
            <br />
            WhatsApp & SMS API. The only choice so you and your customers can
            <br />
            track events and happenings with world’s popular communication
            <br />
            channel.
          </p>
          <div className="mt-3 df jcc aic">
            <button className={`me-1 fon16 fontw6 ${Styles.bnthero}`}>
              Get Free Trail
            </button>{" "}
            <a className=" fon16 fontw6">FAQ</a>
          </div>
          <div className={`mt-2 df jcc ${Styles.mobilegr}`}>
            <img className={`${Styles.mobimg}`} src={mobilegr} />
          </div>
        </div>
        <div className={`py-3 ${Styles.seccont}`}>
          <h1 className="fon38 fontw7 tc">
            Why We Are the best from the others
          </h1>
          <div className="container df jcb mt-3 fw">
            <div className="df">
              <img className={`me-1 ${Styles.msb}`} src={setticon} />
              <div>
                <p className="fon22 fontw6">Easy to setup</p>
                <p className="fon18 c61 fontw4">
                  Get started with the WhatsApp
                  <br /> and SMS API within seconds.
                </p>
              </div>
            </div>
            <div className="df">
              <img className={`me-1 ${Styles.msb}`} src={brackicon} />
              <div>
                <p className="fon22 fontw6">Developers Friendly</p>
                <p className="fon18 c61 fontw4">
                  Change it the way to like!
                  <br /> With our super developer friendly
                  <br /> code and documentation.
                </p>
              </div>
            </div>
            <div className="df">
              <img className={`me-1 ${Styles.msb}`} src={Messages} />
              <div>
                <p className="fon22 fontw6">Messages</p>
                <p className="fon18 c61 fontw4">
                  Send messages to WhatsApp
                  <br /> or SMS without any hassle!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container py-4 df jca">
            <div>
              <h1 className="fon38 fontw7 tc">What We Do</h1>
              <p className="fon18 c61 fontw4 tc">
                Enabling you to use cloud communications to interact with
                people.
              </p>
              <Row className=" df jcc ">
                <Col md={24} lg={9} className="df aic">
                  <div className="mt-2  ">
                    <h1 className="fon28 fontw7">
                      <span>
                        <img src={whatsappicon} />
                      </span>
                      WhatsApp Integration{" "}
                    </h1>
                    <p className="fon18 c61 fontw4 line-h27 ">
                      WhatsApp is one of the most popular communication medium,
                      and businesses are migrating towards WhatsApp for better
                      communication and conversion. So, why shouldn’t you? With
                      our extensive mechanism built with latest technologies and
                      compliance approved we provide you access to the world of
                      better and faster communication. Click below to learn
                      more!
                    </p>
                    <button
                      onClick={() => {
                        navigate("/whatsappapi");
                      }}
                      className={`fon18 fontw5 ${Styles.whatsapbtn}`}
                    >
                      Get Started
                    </button>
                  </div>
                </Col>

                <Col md={24} lg={9}>
                  <Row className=" ">
                    <Col md={9} lg={9} sm={24}>
                      <div className={`${Styles.comicon}`}>
                        <img src={conicon6} />
                        <img src={conicon9} />
                        <img src={conicon10} />
                      </div>
                    </Col>
                    <Col
                      Styles={{ width: "100%" }}
                      md={9}
                      lg={9}
                      sm={24}
                      className={`df aic `}
                    >
                      <div className={` ${Styles.comicon}`}>
                        {" "}
                        <img src={conicon7} />
                        <img src={conicon8} />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
          <Row className="container df jce">
            <Col md={24} lg={9}>
              <div>
                <img style={{ width: "100%" }} src={conicon11} />
              </div>
            </Col>
            <Col md={24} lg={9}>
              <div>
                <h1 className="fon28 fontw7">
                  {" "}
                  <span>
                    <img src={mesicon} />
                  </span>{" "}
                  SMS API
                </h1>
                <p className="fon18 c61 fontw4 line-h27">
                  SMS conversations have an open rate of above 98%. As a result,
                  SMS is a useful tool for sending time-sensitive messages like
                  alarms, order confirmations, and appointment reminders. It's
                  easier than ever with us! Click the following button to learn
                  more.
                </p>
                <button className={`fon18 fontw5 ${Styles.msebtn}`}>
                  Get Started
                </button>
              </div>
            </Col>
          </Row>
          <div className="container  py-4">
            <h1 className="fon38 fontw7">Plugin Features</h1>
            <p className="fon18 c61 fontw4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              blandit sem a{" "}
            </p>
            <Row className="df jcb">
              <Col lg={8}>
                <div className={`${Styles.dumdata}`}></div>
              </Col>
              <Col lg={8}>
                <div className={`${Styles.dumdata}`}></div>
              </Col>
              <Col lg={8}>
                <div className={`${Styles.dumdata}`}></div>
              </Col>
            </Row>
            <div className="pt-3 df jcc">
              <button className={`fon18 fontw5 ${Styles.afbtn}`}>
                View All Features
              </button>
            </div>
          </div>
          <Row className="container py-3 df jcb">
            <Col lg={11}>
              <img style={{ width: "100%" }} src={laptopi} />
            </Col>
            <Col lg={10} className={`df aic`}>
              <div>
                <h1 className="fon38 fontw7">How it works?</h1>
                <p className="fon18 c61 fontw4">
                  Learn How Our WhatsApp API Works & Connect to Your Number
                </p>
                <div className={`df aic mb-1 p-1 ${Styles.feopcon}`}>
                  <img
                    className="me-1"
                    style={{ width: "45px" }}
                    src={dwonlodicon}
                  />{" "}
                  <p className="fon20 m-0   fontw5">Install Plugin</p>
                </div>
                <div className={`df aic mb-1 p-1 ${Styles.feopcon}`}>
                  <img
                    className="me-1"
                    style={{ width: "45px" }}
                    src={settingicon}
                  />{" "}
                  <p className="fon20 m-0 fontw5">Setup your profile</p>
                </div>
                <div className={`df aic mb-1 p-1 ${Styles.feopcon}`}>
                  <img
                    className="me-1"
                    style={{ width: "45px" }}
                    src={whatsappwicon}
                  />{" "}
                  <p className="fon20 m-0 fontw5">
                    Get Notifications on WhatsApp Messages
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div className={` ${Styles.porducontainer}`}>
            <Row className={`container df py-2 `}>
              <Col lg={10} className="df pe-lg-5 aic">
                <div>
                  <h1 className="fon28 fontw7">Live Demo </h1>
                  <p className="fon24 line-h41 ">
                    Get WhatsApp notification by simulate an order from one of
                    these products
                  </p>
                </div>
              </Col>
              <Col lg={12} className="ps-lg-4">
                <Row className="pb-2">
                  <Col sm={12}>
                    <div className={`p-1 ${Styles.prod}`}>
                      <div className={`df jcc ${Styles.wtach}`}>
                        <img src={watch} />
                      </div>
                      <p className="fon17 fontw5">Amazfit GTS 3</p>
                      <p className="fon17 fontw7">$100</p>

                      <a
                        className="fon17 fontw5"
                        type="primary"
                        onClick={() => setOpen(true)}
                      >
                        Buy Now
                      </a>
                      <Modal
                        title=""
                        centered
                        open={open}
                        onOk={() => setOpen(false)}
                        onCancel={() => setOpen(false)}
                        width={300}
                      >
                        <Form
                          onFinish={onFinish}
                          onFinishFailed={onFinishFailed}
                          className="pt-2"
                        >
                          <div className={`df jcc ${Styles.wtach}`}>
                            <img src={watch} />
                          </div>
                          <label>Name</label>
                          <Form.Item
                            name="first_name"
                            rules={[
                              {
                                required: true,
                                message: "Please input your name!",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <label>Whatsapp Number</label>
                          <Form.Item
                            name="number"
                            rules={[
                              {
                                required: true,
                                message: "Please input your number!",
                              },
                            ]}
                          >
                            <PhoneInput
                              className={`mt-1 px-1  ${Styles.Inputfrom}`}
                              placeholder="Enter phone number"
                              value={value}
                              onChange={setValue}
                            />
                          </Form.Item>
                          <Form.Item>
                            <Button htmlType="submit">submit</Button>
                          </Form.Item>
                        </Form>
                        <div className="df jcb">
                          <p className="fon18 fontw6">Total</p>{" "}
                          <p className="fon17 fontw7">$100</p>
                        </div>
                      </Modal>
                    </div>
                  </Col>
                  <Col sm={12}>
                    <div className={`p-1 ${Styles.prod}`}>
                      <div className={`df jcc `}>
                        <img src={shose} />
                      </div>
                      <p className="fon17 fontw5">UPCOURT 5</p>
                      <p className="fon17 fontw7">$100</p>
                      <a
                        onClick={() => setOpen1(true)}
                        className="fon17 fontw5"
                      >
                        Buy Now
                      </a>
                      <Modal
                        title=""
                        centered
                        open={open1}
                        onOk={() => setOpen1(false)}
                        onCancel={() => setOpen1(false)}
                        width={300}
                      >
                        <Form
                          onFinish={onFinish1}
                          onFinishFailed={onFinishFailed1}
                          className="pt-2"
                        >
                          <div className={`df jcc ${Styles.wtach}`}>
                            <img src={shose} />
                          </div>
                          <label>Name</label>
                          <Form.Item
                            name="first_name"
                            rules={[
                              {
                                required: true,
                                message: "Please input your name!",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <label>Whatsapp Number</label>
                          <Form.Item
                            name="number"
                            rules={[
                              {
                                required: true,
                                message: "Please input your number!",
                              },
                            ]}
                          >
                            <PhoneInput
                              className={`mt-1 px-1  ${Styles.Inputfrom}`}
                              placeholder="Enter phone number"
                              value={value}
                              onChange={setValue}
                            />
                          </Form.Item>
                          <Form.Item>
                            <Button htmlType="submit">submit</Button>
                          </Form.Item>
                        </Form>
                        <div className="df jcb">
                          <p className="fon18 fontw6">Total</p>{" "}
                          <p className="fon17 fontw7">$100</p>
                        </div>
                      </Modal>
                    </div>
                  </Col>
                </Row>

                <p className="ps-lg-2 fon15 line-h27">
                  * You will get new order notification right after place an
                  order & follow-up order notification after 3 days
                </p>
              </Col>
            </Row>
          </div>
          <div className={`py-4 ${Styles.plancon}`}>
            <h1 className="tc fon38 fontw7 ">Choose your plan</h1>
            <p className="tc c61 fon18 fontw4">Choose Right Plan Below</p>
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
          <div className={`   ${Styles.plancon} `}>
            <div className={` container  `}>
              <div style={{ maxWidth: "90%", margin: "0 auto" }}>
                <Slider {...settings}>
                  <div className="df jcc">
                    <Reviewcard />
                  </div>
                  <div>
                    <Reviewcard />
                  </div>
                  <div>
                    <Reviewcard />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className={` ${Styles.gradcon}`}>
            <div className={`container p-4 ${Styles.gradcon}`}>
              <Row className={`mx-md-5 df jcb p-md-4 mt-4 ${Styles.footducon}`}>
                <Col>
                  <h1 className="fon30 fontw7">
                    Get Your
                    <br /> WhatsApp & SMS API
                  </h1>
                </Col>
                <Col>
                  <button className={`fon18  fontw6 ${Styles.footbtn}`}>
                    Get Started
                  </button>
                </Col>
              </Row>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
