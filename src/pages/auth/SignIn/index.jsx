import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, Card, Container, Typography } from "@mui/material";
import { Constants } from "../../../Store/general/Constants";
import NativeInput from "../../../components/Native/NativeInput";
import PageContainer from "../../../components/Containers/PageContainer";

export default function () {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("Name"),
      pass: formData.get("Password"),
    };

    alert(JSON.stringify(data));
  };

  return (
    <PageContainer title={"Sign in"} description={"This is the Sign in page."}>
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
              <b>Sign in to {Constants.app_name}</b>
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <NativeInput required name={"Name"} />
              <NativeInput required name={"Password"} type="password" />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>
    </PageContainer>
  );
}
