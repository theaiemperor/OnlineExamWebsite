import Button from "@mui/material/Button";
import {
  Alert,
  Box,
  Card,
  Container,
  FormControl, InputLabel,
  MenuItem, Select, Typography
} from "@mui/material";

import { useEffect, useState } from "react";
import NativeInput from "../../components/Native/NativeInput";
import PageContainer from "../../components/Containers/PageContainer";

function generateRandomPassword(length = 12) {
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
  const custom = "@#&?";

  const allChars = upperCaseChars + lowerCaseChars + numberChars + custom;
  let password = "";

  // Ensure at least one character from each set is included
  password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
  password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
  password += numberChars[Math.floor(Math.random() * numberChars.length)];
  password += custom[Math.floor(Math.random() * custom.length)];
  // password += specialChars[Math.floor(Math.random() * specialChars.length)];

  // Fill the remaining length with random characters from all sets
  for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Shuffle the characters in the password to avoid predictable patterns
  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return password;
}

export default function ({ onSuccess }) {
  const coursesList = ["first", "second", "third"];
  const [selectedCourses, setSelectedCourses] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState({ msg: "", kind: "warning" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userList = JSON.parse(localStorage.getItem("users")) || [];

    const data = {
      id: (userList.length || 0) + 3,
      Name: formData.get("Name"),
      Email: formData.get("Email"),
      Password: password,
      Number: formData.get("Number"),
      Course: formData.get("Course"),
    };

    const final = JSON.stringify([...userList, data]);
    localStorage.setItem("users", final);

    setMsg((prev) => ({
      ...prev,
      kind: "success",
      msg: "User created successful.",
    }));

    onSuccess();
  };

  useEffect(() => {
    setPassword(generateRandomPassword());
  }, []);

  return (
    <PageContainer
      title={"Add user"}
      description={"This is the Page for adding new user."}
    >
      <Container maxWidth="sm">
        <Card sx={{ p: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h2">
              <b>Create a User</b>
            </Typography>
            {msg.msg && (
              <Alert className="w-full mt-3" color={msg.kind}>
                {msg.msg}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <NativeInput required name={"Name"} />

              <NativeInput name={"Email"} type="email" />

              <Box className="flex gap-3 items-center">
                <NativeInput
                  required
                  name={"Password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    setPassword(generateRandomPassword());
                  }}
                >
                  Regenerate
                </Button>
              </Box>

              <NativeInput
                name={"Number"}
                type="number"
                label="User contact number"
              />

              {/* Select Courses */}
              <FormControl fullWidth margin="normal">
                <InputLabel id="demo-select-small-labels">
                  Select Course
                </InputLabel>
                <Select
                  name="Course"
                  fullWidth
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Select Course"
                  value={selectedCourses}
                  onChange={(e) => setSelectedCourses(e.target.value)}
                >
                  {coursesList.map((course) => (
                    <MenuItem key={course} value={course}>
                      {course}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box className="flex justify-end gap-5">
                <Button
                  variant="contained"
                  color="error"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => {
                    onSuccess();
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Create User
                </Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </Container>
    </PageContainer>
  );
}
