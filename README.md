# StudyPal: Your AI-Powered Personalized Learning Companion
<p align="center">
    <p align="center">
        <a href="https://github.com/rajesh-adk-137/StudyPal/" target="blank">
            <img src="https://img.shields.io/github/watchers/rajesh-adk-137/StudyPal?style=for-the-badge&logo=appveyor" alt="Watchers"/>
        </a>
        <a href="https://github.com/rajesh-adk-137/StudyPal/fork" target="blank">
            <img src="https://img.shields.io/github/forks/rajesh-adk-137/StudyPal?style=for-the-badge&logo=appveyor" alt="Forks"/>
        </a>
        <a href="https://github.com/rajesh-adk-137/StudyPal/stargazers" target="blank">
            <img src="https://img.shields.io/github/stars/rajesh-adk-137/StudyPal?style=for-the-badge&logo=appveyor" alt="Star"/>
        </a>
    </p>
    <p align="center">
        <a href="https://github.com/rajesh-adk-137/StudyPal/issues" target="blank">
            <img src="https://img.shields.io/github/issues/rajesh-adk-137/StudyPal?style=for-the-badge&logo=appveyor" alt="Issue"/>
        </a>
        <a href="https://github.com/rajesh-adk-137/StudyPal/pulls" target="blank">
            <img src="https://img.shields.io/github/issues-pr/rajesh-adk-137/StudyPal?style=for-the-badge&logo=appveyor" alt="Open Pull Request"/>
        </a>
    </p>
    <p align="center">
        <a href="https://github.com/rajesh-adk-137/StudyPal/blob/master/LICENSE" target="blank">
            <img src="https://img.shields.io/github/license/rajesh-adk-137/StudyPal?style=for-the-badge&logo=appveyor" alt="License" />
        </a>
    </p>
</p>
StudyPal is an advanced web application that harnesses the power of artificial intelligence to deliver personalized and adaptive learning experiences. By integrating CopilotKit, a robust tool for incorporating large language models (LLMs) into web applications, StudyPal empowers students to embark on customized learning journeys that cater to their unique needs and preferences.

## Features

- **Subject Selection and Personalization**: Choose from a curated list of subjects and provide details about your educational background to tailor learning materials and exercises.
- **Intelligent Study Material Generation**: AI-powered generation of concise and comprehensive study materials, distilling the essence of selected subject matter into key points.
- **MCQ Practice with AI-Powered Assistance**: Engage in interactive multiple-choice question (MCQ) practice sessions with an integrated AI copilot providing context-specific hints and guidance without revealing complete answers.
- **Rationale Insights**: Query the AI copilot for detailed explanations and rationales behind each answer choice, promoting critical thinking and a deeper understanding of the subject matter.
- **Progress Tracking and Scoreboard**: Track progress and measure performance during MCQ practice sessions with a comprehensive scoreboard feature, fostering continuous learning and improvement.

## Demo
<video src="https://github.com/rajesh-adk-137/StudyPal/assets/89499267/a06b11c6-ffbc-44b6-96b0-648d2a38cd7c"></video>

## Dependencies
- React
- Node
- Express
- Tailwind
- CopilotKit
- Typescript
  
## Getting Started

### Installation

#### Clone the repository:
```bash
git clone https://github.com/rajesh-adk-137/StudyPal.git
```
#### Go to repository:
```bash
cd StydyPal
```
#### Install dependencies:
Navigate to the frontend directory

```bash
npm install
```
Navigate to backend directory
```bash
npm install
```

#### Set up environment variables:
Create a `.env.local` file in the backend directory and add your OpenAI API key:
```bash
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```
**Here we have used `gpt-3.5-turbo` as our OpenAI model. If you want to use different OpenAI model change `model`
```bash
    const adapterOptions = {
      model: "gpt-3.5-turbo"
    };
```
in `backend\server.js`.

#### Start the development server:

For the frontend (currently inside `StudyPal` directory):
```bash
cd frontend
npm run dev
```

For the backend (currently inside `StudyPal` directory):
```bash
cd backend
npm start
```

#### Visit the Page
```bash
Open your browser and navigate to http://localhost:5173.
```
If your frontend is not running on `http://localhost:5173` but some other url then you have to change cors address from `backend\server.js`.
Inside `HEADERS` you have to change
```bash
  "Access-Control-Allow-Origin": "http://localhost:5173",
```
to 
```bash
  "Access-Control-Allow-Origin": "YOUR_FRONTEND_BASE_URL",
```
## Screenshots

![Landing](https://github.com/rajesh-adk-137/StudyPal/assets/109226874/3f478f20-601a-495f-ae0d-ed235e13a9fb)
![image](https://github.com/rajesh-adk-137/StudyPal/assets/109226874/5fd9f9ef-2a23-46d4-9bb5-bf1c1cef0dba)
![image](https://github.com/rajesh-adk-137/StudyPal/assets/109226874/78b75693-b11c-4fd9-88ca-25058351ac1b)
![image](https://github.com/rajesh-adk-137/StudyPal/assets/109226874/1d0fc988-b6db-438a-afe3-3a201de66fb3)

## Contributing

We welcome contributions from the community! If you'd like to contribute to StudyPal, please follow these steps:

1. *Fork the Repository*: Click the "Fork" button on GitHub to create your copy.

2. *Clone Your Fork*:
 ```bash
   git clone https://github.com/yourusername/StudyPal.git
```

   
3. *Create a Branch*:
 ```bash
   git checkout -b your-branch-name
```
 
4. *Make Changes*: Implement your changes.

5. *Commit Your Changes*:
 ```bash
   git commit -m "Description of your changes"
```

6. *Push Your Changes*:
 ```bash
   git push -u origin your-branch-name
```


7. *Create a Pull Request*: Submit your changes for review.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [CopilotKit](https://www.copilotkit.ai/) for their powerful AI integration toolkit
- [React](https://reactjs.org/) for the amazing JavaScript library
- [Node.js](https://nodejs.org/) for the robust JavaScript runtime
- [Express.js](https://expressjs.com/) for the minimalist web application framework
- [OpenAI](https://openai.com/) for their cutting-edge language models
