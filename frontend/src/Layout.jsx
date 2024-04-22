import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Dialog from "./components/Dialog";
import { CancelOutlined } from "@mui/icons-material";
import { useDialog } from "./context/Dialog";
import { IconButton } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Layout = () => {
  const { dialogDisplay, setDialogDisplay } = useDialog();

  const [navShown, setnavShown] = useState(false);
  // useEffect(() => {
  //   setDialogDisplay(true);
  // }, []);
  return (
    <div>
      <div className="flex flex-col">
        <div className="bg-[#FCFCFC] pb-[5rem]">
          <Navbar navShown={navShown} setnavShown={setnavShown} />
        </div>
        <div className="flex md:space-x-[15.625rem]">
          <div
            className={`fixed z-[100] h-[100vh] mr-[15.625rem] max-md:${
              navShown ? " bg-[#FCFCFC] w-[15.625rem]" : "hidden"
            } bg-[#FCFCFC] w-[15.625rem] `}
          >
            <Sidebar navShown={navShown} setnavShown={setnavShown} />
          </div>
          {dialogDisplay && (
            <div className="fixed bg-[#f1ededc4] z-[100000] overflow-scroll top-0 right-0 bottom-0 left-0 flex flex-col items-center gap-[1rem] p-[2rem]">
              <div
                className="cursor-pointer"
                onClick={() => setDialogDisplay(false)}
              >
                <IconButton color="primary">
                  <CancelOutlined />
                </IconButton>
              </div>
              <Dialog />
            </div>
          )}

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
