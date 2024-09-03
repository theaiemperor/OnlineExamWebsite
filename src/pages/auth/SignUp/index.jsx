import Button from "@mui/material/Button";
import {
  Box,
  Card,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import NativeInput from "../../../components/Native/NativeInput";
import { useState } from "react";
import PageContainer from "../../../components/Containers/PageContainer";

export default function () {
  const coursesList = ["first", "second", "third"];
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      Name: formData.get("Name"),
      Email: formData.get("Email"),
      Password: formData.get("Password"),
      Number: formData.get("Number"),
      course: formData.get("course"),
    };

    alert("You user info : \n" + JSON.stringify(data));
  };

  return (
    <PageContainer title={"Sign up"} description={"This is the Sign up page."}>
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
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <NativeInput required name={"Name"} />

              <NativeInput required name={"Password"} type="password" />

              <NativeInput name={"Email"} type="email" />

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
                  name="course"
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

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create User
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>
    </PageContainer>
  );
}
