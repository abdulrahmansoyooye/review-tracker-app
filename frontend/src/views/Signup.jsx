import { useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/InputComponent";
import signup_background from "../assets/signup_background.png";
import { useNavigate } from "react-router-dom";

import Form from "../components/Form";

const Signup = () => {
  return <Form signUp={true} />;
};

export default Signup;
