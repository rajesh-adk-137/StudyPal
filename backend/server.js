// Import express library
const express = require('express');
const cors = require('cors'); // Require CORS module
const { CopilotBackend } = require("@copilotkit/backend");
const { OpenAIAdapter } = require("@copilotkit/backend");
const { OpenAI} = require('openai')
const revision = require('./utils/revision');
// Create an express application
require('dotenv').config({ path: './.env.local' });
const app = express();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

app.post('/guide', async (request, response) => {
  const { selectedSubject, selectedQualification, additionalContext } = request.body;

  // Utilize received data to process or set the revision information
  try {
    // const revisionText = `Revision set for ${selectedSubject} with ${selectedQualification}. Additional notes: ${additionalContext}`//example revision points
    // const revisionText = [
    //   "Review and practice solving linear equations and inequalities.",
    //   "Understand and apply the quadratic formula and factoring techniques to solve quadratic equations.",
    // ]
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: `Generate an array of guide sentences like formulas or ideas for the ${selectedSubject} subject for ${selectedQualification}. Additional context: ${additionalContext}. Give it to me in form of array of points and it must contain 5-8 points. Only provide me array don't provide me any other informations.` }],
    });

    revision.setRevision(aiResponse.choices[0].message.content);

    // console.log("Data=",aiResponse.choices[0].message.content)
    // revision.setRevision(JSON.parse(dataString))

    // Respond with the new revision data
    response.status(200).json({
      message: "Revision data updated successfully",
      revision: revision.getRevision()
    });
  } catch (err) {
    console.error('Error in /guide:', err);
    response.status(500).send("Internal Server Error");
  }
});


app.get('/getGuide', async (request, response) => {
  const revisionData = revision.getRevision();
  response.status(200).json({
    revision: revisionData
  })
})

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
