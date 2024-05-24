import profilePic from "../assets/profile_pic.png";
import address from "../assets/address.svg";
import contact from "../assets/contact.svg";
import locationImage from "../assets/location.svg";
import { useEffect, useState } from "react";
import axios from "axios";
const Others = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://review-tracker-backend.onrender.com/user/",
        {
          headers: {
            Authorization: "id",
          },
        }
      );
      setUserData(response.data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-[1.19rem]  p-[1.56rem] w-full">
      {/* HHeading */}
      <div className="text-[1.56rem] text-[#11142D] font-[700] ">
        Other Users
      </div>
      {/* others */}
      <div className="flex flex-col w-full gap-[1rem]">
        {userData.map(({ Location, username, role, Phone, Email }, index) => (
          <>
            <div
              key={`${index}-${Phone}`}
              className="p-[1.25rem] shadow-[#B0B0B0] flex  bg-[#FCFCFC]  rounded-[0.625rem] w-full gap-[1.25rem] max-lg:flex-col"
              data-aos="fade-up"
            >
              {/* image */}
              <div>
                <img
                  src={profilePic}
                  alt="profilepic"
                  className="w-[15.625rem] rounded-[0.75rem] h-full object-cover max-lg:w-full"
                />
              </div>
              {/* Information */}
              <div className="flex  flex-col gap-[3.25rem]">
                {/* Upper Info */}
                <div className="flex gap-[0.44rem] flex-col">
                  <h1 className="text-[1.375rem] text-[#11142D] font-[600]">
                    {username.toUpperCase()}
                  </h1>
                  <p className="text-[0.875rem] text-[#808191] font-[400]">
                    {role}
                  </p>
                </div>
                {/* Lower Info */}
                <div className="flex flex-col gap-[1.25rem]">
                  {/* top */}
                  <div className="flex max-md:flex-col md:gap-[9.88rem]">
                    <div className="flex gap-[0.62rem]">
                      <img src={address} alt="" className="w-[1.25rem]" />
                      <p className="text-[0.875rem] text-[#808191] font-[400]">
                        {Email}
                      </p>
                    </div>

                    <div className="flex gap-[0.62rem]">
                      <img src={locationImage} alt="" className="w-[1.25rem]" />
                      <p className="text-[0.875rem] text-[#808191] font-[400]">
                        {Location}, Nigeria
                      </p>
                    </div>
                  </div>

                  {/* Bottome */}
                  <div className="flex max-md:flex-col md:gap-[9.88rem]">
                    <div className="flex gap-[0.62rem]">
                      <img src={contact} alt="" className="w-[1.25rem]" />
                      <p className="text-[0.875rem] text-[#808191] font-[400]">
                        {Phone}
                      </p>
                    </div>
                    <div className="flex gap-[0.62rem]">
                      <img src={contact} alt="" className="w-[1.25rem]" />
                      <p className="text-[0.875rem] text-[#808191] font-[400]">
                        {role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Others;
