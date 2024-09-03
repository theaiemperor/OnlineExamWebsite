import About from "../../pages/about";
import Home from "../../pages/home";

import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Courses from "../../pages/Courses";
import Profile from "../../pages/profile";

import SignUp from "../../pages/auth/SignUp";
import SignIn from "../../pages/auth/SignIn";

export default function () {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="profile" element={<Profile />} />
        <Route path="sign_in" element={<SignIn />} />
        <Route path="sign_up" element={<SignUp />} />
      </Routes>
    </div>
  );
}
