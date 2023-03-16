import { Table, Spin, Tag } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";

const Admintable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://139.144.2.43:3001/messagedatall", {
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
      title: "Message From",
      dataIndex: "massage_from",
      key: "massage_from",
    },
    {
      title: "Message To",
      dataIndex: "massage_to",
      key: "massage_to",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => {
        let tag;
        switch (text) {
          case 1:
            tag = <Tag color="blue">Order Placed</Tag>;
            break;
          case 2:
            tag = <Tag color="green">Shipped</Tag>;
            break;
          case 3:
            tag = <Tag color="yellow">Update</Tag>;
            break;
          default:
            tag = <Tag>{text}</Tag>;
            break;
        }
        return tag;
      },
    },
    {
      title: "Time",
      dataIndex: "sent_on",
      key: "sent_on",
    },
    // more columns...
  ];

  return (
    <Spin spinning={loading}>
      <Table
        bordered
        // size="middle"
        // scroll={{
        //   x: "calc(700px + 50%)",
        //   y: 240,
        // }}
        dataSource={data}
        columns={columns}
      />
    </Spin>
  );
};

export default Admintable;
