#!/usr/bin/env node

/**
 * Proxy server for shell development
 * Proxies owner portal assets to avoid CORS issues
 */

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = 9000;

// Serve static files from current directory
app.use(express.static('.'));

// Proxy owner portal assets
app.use('/assets', createProxyMiddleware({
  target: 'http://localhost:4173',
  changeOrigin: true,
  pathRewrite: {
    '^/assets': '/assets'
  },
  onError: (err, req, res) => {
    console.log('Proxy error:', err.message);
    res.status(500).send('Proxy error: ' + err.message);
  }
}));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Shell server running on http://localhost:${PORT}`);
  console.log(`📡 Proxying owner portal assets from http://localhost:4173`);
});
