import About from "../../pages/about";
import Home from "../../pages/home";

import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Users from "../../pages/users";
import Courses from "../../pages/courses";
import SignIn from "../../pages/SignIn";

export default function () {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="users" element={<Users />} />
        <Route path="sign_in" element={<SignIn />} />
      </Routes>
    </div>
  );
}
