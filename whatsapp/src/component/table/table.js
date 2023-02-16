import { Space, Table, Tag } from "antd";
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
const Tabledata = () => <Table columns={columns} dataSource={data} />;
export default Tabledata;
