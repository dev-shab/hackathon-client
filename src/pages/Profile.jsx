import React from "react";
import { Grid, Typography, Paper, Avatar } from "@mui/material";

const UserProfile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "https://via.placeholder.com/150",
  };

  return (
    <div className="center mr-50 mt-40">
      <Paper elevation={3}>
        <Grid container spacing={2} p={2}>
          <Grid item xs={12} sm={4} md={3} lg={2}>
            <Avatar src={user.profilePicture} alt={user.name} />
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={10}>
            <Typography variant="h5" component="h3">
              {user.name}
            </Typography>
            <Typography variant="body1" component="p">
              {user.email}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default UserProfile;
