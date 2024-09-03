import Button from "@mui/material/Button";
import { Alert, Box, Card, Container, Typography } from "@mui/material";

import { useState } from "react";
import { Constants } from "../../Store/general/Constants";
import NativeInput from "../../components/Native/NativeInput";
import PageContainer from "../../components/Containers/PageContainer";

export default function ({ onSuccess }) {
  const [msg, setMsg] = useState({ msg: "", kind: "warning" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const coursesList = JSON.parse(localStorage.getItem("courses")) || [];

    const data = {
      id: (coursesList.length || 0) + 3,
      Name: formData.get("Name"),
      Pic: formData.get("Pic"),
      Description: formData.get("Description"),
    };

    const final = JSON.stringify([...coursesList, data]);
    localStorage.setItem("courses", final);

    setMsg((prev) => ({
      ...prev,
      kind: "success",
      msg: "Course created successful.",
    }));

    onSuccess();
  };

  return (
    <PageContainer
      title={"Add Course"}
      description={"This is the Page for adding new Course."}
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
              <b>Create Course for {Constants.app_name}</b>
            </Typography>
            {msg.msg && (
              <Alert className="w-full mt-3" color={msg.kind}>
                {msg.msg}
              </Alert>
            )}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <NativeInput required name={"Name"} />
              <NativeInput required name={"Pic"} />
              <NativeInput required name={"Description"} />
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
                  Create Course
                </Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </Container>
    </PageContainer>
  );
}
