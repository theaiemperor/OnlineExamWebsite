import PageContainer from "../../components/Containers/PageContainer";
import CreateCourse from "./CreateCourse";
import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import CoursesList from "./CoursesList";
import { IconPlus } from "@tabler/icons-react";

export default function () {
  const [create, setCreate] = useState(false);

  const [courses, setCourse] = useState([]);

  const defaultCourses = [
    {
      id: 1,
      Name: "Python course",
      Pic: "/python.png",
      Description:
        "Python is a high-level, interpreted, object-oriented, and dynamic programming language. It is designed to be easy to read and simple to implement, with a focus on readability, conciseness, and maintainability.",
    },
    {
      id: 2,
      Name: "C course",
      Pic: "/c.png",
      Description:
        "C is a procedural, general-purpose, and operating system-agnostic language that provides low-level access to system memory. It’s widely used for low-level coding, embedded systems, and hardwares.",
    },
  ];

  useEffect(() => {
    if (window) {
      const data = localStorage.getItem("courses") || "[]";
      setCourse(() => [...defaultCourses, ...JSON.parse(data)]);
    }
  }, [create]);

  return (
    <>
      <PageContainer
        title={"Courses"}
        description={"This is the courses page."}
      >
        {create ? (
          <CreateCourse onSuccess={() => setCreate(false)} />
        ) : (
          <div>
            <div className="w-full flex mb-5 items-center">
              <div className="flex justify-center flex-grow">
                <Typography variant="h1">Our courses</Typography>
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
            <CoursesList courses={courses} />
          </div>
        )}
      </PageContainer>
    </>
  );
}
