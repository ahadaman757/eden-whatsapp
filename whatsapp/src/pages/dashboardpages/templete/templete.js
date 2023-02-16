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
const Templete = () => {
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
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
          <Form className="py-1">
            <Form.Item>
              <label className="mb-1 fon16  fontw6">Template label </label>
              <Input />
            </Form.Item>
            <Form.Item>
              <label className="mb-1 fon16  fontw6">Template Category </label>
              <Select
                defaultValue="lucy"
                style={{ width: "100%" }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
              />
            </Form.Item>
            <Form.Item>
              <label className="mb-1 fon16  fontw6">Template Message </label>
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <label className="mb-1 fon16  fontw6">URL (optional)</label>
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <div className="pt-1">
        <Row className="px-2">
          <Col lg={10}>
            <div className={`$ ${Styles.temcard}`}>
              <div className={`px-1 df aic jcb ${Styles.card}`}>
                <h1 className="pt-1  fon18 fontw6">Order Message </h1>
                <Switch style={{ background: "#31BA45" }} defaultChecked />
              </div>
              <div className="p-1">
                <div className={`p-1 ${Styles.des}`}>
                  <p className=" fon14 line-h27">
                    Hi 😃 Great news🤩! We have received your order of amounting
                    to Rs . Your Order is on its way. 😎 While your order
                    reaches you, check out some other amazing products in our
                    store like 😉 Make these products yours at . Add coupon code
                    during checkout.{" "}
                  </p>
                </div>
                <div className="df jcb py-1">
                  <ModalApp />
                  <button className={`${Styles.edtbtn}`} onClick={showModal1}>
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
                    <Form className="py-1">
                      <Form.Item>
                        <label className="mb-1 fon16  fontw6">
                          Template label{" "}
                        </label>
                        <Input />
                      </Form.Item>
                      <Form.Item>
                        <label className="mb-1 fon16  fontw6">
                          Template Category{" "}
                        </label>
                        <Select
                          defaultValue="lucy"
                          style={{ width: "100%" }}
                          options={[
                            { value: "jack", label: "Jack" },
                            { value: "lucy", label: "Lucy" },
                            { value: "Yiminghe", label: "yiminghe" },
                            {
                              value: "disabled",
                              label: "Disabled",
                              disabled: true,
                            },
                          ]}
                        />
                      </Form.Item>
                      <Form.Item>
                        <label className="mb-1 fon16  fontw6">
                          Template Message{" "}
                        </label>
                        <TextArea rows={4} />
                      </Form.Item>
                      <Form.Item>
                        <label className="mb-1 fon16  fontw6">
                          URL (optional)
                        </label>
                        <Input />
                      </Form.Item>
                    </Form>
                  </Modal>
                </div>
              </div>
            </div>
          </Col>
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
