import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to project API');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App runing on port ${port}`);
});
