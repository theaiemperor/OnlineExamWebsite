import { Button, Typography } from "@mui/material";
import PageContainer from "../../components/Containers/PageContainer";
import UserList from "./UserList";
import CreateUsers from "./CreateUsers";
import { useEffect, useState } from "react";
import { IconPlus } from "@tabler/icons-react";

export default function () {
  const [create, setCreate] = useState(false);

  const [users, setUsers] = useState([]);

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

  useEffect(() => {
    if (window) {
      const data = localStorage.getItem("users") || "[]";
      const final = [...defaultUsers, ...JSON.parse(data)].sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });



      setUsers(() => final);
    }
  }, [create]);

  return (
    <>
      <PageContainer title={"Users"} description={"This is the users page."}>
        {create ? (
          <CreateUsers onSuccess={() => setCreate(false)} />
        ) : (
          <div>
            <div className="w-full flex mb-5 items-center">
              <div className="flex justify-center flex-grow">
                <Typography variant="h1">Manage Users</Typography>
              </div>
              <div>
                <Button
                  variant="contained"
                  endIcon={<IconPlus />}
                  size="small"
                  onClick={() => {
                    setCreate(true);
                  }}
                >
                  Create
                </Button>
              </div>
            </div>
            <UserList users={users} />
          </div>
        )}
      </PageContainer>
    </>
  );
}
