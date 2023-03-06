import "antd/dist/reset.css";
import { Col, Form, Row, Input, Button } from "antd";
import Styles from "./profile.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Profile = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [refrsh, setrefrsh] = useState(false);
  const handleCancel = () => setPreviewOpen(false);
  const [userdata, setUserdata] = useState();
  const [emailvalue, setemailvalue] = useState();
  const [userid, setuserid] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data.details[0], "datahere");
        setUserdata(response.data.details[0]);
        setemailvalue(response.data.details[0].email);
        setuserid(response.data.details[0].id);
        setrefrsh(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refrsh]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
        className="fon14 fontw5"
      >
        Upload img
      </div>
    </div>
  );
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .put(
        `http://localhost:3001/user/${userid}`,
        {
          first_name: values.first_name,
          last_name: values.last_name,
          whatsapp_number: values.whatsApp_number,
          profile_img: fileList,
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
  return (
    <div className="p-2">
      <div className={`p-1 ${Styles.profhed}`}>
        <div className={`${Styles.hedbo}`}>
          <h1 className="fon20 fontw5">Personal Information</h1>
          <p className="fon16 fontw4 c61">
            Basic info, like your name and address, that you use on Nio
            Platform.
          </p>
        </div>
        <div className="pt-1">
          <div></div>
          <Form
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row>
              <Col className="df" lg={24}>
                <Upload
                  style={{ width: "1000px" }}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={handleChange}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
              </Col>
              <Col lg={10} className="me-1">
                {" "}
                <label className="fon16 fontw5">First Name</label>
                <Form.Item
                  className="mt-1"
                  name="first_name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your First Name!",
                    },
                  ]}
                >
                  <Input className={` ${Styles.inputf}`} />
                </Form.Item>
              </Col>
              <Col lg={10} className="me-1">
                {" "}
                <label className="fon16 fontw5">Last Name</label>
                <Form.Item
                  className="mt-1"
                  name="last_name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Last Name!",
                    },
                  ]}
                >
                  <Input className={` ${Styles.inputf}`} />
                </Form.Item>
              </Col>
              <Col lg={10} className="me-1">
                {" "}
                <label className="fon16 fontw5">Email Address</label>
                <Form.Item className="mt-1">
                  <Input value={emailvalue} className={` ${Styles.inputf}`} />
                </Form.Item>
              </Col>
              <Col lg={10} className="me-1">
                {" "}
                <label className="fon16 fontw5">WhatsApp Number</label>
                <Form.Item
                  className="mt-1"
                  name="whatsApp_number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your WhatsApp Number!",
                    },
                  ]}
                >
                  <Input className={` ${Styles.inputf}`} />
                </Form.Item>
              </Col>
              <Col className="df jcee" lg={20}>
                <div>
                  <Button htmlType="submit" className={`${Styles.subtn}`}>
                    Save Changes
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Profile;
