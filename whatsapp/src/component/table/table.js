import { Table, Spin, Tag } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";

const MyTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://139.144.2.43:3001/messagedata", {
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
            tag = <Tag color="blue">oder placed</Tag>;
            break;
          case 2:
            tag = <Tag color="green">shipped</Tag>;
            break;
          case 3:
            tag = <Tag color="yellow">update</Tag>;
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

export default MyTable;

// import { Space, Table, Tag } from "antd";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Email",
//     dataIndex: "email",
//     key: "email",
//   },
//   {
//     title: "MESSAGE TEMPLATE",
//     key: "tags",
//     dataIndex: "tags",
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? "geekblue" : "red";
//           if (tag === "loser") {
//             color = "blue";
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: "Status",
//     dataIndex: "status",
//     key: "status",
//   },
//   {
//     title: "Date",
//     dataIndex: "date",
//     key: "date",
//   },
// ];

// const Tabledata = () => {
//   const [data, setData] = useState([]);
//   const [names, setnames] = useState();
//   const [loading, setloading] = useState(true);
//   const [state, setstate] = useState({});
//   useEffect(() => {
//     axios
//       .get("http://139.144.2.43:3001/messagedata", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//       })
//       .then((response) => {
//         const apiData = response.data.details;
//         const firstName = response.data.firstName;
//         setnames(firstName);

//         setstate(apiData);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const dataa = loading
//     ? "wait"
//     : state.map((row) => ({ Name: names, Email: row.email }));

//   return <Table columns={columns} dataSource={dataa} />;
// };

// export default Tabledata;

// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// import { Table } from "antd";

// function Tabledata() {
//   const [state, setstate] = useState({});
//   const [loading, setloading] = useState(true);
//   useEffect(() => {
//     getData();
//   }, []);

// const getData = async () => {
//   const res = await Axios.get("http://139.144.2.43:3001/messagedata");

//   setstate(res.data);
//   setloading(false);
// };
// const data = loading
//   ? "wait"
//   : state.map((row) => ({ Name: row.name, Email: row.email }));

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "Name",
//       width: 150,
//     },
//     {
//       title: "Email",
//       dataIndex: "Email",
//       width: 150,
//     },
//   ];

//   return (
//     <div>
//       <Table
//         columns={columns}
//         dataSource={data}
//         pagination={{ pageSize: 50 }}
//         scroll={{ y: 240 }}
//       />
//       ,
//     </div>
//   );
// }

// export default Tabledata;
