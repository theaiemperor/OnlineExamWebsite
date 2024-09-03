import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";

export default function ({ courses }) {
  return (
    <>
      {courses.length === 0 ? (
        <Typography>There is no courses. Pleas add some</Typography>
      ) : (
        <div className="flex gap-5 w-full flex-wrap">
          {courses.map((course) => {
            return (
              <Card
                sx={{ width: 330, borderRadius: 2 }}
                key={course.id}
                className="relative"
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={course.Pic}
                  title="green iguana"
                />
                <CardContent sx={{ p: 1, h: "100%" }}>
                  <Typography gutterBottom variant="h2" component="div">
                    {course.Name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {course.Description}
                  </Typography>
                </CardContent>
                <Box className="h-12" />
                <Box className="absolute bottom-0 w-full">
                  <Divider />
                  <CardActions className="flex justify-end gap-3">
                    <Button variant="contained" size="small">
                      Explore
                    </Button>
                    <Button variant="contained" size="small">
                      Start Test
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
}
