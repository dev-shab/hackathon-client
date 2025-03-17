import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';

const trendingTopics = [
  { id: 1, topic: 'COVID-19 Updates', description: 'Latest news and research on COVID-19' },
  { id: 2, topic: 'Mental Health Awareness', description: 'Resources and support for mental health' },
  { id: 3, topic: 'Cancer Research Breakthroughs', description: 'Latest developments in cancer research and treatment' },
  { id: 4, topic: 'Digital Health Innovations', description: 'New technologies and innovations in healthcare' },
  { id: 5, topic: 'Nutrition and Wellness', description: 'Tips and advice on healthy eating and living' },
];

const TrendingMedicalTopics = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h2">
            Trending Medical Topics
          </Typography>
        </Grid>
        {trendingTopics.map((topic) => (
          <Grid item key={topic.id} xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={3}>
              <Typography variant="h5" component="h3">
                {topic.topic}
              </Typography>
              <Typography variant="body1" component="p">
                {topic.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TrendingMedicalTopics;