import { NavLink } from "react-router-dom";
import {
  GridViewRounded,
  StarRounded,
  PeopleOutlineRounded,
  PersonRounded,
  SettingsRounded,
} from "@mui/icons-material";
const Sidebar = ({ navShown, setnavShown }) => {
  return (
    <div className="p-[1.5625rem_1rem_1rem_1rem] ">
      <div
        className="flex flex-col gap-[0.625rem]"
        onClick={() => setnavShown(!navShown)}
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "active-btn flex gap-[0.62rem] "
              : "flex gap-[0.62rem] btn"
          }
        >
          <GridViewRounded /> <p>Dashboard</p>
        </NavLink>
        <NavLink
          to={"/reviews"}
          className={({ isActive }) =>
            isActive
              ? "active-btn flex gap-[0.62rem]"
              : "flex gap-[0.62rem] btn"
          }
        >
          <StarRounded /> <p>Review</p>
        </NavLink>
        <NavLink
          to={"/others"}
          className={({ isActive }) =>
            isActive
              ? "active-btn flex gap-[0.62rem]"
              : "flex gap-[0.62rem] btn"
          }
        >
          <PeopleOutlineRounded /> <p>Others</p>
        </NavLink>
        <NavLink
          to={"/profile/:id"}
          className={({ isActive }) =>
            isActive
              ? "active-btn flex gap-[0.62rem]"
              : "flex gap-[0.62rem] btn"
          }
        >
          <PersonRounded /> <p>Profile</p>
        </NavLink>
        <NavLink
          to={"/settings"}
          className={({ isActive }) =>
            isActive
              ? "active-btn flex gap-[0.62rem]"
              : "flex gap-[0.62rem] btn"
          }
        >
          <SettingsRounded /> <p>Settings</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
