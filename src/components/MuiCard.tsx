import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width={"300px"}>
      <Card>
        <CardMedia
          component={"img"}
          height={"140"}
          image="https://yt3.ggpht.com/os7Yw6RimtysXXpc8NrXraci87TjXgZSUQyAezi0D3RrNL3YP5riIwi1-0al4Wz0XwzH6oBu6g=s88-c-k-c0x00ffffff-no-rj"
          alt={"Channel Logo"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam
            aperiam aut voluptatem. Alias provident necessitatibus blanditiis,
            culpa repellat ut?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
