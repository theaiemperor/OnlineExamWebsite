import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div id="error-page" className="ml-52 mt-32">
      <Typography variant="h1">Page Not found.</Typography>
      <Typography>The page you are looking not found here.</Typography>
      <div>
        Go back to{" "}
        <Link
          to={"/"}
          className="text-blue-700 cursor-pointer hover:border-b-2 border-black transition-all"
        >
          home
        </Link>
      </div>
    </div>
  );
}
