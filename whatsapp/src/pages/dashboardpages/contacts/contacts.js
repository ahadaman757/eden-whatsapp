import Styles from "./contacts.module.css";
import { Space, Table, Tag } from "antd";
const Contacts = () => {
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
      key: "tags",
      dataIndex: "tags",
    },

    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",

      email: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",

      email: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",

      email: "Sydney No. 1 Lake Park",
    },
  ];
  return (
    <div>
      <div className={Styles.resamain}>
        {" "}
        <div className="px-1">
          <h1 className="m-0 py-1 fon18 fontw6">Recent Activity</h1>
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
  );
};
export default Contacts;
