import { useEffect, useState } from "react";
import Barchart from "../components/Barchart";
import { Cancel } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { userData } from "../userData";
import { useSession } from "../context/session";

const Reviews = () => {
  const { sessionData } = useSession();
  const id = sessionData;
  const [fullChart, showFullChart] = useState(false);
  const [user, setuserData] = useState({});
  // const { role } = user;
  useEffect(() => {
    const fetchData = async () => {
      const response = await userData(id);
      setuserData(response);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-[1rem] w-full p-[1.56rem]">
      <div className="w-full flex max-md:flex-col justify-between">
        {/* Name & Role */}
        <div>
          <div className="text-[#11142D] font-[600] text-[1.375rem]">
            {" "}
            {user && user.username?.toUpperCase()}
          </div>
          <p className="text-[#808191] font-[400] ">{user && user?.role}</p>
        </div>
      </div>
      <Barchart />
      <div onClick={() => showFullChart(!fullChart)}>
        {!fullChart && (
          <p className="text-[#808191] font-[400] text-center cursor-pointer hover:text-[#475BE8]">
            Show Full Chart
          </p>
        )}
      </div>

      {fullChart && (
        <div className="fixed bg-[#f1ededc4] z-[100000] w-full h-[100vh] top-0 left-0 right-0 bottom-0 flex flex-col gap-[1rem] p-[2rem]">
          <div
            className="text-center m-[2rem] "
            onClick={() => showFullChart(!fullChart)}
          >
            <IconButton
              sx={{
                fontSize: "20px",
              }}
            >
              <Cancel />
            </IconButton>
          </div>
          <Barchart />
        </div>
      )}
    </div>
  );
};

export default Reviews;
