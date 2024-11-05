const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get all students (for index page)
app.get('/api/students', (req, res) => {
  fs.readFile(path.join(__dirname, 'data', 'students.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read student data' });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Endpoint to get a specific student by ID
app.get('/api/student/:id', (req, res) => {
  const studentId = req.params.id;
  fs.readFile(path.join(__dirname, 'data', 'students.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read student data' });
    } else {
      const students = JSON.parse(data);
      const student = students.find((s) => s.first_name + s.last_name === studentId);
      if (student) {
        res.json(student);
      } else {
        res.status(404).json({ error: 'Student not found' });
      }
    }
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});