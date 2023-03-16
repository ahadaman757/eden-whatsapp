import React, { useState } from "react";
import Styles from "./userpage.module.css";
import { Space, Table, Tag, Modal } from "antd";
import prof from "../../../assets/Ellipse 21.png";
const { Column, ColumnGroup } = Table;

const Userpage = () => {
  const [selectedUser, setSelectedUser] = useState(null); // state to store the selected user

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a onClick={() => setSelectedUser(text)}>{text}</a>, // on click of the name, set the selected user
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
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      email: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      ation: "",
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
        <Table
          bordered
          columns={columns}
          dataSource={data}
          pagination={{ position: ["bottomCenter"] }}
        ></Table>
        {/* Modal to display user details */}
        <Modal
          visible={!!selectedUser} // show the modal only if a user is selected
          onCancel={() => setSelectedUser(null)} // set the selected user to null when the modal is closed
          title={selectedUser}
          footer={null}
        >
          {/* display user details here */}
          <div className=" pt-1 df jcb ">
            <div>
              <img src={prof} style={{ width: "100px" }} />
            </div>
            <div>
              <p className="fon14 fontw6">Full Name </p>
              <p className="fon14 fontw6">Email Address </p>
              <p className="fon14 fontw6">WhatsApp Number </p>
              <p className="fon14 fontw6">Account Status </p>
              <p className="fon14 fontw6">Registered Date </p>
              <p className="fon14 fontw6">Last Active </p>
              <p className="fon14 fontw6">No. Messages Sent </p>
            </div>
            <div>
              <p className="fon14 fontw4">{selectedUser}</p>
              <p className="fon14 fontw4">bradleynicholson@gmail.com</p>
              <p className="fon14 fontw4">+923115829961</p>
              <p className="fon14 fontw4">Premium</p>
              <p className="fon14 fontw4">02/12/2022</p>
              <p className="fon14 fontw4">02/12/2022</p>
              <p className="fon14 fontw4">122</p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Userpage;
