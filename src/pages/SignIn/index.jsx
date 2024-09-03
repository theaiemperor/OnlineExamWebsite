import Button from "@mui/material/Button";

import { Alert, Box, Card, Container, Typography } from "@mui/material";

import NativeInput from "../../components/Native/NativeInput";

import { useState } from "react";
import { Constants } from "../../Store/general/Constants";
import PageContainer from "../../components/Containers/PageContainer";

export default function () {
  const [msg, setMsg] = useState({ msg: "", kind: "warning" });

  const defaultUsers = [
    {
      id: 1,
      Name: "Arman",
      Email: "theaiemperor@gmail.com",
      Password: "123",
      Number: "9868348395",
      Course: "first",
    },
    {
      id: 2,
      Name: "Ravi",
      Email: "ravi@gmail.com",
      Password: "321",
      Number: "7877340024",
      Course: "second",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = {
      Name: formData.get("Name"),
      Password: formData.get("Password"),
    };

    const userListFromStorage = JSON.parse(
      localStorage.getItem("users") || "[]"
    );
    const userList = [...defaultUsers, userListFromStorage];

    for (let index = 0; index < userList.length; index++) {
      const element = userList[index];

      if (element.Name === data.Name && element.Password === data.Password) {
        setMsg((prev) => ({
          ...prev,
          kind: "success",
          msg: "sign in successful.",
        }));
      } else {
        setMsg(() => ({
          kind: "warning",
          msg: "please enter right credentials",
        }));
      }
      break;
    }
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
            {msg.msg && (
              <Alert className="w-full mt-3" color={msg.kind}>
                {msg.msg}
              </Alert>
            )}
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
