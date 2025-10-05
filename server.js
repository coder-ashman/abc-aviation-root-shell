const express = require('express');
const path = require('path');
const app = express();
const PORT = 9000;

// Serve static files
app.use(express.static(__dirname, {
  setHeaders: (res, filePath) => {
    // Set correct MIME types for JavaScript files
    if (filePath.endsWith('.js') || filePath.endsWith('.mjs')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// SPA fallback - serve index.html for all non-file requests
app.use((req, res, next) => {
  // If the request has a file extension, let static middleware handle it (404 if not found)
  if (path.extname(req.path)) {
    return res.status(404).send('File not found');
  }
  
  // Otherwise, serve index.html for SPA routing
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Shell server running at http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${__dirname}`);
  console.log(`🔄 SPA mode enabled - all routes serve index.html`);
});
