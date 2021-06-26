const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();


// app.use('/chatApp/', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true ,}));

app.use(createProxyMiddleware(['/chatApp'],{ target: 'http://localhost:3000', changeOrigin: true, }));
app.use(createProxyMiddleware(['/contactApp','/create-contact'],{ target: 'http://localhost:8000', changeOrigin: true, }));

port = 80;
app.listen(port, function() {
    console.log(`Proxy Server is listening on ${port}!`)
  })