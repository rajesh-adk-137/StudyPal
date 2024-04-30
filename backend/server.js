// Import express library
const express = require('express');
const cors = require('cors'); // Require CORS module
const { CopilotBackend } = require("@copilotkit/backend");
const { OpenAIAdapter } = require("@copilotkit/backend");
// Create an express application
require('dotenv').config({ path: './.env.local' });  
const app = express();
const HEADERS = {
    // make sure to modify CORS headers to match your frontend's origin
    "Access-Control-Allow-Origin": "http://localhost:5173",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers": "X-Requested-With,content-type",
  };
// Use CORS for all routes
app.use(cors());

// Use express.json() to parse JSON bodies into JS objects
app.use(express.json());

// Define a route for POST requests to '/api'
app.post('/api', (request, response) => {
    try {
        const copilotKit = new CopilotBackend();
        const adapterOptions = {
          model: "gpt-3.5-turbo"
        };
        copilotKit.streamHttpServerResponse(request, response, new OpenAIAdapter(adapterOptions), HEADERS);
      } catch (err) {
        console.error(err);
        response.end("error");
      }
});

// Listen on port 5173
app.listen(5174, () => {
    console.log('Server is running on http://localhost:5174');
});
