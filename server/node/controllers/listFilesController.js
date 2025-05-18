const fs = require('fs');
const path = require('path');

const listUploadedFiles = (req, res) => {
  debugger;
  const uploadDir = path.resolve(__dirname, '..', '..', 'shared', 'uploads');
  console.log(uploadDir)
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      console.error('Error reading upload directory:', err);
      return res.status(500).json({ error: 'Unable to list uploaded files' });
    }

    res.status(200).json({ files });
  });
};

module.exports = { listUploadedFiles };
