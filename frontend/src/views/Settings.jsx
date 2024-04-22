import {
  DeleteForeverOutlined,
  LogoutOutlined,
  SettingsRounded,
} from "@mui/icons-material";

import profilePic from "../assets/profile_pic.png";
import Advert from "../components/Advert";
import { useSession } from "../context/session";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Settings = () => {
  const navigate = useNavigate();
  const { logout } = useSession();

  const { sessionData } = useSession();
  const id = sessionData;
  const deleteUser = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/user/${id}`,

        {
          headers: {
            Authorization: id,
          },
        }
      );
      if (response.status === 200) {
        navigate("/user/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-[1.25rem] w-full p-[1.56rem]">
      <div className="font-[700] text-[1.5625rem]  space-x-[0.5rem]">
        {" "}
        <SettingsRounded />
        <p className="inline">Settings</p>
      </div>
      <div className="bg-[#FCFCFC] rounded-[0.9375rem] w-full  p-[1.25rem] flex max-md:flex-col gap-[1.25rem] ">
        {/* Picture */}
        <div className="">
          <img
            src={profilePic}
            alt=""
            className="w-full md:w-[21.25rem] h-[20rem] rounded-[0.9375rem_0_0_0.9375rem] object-cover"
          />
        </div>
        {/* Personal Info */}
        <div className="flex gap-[1.88rem] flex-col w-full ">
          <div className="w-full flex max-md:flex-col justify-between">
            {/* Name & Role */}
            <div>
              <div className="text-[#11142D] font-[600] text-[1.375rem]">
                {" "}
                Abdulrahman Soyooye
              </div>
              <p className="text-[#6f72a5] font-[400] ">Admin</p>
            </div>
          </div>
          {/* Edit Profile */}
          <div className="flex flex-col gap-[0.9rem] ">
            <div
              onClick={() => {
                navigate("/user/login");
                logout();
              }}
            >
              <button className="button max-md:w-full w-[50%] bg-[#475be8]">
                {" "}
                <LogoutOutlined /> Logout
              </button>
            </div>
            <div
              onClick={() => {
                deleteUser();
              }}
            >
              <button className="button max-md:w-full  w-[50%] bg-[#c70000]">
                <DeleteForeverOutlined />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <Advert />
    </div>
  );
};

export default Settings;
