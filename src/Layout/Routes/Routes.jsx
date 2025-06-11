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
        <Route path="/OnlineExamWebsite/*" element={<NotFound />} />
        <Route path="/OnlineExamWebsite/" element={<Home />} />
        <Route path="/OnlineExamWebsite/about" element={<About />} />
        <Route path="/OnlineExamWebsite/courses" element={<Courses />} />
        <Route path="/OnlineExamWebsite/users" element={<Users />} />
        <Route path="/OnlineExamWebsite/sign_in" element={<SignIn />} />
      </Routes>
    </div>
  );
}
