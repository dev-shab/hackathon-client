Here's a sample dashboard using React that displays user metrics with progress tracking:

Dashboard.js
```
import React from 'react';
import { Grid, Typography, Paper, CircularProgress, LinearProgress } from '@mui/material';

const Dashboard = () => {
  const metrics = [
    {
      title: 'Calories Burnt',
      value: 2500,
      goal: 3000,
      progress: 83,
    },
    {
      title: 'Sleep',
      value: 7.5,
      goal: 8,
      progress: 94,
    },
    {
      title: 'Weight',
      value: 70,
      goal: 65,
      progress: 108,
    },
    {
      title: 'Steps',
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
```

This code creates a dashboard that displays four user metrics: calories burnt, sleep, weight, and steps. Each metric is displayed in a separate paper component, which includes the metric title, value, goal, and progress. The progress is displayed as a linear progress bar.

You can customize the appearance of the dashboard by using Material-UI's theme and styling options.

App.js
```
import React from 'react';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default App;
```

index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

To run this code, create a new React project using `create-react-app`, then replace the contents of `App.js` and `index.js` with the code above. Finally, create a new file called `Dashboard.js` and paste the code into it.

Make sure to install the Material-UI library by running `npm install @mui/material` or `yarn add @mui/material` in your terminal.

Open your web browser and navigate to `http://localhost:3000` to see the dashboard in action.
