import React, { useState } from "react";
import { Grid, Typography, Paper, TextField, Button } from "@mui/material";

const UserGoalSetting = () => {
  const [goal, setGoal] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [progress, setProgress] = useState(0);

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleTargetDateChange = (event) => {
    setTargetDate(event.target.value);
  };

  const handleProgressChange = (event) => {
    setProgress(event.target.value);
  };

  const handleSaveGoal = () => {
    // Save goal logic here
    console.log("Goal saved!");
  };

  return (
    <div className="center mr-50 mt-40">
      <Paper elevation={3}>
        <Grid container spacing={2} p={2}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h3">
              Set Your Goal
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Goal"
              value={goal}
              onChange={handleGoalChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Target Date"
              type="date"
              value={targetDate}
              onChange={handleTargetDateChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Progress"
              type="number"
              value={progress}
              onChange={handleProgressChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveGoal}
              fullWidth
            >
              Save Goal
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default UserGoalSetting;
