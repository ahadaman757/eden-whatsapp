import Styles from "./accordian.module.css";
import { useState } from "react";
import { UpOutlined } from "@ant-design/icons";
const Accordian = (props) => {
  const [accordian, setaccordian] = useState(false);
  const acoStyle = {
    color: accordian ? "white" : "black",
    border: accordian ? "none" : "1px solid #C8C8C8",
    background: accordian ? "#0275d8" : "white",
  };
  return (
    <div className="my-1">
      <div
        className={`df aic jcb px-1 ${Styles.accordian} `}
        onClick={() => {
          setaccordian(!accordian);
        }}
        style={acoStyle}
      >
        {" "}
        <h1 className="fon18 fontw7 ">{props.header}</h1>
        <UpOutlined
          style={{
            transform: accordian ? " rotate(180deg)" : " rotate(0deg)",
            transition: " transform 0.5s",
          }}
        />
      </div>
      <div
        style={{
          overflow: "hidden",
          height: accordian ? "70px" : "0px",
        }}
        className={`px-1  ${Styles.acodins}`}
      >
        <p
          className={`py-1 fon18 fontw4 ${Styles.acodins}`}
          style={{ overflow: "hidden" }}
        >
          {" "}
          {props.text}
        </p>
      </div>
    </div>
  );
};
export default Accordian;
