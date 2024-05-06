# StudyPal: Your AI-Powered Personalized Learning Companion

StudyPal is an advanced web application that harnesses the power of artificial intelligence to deliver personalized and adaptive learning experiences. By integrating CopilotKit, a robust tool for incorporating large language models (LLMs) into web applications, StudyPal empowers students to embark on customized learning journeys that cater to their unique needs and preferences.

## Features

- **Subject Selection and Personalization**: Choose from a curated list of subjects and provide details about your educational background to tailor learning materials and exercises.
- **Intelligent Study Material Generation**: AI-powered generation of concise and comprehensive study materials, distilling the essence of selected subject matter into key points.
- **MCQ Practice with AI-Powered Assistance**: Engage in interactive multiple-choice question (MCQ) practice sessions with an integrated AI copilot providing context-specific hints and guidance without revealing complete answers.
- **Rationale Insights**: Query the AI copilot for detailed explanations and rationales behind each answer choice, promoting critical thinking and a deeper understanding of the subject matter.
- **Progress Tracking and Scoreboard**: Track progress and measure performance during MCQ practice sessions with a comprehensive scoreboard feature, fostering continuous learning and improvement.

## Getting Started

### Prerequisites

- Node.js 
- npm 

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rajesh-adk-137/StudyPal.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the backend directory and add your OpenAI API key:
```bash
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```

4. Start the development server:
For the frontend:
```bash
npm run dev
```
For the backend:
```bash
npm run start
```

## Contributing

We welcome contributions from the community! If you'd like to contribute to StudyPal, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add your commit message'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [CopilotKit](https://www.copilotkit.ai/) for their powerful AI integration toolkit
- [React](https://reactjs.org/) for the amazing JavaScript library
- [Node.js](https://nodejs.org/) for the robust JavaScript runtime
- [Express.js](https://expressjs.com/) for the minimalist web application framework
- [OpenAI](https://openai.com/) for their cutting-edge language models
