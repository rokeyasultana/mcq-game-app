import { useState } from 'react'
import './App.css'

function App () {

  // MCQ questions
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'Berlin', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'London', isCorrect: false }
      ]
    },
    {
      questionText: 'What is the largest planet in our solar system?',
      answerOptions: [
        { answerText: 'Earth', isCorrect: false },
        { answerText: 'Saturn', isCorrect: false },
        { answerText: 'Jupiter', isCorrect: true }
      ]
    },
    {
      questionText: 'Which of the following is not a primary color?',
      answerOptions: [
        { answerText: 'Red', isCorrect: false },
        { answerText: 'Blue', isCorrect: false },
        { answerText: 'Green', isCorrect: true }
      ]
    },
    {
      questionText: 'What is the smallest country in the world?',
      answerOptions: [
        { answerText: 'Vatican City', isCorrect: true },
        { answerText: 'Monaco', isCorrect: false },
        { answerText: 'Nauru', isCorrect: false }
      ]
    },
    {
      questionText: 'Who is the author of the book "To Kill a Mockingbird"?',
      answerOptions: [
        { answerText: 'F. Scott Fitzgerald', isCorrect: false },
        { answerText: 'Harper Lee', isCorrect: true },
        { answerText: 'Jane Austen', isCorrect: false }
      ]
    },
    {
      questionText: 'What is the chemical symbol for gold?',
      answerOptions: [
        { answerText: 'Ag', isCorrect: false },
        { answerText: 'Au', isCorrect: true },
        { answerText: 'Hg', isCorrect: false }
      ]
    },
    {
      questionText:
        'Which of the following planets is known as the "Red Planet"?',
      answerOptions: [
        { answerText: 'Earth', isCorrect: false },
        { answerText: 'Mars', isCorrect: true },
        { answerText: 'Jupiter', isCorrect: false }
      ]
    },
    {
      questionText: 'What is the largest living species of lizard?',
      answerOptions: [
        { answerText: 'Komodo dragon', isCorrect: true },
        { answerText: 'Saltwater crocodile', isCorrect: false },
        { answerText: 'Black mamba', isCorrect: false }
      ]
    },
    {
      questionText:
        'Who is the main character in the book "The Catcher in the Rye"?',
      answerOptions: [
        { answerText: 'Holden Caulfield', isCorrect: true },
        { answerText: 'Huckleberry Finn', isCorrect: false },
        { answerText: 'Tom Sawyer', isCorrect: false }
      ]
    },
    {
      questionText: 'What is the process by which water moves through a plant?',
      answerOptions: [
        { answerText: 'Respiration', isCorrect: false },
        { answerText: 'Photosynthesis', isCorrect: false },
        { answerText: 'Transpiration', isCorrect: true }
      ]
    },
    {
      questionText: 'Which of the following is a type of rock?',
      answerOptions: [
        { answerText: 'Sand', isCorrect: false },
        { answerText: 'Clay', isCorrect: false },
        { answerText: 'Granite', isCorrect: true }
      ]
    },
    {
      questionText: 'What is the largest mammal on Earth?',
      answerOptions: [
        { answerText: 'African elephant', isCorrect: false },
        { answerText: 'Blue whale', isCorrect: true },
        { answerText: 'Hippopotamus', isCorrect: false }
      ]
    },
    {
      questionText: 'Who is the author of the book "1984"?',
      answerOptions: [
        { answerText: 'George Orwell', isCorrect: true },
        { answerText: 'Aldous Huxley', isCorrect: false },
        { answerText: 'Ray Bradbury', isCorrect: false }
      ]
    },
    {
      questionText: 'What is the chemical symbol for silver?',
      answerOptions: [
        { answerText: 'Ag', isCorrect: true },
        { answerText: 'Au', isCorrect: false },
        { answerText: 'Hg', isCorrect: false }
      ]
    }
  ]

  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedAnswers, setSelectedAnswers] = useState([])

  //answer
  const handleAnswerButtonClick = answerOption => {
    setSelectedAnswers(prevAnswers => [
      ...prevAnswers,
      {
        question: questions[currentQuestion].questionText,
        answer: answerOption.answerText,
        isCorrect: answerOption.isCorrect
      }
    ])

    if (answerOption.isCorrect) {
      setScore(prevScore => prevScore + 1)
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion)
      } else {
        setShowScore(true)
      }
    }, 1000)
  }
  
//restart
  const handleRestart = () => {
    setScore(0)
    setCurrentQuestion(0)
    setShowScore(false)
    setSelectedAnswers([])
  }

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          <h1>
            You scored <span className='score'>{score}</span> out of{' '}
            <span className='score'>{questions.length}</span>
          </h1>
          <ul>
            {selectedAnswers.map((answer, index) => (
              <li key={index}>
                <strong>Q:</strong> {answer.question}
                <br />
                <strong>A:</strong> {answer.answer}{' '}
                {answer.isCorrect ? '✔️' : '❌'}
              </li>
            ))}
          </ul>
          <button className='restart-button' onClick={handleRestart}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <div className='question-section'>
            <h2>{questions[currentQuestion].questionText}</h2>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerButtonClick(answerOption)}
                  className={answerOption.isCorrect ? 'correct' : 'incorrect'}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
