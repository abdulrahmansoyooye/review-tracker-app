import profilePic from "../assets/profile_pic.png";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.png";
import ChartData from "../components/ChartData";
import { useSession } from "../context/session";
import { useEffect, useState } from "react";
import { userData } from "../userData";

const Profile = () => {
  const { sessionData } = useSession();
  const id = sessionData;
  const [user, setuserData] = useState([]);
  const { username, role, TechStack, Phone, Email, Location } = user;
  useEffect(() => {
    const fetchData = async () => {
      const response = await userData(id);
      setuserData(response);
    };
    fetchData();
  }, []);
  return (
    <div className="p-[1.23rem_1.33rem] flex flex-col gap-[0.94rem] max-md:w-full">
      {/* Header */}
      <div className="text-[#11142D] text-[1.125rem] font-[600]">Profile</div>
      <div className="flex max-md:flex-col gap-[0.94rem]">
        {/* Profile Info */}
        <div className="rounded-[0.63rem] w-[50%] bg-[#FCFCFC]  max-md:w-full  flex flex-col gap-[0.88rem]">
          <img
            src={profilePic}
            alt=""
            className="w-full  h-[8.75rem]  rounded-[0.625rem] object-cover"
          />
          {/* Information */}
          <div className="flex flex-col p-[1.06rem] gap-[1rem]">
            {/* Name */}
            <div className="flex flex-col text-left">
              <p className="text-[#11142D] text-[1.5rem] font-[600]">
                {username && username.toUpperCase()}{" "}
              </p>
              <p className="text-[#808191]">{role}</p>
            </div>

            <div className="justify-btwn">
              <p className="text-[#808191]">Phone</p>
              <p>+234 {Phone}</p>
            </div>
            <div className="justify-btwn ">
              <p className="text-[#808191]">Location</p>
              <p>{Location}</p>
            </div>
            <div className="justify-btwn">
              <p className="text-[#808191]">Email </p>
              <p>{Email}</p>
            </div>

            <div className="justify-btwn">
              <p className="text-[#808191] justify-between">Country</p>
              <p>Nigeria</p>
            </div>

            {TechStack?.map((item, index) => {
              return (
                <div className="justify-btwn" key={index + item}>
                  <p className="text-[#808191]">{`Tech ${index + 1}`}</p>
                  <p>{item}</p>
                </div>
              );
            })}
            <div className="flex gap-[0.62rem] justify-evenly text-center w-full  m-[0_auto]">
              <img
                src={facebook}
                alt="facebook"
                className="p-[0.58rem] rounded-[1.125rem] bg-[#F7F7F7]"
              />
              <img
                src={twitter}
                alt="facebook"
                className="p-[0.58rem] rounded-[1.125rem] bg-[#F7F7F7]"
              />
              <div className="bg-[#F7F7F7] p-[0.588rem] rounded-[1.125rem] ">
                <img
                  src={instagram}
                  alt="instagram"
                  className=" w-[1.125rem]  h-[1.125rem]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[0.63rem] bg-[#FCFCFC]  max-md:w-full  flex flex-col gap-[0.1rem]">
          <ChartData />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Profile;
