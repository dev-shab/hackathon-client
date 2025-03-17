import React from "react";
import {
  Grid,
  Typography,
  Paper,
  CircularProgress,
  LinearProgress,
} from "@mui/material";

const Dashboard = () => {
  const metrics = [
    {
      title: "Calories Burnt",
      value: 2500,
      goal: 3000,
      progress: 83,
    },
    {
      title: "Sleep",
      value: 7.5,
      goal: 8,
      progress: 94,
    },
    {
      title: "Weight",
      value: 70,
      goal: 65,
      progress: 108,
    },
    {
      title: "Steps",
      value: 10000,
      goal: 12000,
      progress: 83,
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" component="h2">
          User Metrics
        </Typography>
      </Grid>
      {metrics.map((metric, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <Paper elevation={3}>
            <Typography variant="h5" component="h3">
              {metric.title}
            </Typography>
            <Typography variant="body1" component="p">
              Value: {metric.value}
            </Typography>
            <Typography variant="body1" component="p">
              Goal: {metric.goal}
            </Typography>
            <LinearProgress variant="determinate" value={metric.progress} />
            <Typography variant="body1" component="p">
              Progress: {metric.progress}%
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
