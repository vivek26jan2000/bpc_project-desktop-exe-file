import { Button, Checkbox, message } from "antd";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";
const dummyCheckboxData = [
  { id: 1, label: "Parameters 1-LAB" },
  { id: 2, label: "Parameters 2-LAB" },
  { id: 3, label: "Parameters 3-LAB" },
  { id: 4, label: "Parameters 4-LAB" },
];
const CheckboxGroup = Checkbox.Group;
const ParametersScreen = () => {
  const navigate = useNavigate();

  const [checkedList, setCheckedList] = useState([]);
  const [data, setData] = useState([]);
  const [selectedParams, setSelectedParams] = useState([]);

  const checkboxData = data.map((el, i) => {
    return {
      id: i,
      label: el,
    };
  });

  const handleCheckboxChange = (checkedValues) => {
    // console.log(checkedValues);
    setCheckedList(checkedValues);
  };
  // console.log("🔥", checkedList);

  const saveAgentConfigParameter = () => {
    const selectedInputParams = data.filter((el, i) => checkedList.includes(i));
    setSelectedParams(selectedInputParams);
    return selectedInputParams;
  };
  // console.log("Selected Params:", selectedParams);

  // save selected Parameters into selectedparameter database
  // useEffect(() => {
  //   const obj = {
  //     username: agentConfig.username,
  //     password: agentConfig.password,
  //     selectedParams,
  //   };
  //   const postData = async () => {
  //     await AuthService.selectedParameters(obj);
  //   };
  //   try {
  //     if (obj.selectedParams.length > 0) postData();
  //   } catch (error) {
  //     console.error("Error saving selected parameters:", error);
  //     // handle error here (e.g. display an error message to the user)
  //   }
  // }, [selectedParams, agentConfig]);

  // const handleSaveClick = () => {
  //   const selectedInputParams = saveAgentConfigParameter();
  //   if (selectedInputParams.length > 0) {
  //     message.success("Save AgentConfig Parameter Successfully!");
  //     setTimeout(() => {
  //       navigate("/labManual");
  //     }, 1000);
  //   } else {
  //     message.warning("Please select at least one parameter");
  //   }
  // };

  return (
    <div className="pt-5">
      <h2 className="pb-5 text-center">Parameters Configuration</h2>
      {/* USING DUMMY DATA */}
      <CheckboxGroup
        className="checkbox-container"
        options={dummyCheckboxData.map((option) => ({
          label: option.label,
          value: option.id,
        }))}
        value={checkedList}
        onChange={handleCheckboxChange}
      />
      {/* <CheckboxGroup
        className="checkbox-container"
        options={checkboxData.map((option) => ({
          label: option.label,
          value: option.id,
        }))}
        value={checkedList}
        onChange={handleCheckboxChange}
      /> */}
      <div className="flex flex-row items-center justify-center pt-5">
        <Button
          onClick={() => navigate("/labManual")}
          type="primary"
          className=" text-white hover:bg-green-300 mt-2 uppercase"
          style={{
            backgroundColor: "#2E3D55",
            paddingTop: 6,
            marginRight: 10,
          }}>
          Back
        </Button>
        <Button
          // onClick={handleSaveClick}
          onClick={() => navigate("/labManual")}
          type="primary"
          className=" text-white hover:bg-green-300 mt-2 uppercase"
          style={{ backgroundColor: "#2E3D55", paddingTop: 6 }}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default ParametersScreen;
