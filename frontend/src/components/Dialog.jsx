import { useState } from "react";
import InputComponent from "./InputComponent";
import { CancelOutlined } from "@mui/icons-material";
import axios from "axios";
import { useSession } from "../context/session";
import { Alert, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Dialog = () => {
  const { sessionData } = useSession();
  const id = sessionData;
  const [data, setData] = useState({
    Email: "",
    Location: "",
    role: "user",
    TechStack: [],
    Phone: "",
    picturePath: "",
  });
  const [errorMessage, seterrorMessage] = useState(false);
  const navigate = useNavigate();
  // const [file, setFile] = useState("");
  const { TechStack } = data;
  const submitData = async () => {
    // const formData = new FormData();
    // formData.append("Email", data.Email);
    // formData.append("Location", data.Location);
    // formData.append("role", data.Role);
    // formData.append("TechStack", data.TechStack);
    // formData.append("Phone", data.Phone);
    // formData.append("picturePath", file);
    setData({
      Email: "",
      Location: "",
      role: "",
      TechStack: [],
      Phone: "",
      picturePath: "",
    });
    try {
      var response = await axios.patch(
        `http://localhost:3001/user/${id}`,
        data,
        {
          headers: {
            Authorization: id,
          },
        }
      );
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      seterrorMessage(error.response.data);
    }
  };
  const handleChange = (e) => {
    const { value } = e.target;
    const { TechStack } = data;
    !TechStack.includes(value) && TechStack.push(value);
    setData({ ...data, TechStack });
  };
  return (
    <div
      className="bg-[#fffefe] rounded-[0.5rem]  p-[1rem] w-full md:w-[50%]  flex flex-col gap-[1.4rem]"
      data-aos="zoom-in"
    >
      <h1 className="font-[600] text-[1.5rem] text-center">
        Enter Your Details
      </h1>
      {errorMessage && (
        <Alert icon={<CancelOutlined fontSize="inherit" />} severity="error">
          {errorMessage}
        </Alert>
      )}
      <div className="grid grid-cols-2 max-md:grid-cols-1  gap-[2.5rem] ">
        {[
          { name: "Email", type: "text" },
          { name: "Location", type: "text" },
          { name: "Phone", type: "number" },
        ].map(({ name, type }, index) => (
          <div key={name + index} className="">
            <InputComponent
              name={name}
              showName={true}
              id={name}
              data={data}
              setData={setData}
              type={type}
            />{" "}
          </div>
        ))}
        <div className="flex flex-col gap-[0.62rem]">
          <p>Role</p>
          <select
            name="input"
            id=""
            className="input cursor-pointer"
            onChange={(e) => setData({ ...data, role: e.target.value })}
          >
            <option value={"user"}>User</option>
            <option value={"admin"}>Admin</option>
          </select>
        </div>

        <div className="flex flex-col gap-[0.62rem]">
          <p>Tech Stack</p>

          <select
            name="input"
            id=""
            className="input cursor-pointer"
            onChange={(e) => handleChange(e)}
          >
            {[
              { value: "ReactJS" },
              { value: "NodeJs" },
              { value: "TypeScript" },
              { value: "NextJs" },
              { value: "Python" },
            ].map(({ value }, i) => {
              return (
                <option value={value} key={i}>
                  {value}
                </option>
              );
            })}
          </select>
          {TechStack.length !== 0 && (
            <div className="flex  gap-[0.6rem] border  p-[1rem] flex-wrap">
              {TechStack.map((item, i) => (
                <p key={i}>
                  {item}{" "}
                  <IconButton
                    onClick={() => {
                      const index = TechStack.indexOf(item);
                      TechStack.splice(index, 1);
                      setData({ ...data, TechStack });
                    }}
                  >
                    <CancelOutlined />
                  </IconButton>
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="border outline-1 outline-dashed items-center  border-[#E4E4E4] rounded-[0.375rem] p-[0.625rem] cursor-pointer flex justify-center">
          <input
            type="file"
            name="file"
            className=""
            // onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>
      <div className="grid-rows-2 button" onClick={submitData}>
        <button type="submit" className="button w-full bg-[#475BE8]">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Dialog;

// {TechStack.map((item, i) => (
//   <input
//     type="text"
//     className="input"
//     placeholder={`Stack ${i + 1}`}
//     key={i}
//     value={item}
//   />
// ))}
// <div
//   className="border  outline-1 outline-dashed  border-[#E4E4E4] rounded-[0.375rem] p-[0.625rem] cursor-pointer flex gap-[1rem]"
//   onClick={() => {
//     setData({ ...data, TechStack: [...TechStack, ""] });
//   }}
// >
//   <AddCircleOutline />
//   Add Tech Stack
// </div>
