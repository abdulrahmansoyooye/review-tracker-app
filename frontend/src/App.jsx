import "./App.css";
import Layout from "./Layout";
import NotFound from "./components/NotFound";
import Dashboard from "./views/Dashboard";
import Settings from "./views/Settings";
import Others from "./views/Others";
import Profile from "./views/Profile";
import Reviews from "./views/Reviews";
import Signup from "./views/Signup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./views/SignIn";
import { useSession } from "./context/session";
function App() {
  const { sessionData } = useSession();
  return (
    <div className=" bg-[#F4F4F4] font-[Manrope]">
      <BrowserRouter>
        <Routes>
          <Route path="/user/login" element={<SignIn />} />
          <Route path="/user/register" element={<Signup />} />

          <Route
            path="/"
            element={sessionData ? <Layout /> : <Navigate to={"/user/login"} />}
          >
            <Route index element={<Dashboard />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/others" element={<Others />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
