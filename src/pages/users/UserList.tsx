import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer,
  Card,
} from "@mui/material";



export default function ({ users }) {



  return (<>
    {
      users.length === 0 ?
        <Typography>
          There is no user. please create to show here.
        </Typography> :

        <Card sx={{ mt: 5, borderRadius: 2 }}>
          <TableContainer
            sx={{
              width: {
                xs: "274px",
                sm: "100%",
              },
            }}
          >
            <Table
              aria-label="simple table"
              sx={{
                whiteSpace: "nowrap",
                mt: 2,
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6">
                      Id
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6">
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6">
                      Contact Number
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6">
                      Course
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Typography fontSize="15px" fontWeight={500}>
                        {user.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Box>
                          <Typography variant="h6" fontWeight={600}>
                            {user.Name}
                          </Typography>
                          <Typography color="textSecondary" fontSize="13px">
                            {user.Email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary" variant="h6">
                        +91 {user.Number}
                      </Typography>
                    </TableCell>
                    <TableCell>

                      <Box display="flex" alignItems="center">
                        <Box className="flex flex-col justify-start items-center">
                          <Chip
                            sx={{
                              pl: "4px",
                              pr: "4px",
                              backgroundColor: '#454469',
                              color: "#fff",
                              width: 100
                            }}
                            size="small"
                            label={user.Course}
                          ></Chip>
                          <Typography color="textSecondary" fontSize="13px">
                            Pass : {user.Password}
                          </Typography>
                        </Box>
                      </Box>

                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
    }
  </>);
};


