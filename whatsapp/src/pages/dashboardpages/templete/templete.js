import Styles from "./templete.module.css";
import { useState } from "react";
import { Button, Form, Select, Input, Modal, Switch, Space } from "antd";
import { Col, Row } from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import axios from "axios";
const Templete = () => {
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [userData, setUserdata] = useState();
  const [categoryData, setcategory] = useState();
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  const [refrsh, setrefrsh] = useState(false);
  const [modal2, contextHolder2] = Modal.useModal();
  const [Currentid, setCurrentid] = useState();
  const handleDelete = (id) => {
    Modal.confirm({
      title: "Do you want to delete this template?",
      icon: <ExclamationCircleOutlined />,
      content: "This action cannot be undone.",
      okText: "Yes",
      cancelText: "No",
      onOk: () => {
        axios
          .delete(`http://localhost:3001/template-details/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            console.log(id, "here");
            setrefrsh(true);
          })
          .catch((error) => {
            console.log(error);
            console.log(id, "here");
          });
      },
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/template-details", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setLoading(false);
        // console.log(res.data.details[0].id, "asdasdas");
        setUserdata(res.data.details);
      });

    axios
      .get("http://localhost:3001/category", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setLoading1(false);
        console.log(res.data.details, "as");
        setcategory(res.data.details);
      });

    // GET USER DATA
  }, [refrsh]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleOk1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post(
        "http://localhost:3001/templates",
        {
          label: values.template_label,
          category: values.template_category,
          message: values.template_message,
          url: values.URL,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setrefrsh(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish1 = (values, id) => {
    console.log("Success:", values);

    axios
      .put(
        `http://localhost:3001/template-details/${Currentid}`,
        {
          template_label: values.template_label,
          template_category: values.template_category,
          template_message: values.template_message,
          site_url: values.URL,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setrefrsh(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFinishFailed1 = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className={`df jcb aic p-1 m-0 ${Styles.Templeteheader}`}>
        <h1 className="m-0 fon18 fontw6">Message Template</h1>
        <Button
          className={`fon16  fontw5 ${Styles.modalbtm}`}
          type="primary"
          onClick={showModal}
        >
          <span>
            <PlusOutlined className=" p5px" />
          </span>
          Create New
        </Button>
        <Modal
          title="Create New Message Template"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="py-1"
          >
            <div>
              <label className="mb-1 fon16  fontw6">Template label </label>
              <Form.Item
                name="template_label"
                rules={[
                  {
                    required: true,
                    message: "Please input your Template label!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div>
              <label className="mb-1 fon16  fontw6">Template Category </label>
              <Form.Item
                name="template_category"
                rules={[
                  {
                    required: true,
                    message: "Please input your Template Category!",
                  },
                ]}
              >
                <Select
                  defaultValue={"Select Category"}
                  style={{ width: "100%" }}
                  options={
                    loading1
                      ? []
                      : categoryData.map((item) => ({
                          value: item.id,
                          label: item.name,
                        }))
                  }
                />
              </Form.Item>
            </div>
            <div>
              <label className="mb-1 fon16  fontw6">Template Message </label>
              <Form.Item
                name="template_message"
                rules={[
                  {
                    required: true,
                    message: "Please input your Template Message!",
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
            </div>
            <div>
              {" "}
              <label className="mb-1 fon16  fontw6">URL (optional)</label>
              <Form.Item
                name="URL"
                rules={[
                  {
                    required: true,
                    message: "Please input your Template URL!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <div className="pt-1">
        <Row className="px-2 jcb">
          {!loading ? (
            userData.map((Item) => {
              return (
                <Col lg={10}>
                  <div className={`  ${Styles.temcard}`}>
                    <div className={`px-1 df aic jcb ${Styles.card}`}>
                      <h1 className="pt-1  fon18 fontw6">Order Message </h1>
                      <Switch
                        style={{ background: "#31BA45" }}
                        defaultChecked
                      />
                    </div>
                    <div className="p-1">
                      <div className={`p-1 ${Styles.des}`}>
                        <p className=" fon14 line-h27">
                          {Item.template_message}
                        </p>
                      </div>
                      <div className="df jcb py-1">
                        <div>
                          <Space>
                            <button
                              onClick={() => {
                                handleDelete(Item.id);
                                console.log(Item.id, "Asdasdasd");
                              }}
                              className={`${Styles.deletbtn}`}
                            >
                              <span>
                                <DeleteOutlined />
                              </span>{" "}
                              Delete
                            </button>
                          </Space>
                          {contextHolder2}
                        </div>

                        <button
                          className={`${Styles.edtbtn}`}
                          onClick={() => {
                            showModal1();
                            setCurrentid(Item.id);
                          }}
                        >
                          {" "}
                          <span>
                            <EditOutlined />
                          </span>{" "}
                          Edit
                        </button>
                        <Modal
                          title="Create New Message Template"
                          open={isModalOpen1}
                          onOk={handleOk1}
                          onCancel={handleCancel1}
                        >
                          <Form
                            initialValues={{
                              remember: true,
                            }}
                            onFinish={onFinish1}
                            onFinishFailed={onFinishFailed1}
                            className="py-1"
                          >
                            <div>
                              <label className="mb-1 fon16  fontw6">
                                Template label{" "}
                              </label>
                              <Form.Item
                                name="template_label"
                                rules={[
                                  {
                                    required: true,
                                    message:
                                      "Please input your Template label!",
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                            </div>
                            <div>
                              <label className="mb-1 fon16  fontw6">
                                Template Category{" "}
                              </label>
                              <Form.Item
                                name="template_category"
                                rules={[
                                  {
                                    required: true,
                                    message:
                                      "Please input your Template Category!",
                                  },
                                ]}
                              >
                                <Select
                                  defaultValue={"Select Category"}
                                  style={{ width: "100%" }}
                                  options={
                                    loading1
                                      ? []
                                      : categoryData.map((item) => ({
                                          value: item.id,
                                          label: item.name,
                                        }))
                                  }
                                />
                              </Form.Item>
                            </div>
                            <div>
                              {" "}
                              <label className="mb-1 fon16  fontw6">
                                Template Message{" "}
                              </label>
                              <Form.Item
                                name="template_message"
                                rules={[
                                  {
                                    required: true,
                                    message:
                                      "Please input your Template Message!",
                                  },
                                ]}
                              >
                                <TextArea rows={4} />
                              </Form.Item>
                            </div>
                            <div>
                              <label className="mb-1 fon16  fontw6">
                                URL (optional)
                              </label>
                              <Form.Item
                                name="URL"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your URL!",
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>
                              <Form.Item>
                                <Button htmlType="submit">submit</Button>
                              </Form.Item>
                            </div>
                          </Form>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })
          ) : (
            <p>sa</p>
          )}
        </Row>
      </div>
    </div>
  );
};
const ModalApp = () => {
  const [modal2, contextHolder2] = Modal.useModal();
  const confirm = () => {
    modal2.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Bla bla ...",
      okText: "confirm",
      cancelText: "cancel",
    });
  };

  return (
    <>
      <Space>
        <button onClick={confirm} className={`${Styles.deletbtn}`}>
          <span>
            <DeleteOutlined />
          </span>{" "}
          Delete
        </button>
      </Space>
      {contextHolder2}
    </>
  );
};
export default Templete;
