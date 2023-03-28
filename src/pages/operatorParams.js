import React, { useEffect, useState, useContext } from "react";

import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const dummySelectedData = [
  "parameter_LAB1",
  "parameter_LAB2",
  "parameter_LAB3",
];

const OperatorParamsScreen = ({ initialValues, onSubmit }) => {
  const navigate = useNavigate();
  const [selectedParams, setSelectedParams] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await AuthService.operatorUpload(user.username);
  //     setSelectedParams(data.data.selectedParameters);
  //     // setData(data.data.selectedParameters);
  //     console.log(data);
  //     console.log(data.data.selectedParameters);
  //   };
  //   fetchData();
  // }, []);

  // const onFinish = (values) => {
  //   onSubmit(values);
  // };

  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 20,
    },
  };

  const handleSaveClick = () => {
    message.success(" Data Upload Successfully!");
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };
  return (
    <div className="pt-5">
      <h2 className="pb-5 text-center">Operator Parameter Config</h2>
      <Form
        // onFinish={onFinish}
        {...layout}
        layout="horizontal"
        className="w-3/4">
        {/* USING DUMMY DATA */}
        {dummySelectedData.map((item, index) => (
          <Form.Item
            key={index}
            name={["items", index]}
            label={`${item}`}
            rules={[
              {
                required: true,
                message: `Please enter a value for Item ${index + 1}`,
              },
            ]}
            className="min-w-full">
            <Input className="min-w-full rounded-xl pt-2 pb-2" />
          </Form.Item>
        ))}
        {/* {selectedParams.map((item, index) => (
          <Form.Item
            key={index}
            name={["items", index]}
            label={`${item}`}
            rules={[
              {
                required: true,
                message: `Please enter a value for Item ${index + 1}`,
              },
            ]}
            className="min-w-full">
            <Input className="min-w-full rounded-xl pt-2 pb-2" />
          </Form.Item>
        ))} */}
        <Form.Item
          wrapperCol={{
            offset: 14,
            span: 14,
          }}
          className="min-w-full">
          <Button
            onClick={handleSaveClick}
            type="primary"
            htmlType="submit"
            className=" text-white hover:bg-green-300 mt-2 uppercase">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default OperatorParamsScreen;
