import Styles from "./recentactivity.module.css";
import { Space, Table, Tag } from "antd";

const Recentactivity = () => {
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
      title: "MESSAGE TEMPLATE",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "red";
            if (tag === "loser") {
              color = "blue";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
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
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",

      email: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",

      email: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div>
      <div className={Styles.resamain}>
        {" "}
        <div className="px-1">
          <h1 className="m-0 py-1 fon18 fontw6">Recent Activity</h1>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};
export default Recentactivity;
