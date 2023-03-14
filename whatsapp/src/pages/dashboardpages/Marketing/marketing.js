import { Button, Form, Table } from "antd";
import TextArea from "antd/es/input/TextArea";
import Styles from "./marketing.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Marketing = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://139.144.2.43:3004/marketing", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        setData(response.data.messageData);
        console.log(response);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "WHATSAPP NO.",
      key: "whatsapp_num",
      dataIndex: "whatsapp_num",
    },
    {
      title: "medium",
      dataIndex: "medium",
      key: "medium",
    },

    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  return (
    <>
      <div>
        <Form>
          <Form.Item>
            <TextArea
              placeholder="Write a marketing message to send"
              className={`${Styles.TextArea}`}
            />
          </Form.Item>
          <Form.Item>
            <TextArea
              placeholder="Enter contacts list:
Phone:FirstName:LastName"
              className={`${Styles.TextArea}`}
            />
          </Form.Item>
          <Form.Item className="df jcee">
            <Button className={`fontw6 fon16 ${Styles.btns}`}>submit</Button>
          </Form.Item>
        </Form>
        <div className={Styles.resamain}>
          {" "}
          <div className="px-1">
            <h1 className="m-0 py-1 fon18 fontw6">Customers Contacts</h1>
          </div>
          <Table
            bordered
            size="middle"
            scroll={{
              x: "calc(700px + 50%)",
              y: 240,
            }}
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
    </>
  );
};
export default Marketing;
