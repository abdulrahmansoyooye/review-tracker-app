import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import notification from "../assets/notification.svg";
import harmburger from "../assets/harmburger.svg";
import { useNavigate } from "react-router-dom";
import { useDialog } from "../context/Dialog";
// eslint-disable-next-line react/prop-types
const Navbar = ({ navShown, setnavShown }) => {
  const { dialogDisplay, setDialogDisplay } = useDialog();

  const navigate = useNavigate();
  return (
    <div className="p-[0.9375rem_1.25rem] z-[1000] flex justify-between fixed top-0 w-full bg-[#Fcfcfc]">
      {/* Heading */}
      <img
        src={harmburger}
        onClick={() => setnavShown(!navShown)}
        alt="harmburger"
        className="md:hidden cursor-pointer"
      />
      <div
        className="flex gap-[0.7rem]   justify-center cursor-pointer  items-center"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" className="w-[2.159rem]" />
        <h1 className="text-[1.4rem] font-[700] ">Review Tracker</h1>
      </div>

      <div className="flex flex-row-reverse max-md:hidden justify-evenly rounded-[0.5rem] p-[0.625rem] gap-[0.625rem] w-[20.3125rem] bg-[#F4F4F4]">
        <input
          type="text"
          placeholder="Search Property, Customer etc"
          className="input input-bordered w-full bg-inherit text-[#808191] font-[400] text-[0.75rem]"
        />
        <img
          src={search}
          alt="logo"
          className="w-[1rem] h-[1rem]  cursor-pointer"
        />
      </div>
      {/* Profile */}
      <img
        src={notification}
        alt="notification"
        className="w-[1.5rem] h-[1.5rem] md:hidden  cursor-pointer"
        onClick={() => setDialogDisplay(!dialogDisplay)}
      />
      <div className="flex gap-[1.25rem] max-md:hidden items-center">
        <img
          src={notification}
          alt="notification"
          className="w-[1.5rem] h-[1.5rem] cursor-pointer"
          onClick={() => setDialogDisplay(!dialogDisplay)}
        />
        <div className="flex  flex-col">
          <p>Abdulrahman Soyooye</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
