import React, { useState, useEffect } from "react";
import "../styles/login.css";
import form_man from "../assets/form-man.svg";
import { Button, Checkbox, Form, Input, message, Radio } from "antd";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [userRole, setUserRole] = useState("admin");

  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const dummyUserAgent = {
    id: 2,
    username: "agent",
    email: "agent@gmail.com",
    password: "123456789",
    roles: ["ROLE_ADMIN"],
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjc4OTUxNDAyLCJleHAiOjE2NzkwMzc4MDJ9.cdXLypIBIsdUiXQGx_fJgmbg9LvXn1nwWujDTCZoUd0",
  };

  const dummyUserOperator = {
    id: 28,
    username: "operator1",
    roles: ["ROLE_OPERATOR"],
    password: "operator",
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsImlhdCI6MTY3ODk1MjAyMCwiZXhwIjoxNjc5MDM4NDIwfQ.zlRQ4T_BLjLHou5FeAoe_pRONWdKAECRWHVL6i94guI",
  };

  const onFinish = async (values) => {
    console.log(values.userName, " ", values.password);
    console.log(values);
    console.log(userRole);

    if (values.userName && values.password) {
      let data;

      if (userRole === "admin") {
        // USING DUMMY USER DATA TO LOGIN
        const user = JSON.stringify(dummyUserAgent);
        localStorage.setItem("user", user);
        localStorage.setItem("token", dummyUserAgent.accessToken);
        navigate("/labManual");
        window.location.reload();

        // data = await AuthService.login(values.userName, values.password);
        // console.log(data);
        // if (data) {
        //   console.log("dtaa", data);
        //   localStorage.setItem("token", data.token);
        //   navigate("/labManual");
        //   window.location.reload();
        // }
      } else if (userRole === "operator") {
        const user = JSON.stringify(dummyUserOperator);
        localStorage.setItem("user", user);
        localStorage.setItem("token", dummyUserOperator.accessToken);
        navigate("/operatorParams");
        window.location.reload();

        // data = await AuthService.operatorLogin(
        //   values.userName,
        //   values.password
        // );
        // if (data) {
        //   console.log("dtaa", data);
        //   localStorage.setItem("token", data.token);
        //   navigate("/operatorParams");
        //   window.location.reload();
        // }
      } else {
        messageApi.open({
          type: "error",
          content: "Invalid user type!",
        });
        return;
      }
    } else {
      messageApi.open({
        type: "error",
        content: "User is not registered!",
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (e) => {
    setUserRole(e.target.value);
  };
  return (
    <div className="outside-container">
      {contextHolder}
      <section className="main overflow-hidden">
        <div
          className="flex flex-col align-middle justify-center rounded-md  drop-shadow-xl pt-5"
          style={{
            width: 400,
            backgroundColor: " rgba(84, 117, 171,.5)",
            // backgroundColor: "rgb(210, 247, 126,.3)",
            boxShadow: "5px 10px 10px #2E3D55",
          }}>
          <div className="rounded-lg">
            {/* <div className="flex justify-center items-center">
              <img
                className="w-56 h-20 mt-2 mb-4 ml-auto mr-auto hover:drop-shadow-xl"
                src={qaca_logo}
                alt="qaca_logo"
              />
            </div> */}
            {/* <h1 className="text-center font-bold text-6xl mt-2 mb-4 drop-shadow-md hover:drop-shadow-xl">
              Logo
            </h1> */}
            {/* <div className="flex justify-center items-center">
              <img
                className="w-40 h-18 mt-2 mb-4 ml-auto mr-auto hover:drop-shadow-xl"
                src={qaca_logo}
                alt="jaypee_logo"
              />
            </div>

            <div
              className="separator ml-auto mr-auto hover:drop-shadow-xl"
              style={{ backgroundColor: "#f28021" }}
            ></div>
            <p
              className="text-green-900 mb-3 text-center font-bold drop-shadow-md hover:drop-shadow-xl"
              style={{ color: "#f28021" }}
            >
              Giving Power to your Health
            </p> */}
          </div>
          <Form
            name="login"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="w-3/4 ml-auto mr-auto">
            <Form.Item
              name="userName"
              label="User Name"
              rules={[
                {
                  required: true,
                  message: "Please input your User Name!",
                },
              ]}
              className="min-w-full">
              <Input
                placeholder="User Name"
                className="min-w-full rounded-xl pt-2 pb-2"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}>
              <Input.Password
                placeholder="Password"
                className="min-w-full rounded-xl pt-2 pb-2"
              />
            </Form.Item>

            {/* <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            ></Form.Item> */}
            <div className="forget-area flex flex-row align-middle justify-between w-full mt-0 relative bottom-2 ml-auto">
              <Radio.Group onChange={onChange} value={userRole}>
                <Radio value={"admin"}>Admin</Radio>
                <Radio value={"operator"}>Operator</Radio>
              </Radio.Group>
            </div>

            <div className="forget-area flex flex-row align-middle justify-between w-full mt-0 relative bottom-2 ml-auto">
              <Checkbox>Remember me</Checkbox>
              {/* <div className="div cursor-pointer">Forgot Password</div> */}
            </div>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}>
              <Button
                type="primary"
                className=" text-white hover:bg-green-300 mt-2 uppercase"
                htmlType="submit"
                style={{ backgroundColor: "#2E3D55", paddingTop: 6 }}>
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default Login;
