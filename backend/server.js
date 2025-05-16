const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');

app.use(express.json());
app.use('/todos', todoRoutes);

// Health check route (optional but good for testing)
app.get('/health', (req, res) => {
  res.send('OK');
});

// Only listen if not in test mode
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app; // 👈 Export the app for testing
