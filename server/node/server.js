const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const listFilesRoutes = require('./routes/lisFilesRoutes');

const app = express();

// Middleware to allow requests from your frontend
app.use(cors());

// Set up Multer storage (save files in 'uploads/' folder)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../shared/uploads/'); // Files go to the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Ensure uploads folder exists
const fs = require('fs');
const uploadDir = '../shared/uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// File upload route (accepts multiple files)
app.post('/upload', upload.array('files'), (req, res) => {
  const uploadedFiles = req.files.map(file => file.filename);
  console.log('SERVER:', uploadedFiles)
  res.json({ message: 'Files uploaded successfully', files: uploadedFiles });
});

app.use('/api', listFilesRoutes);

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
