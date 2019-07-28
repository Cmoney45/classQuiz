import { createConnectedStore } from 'undux'

// Create a store with an initial value.
export default createConnectedStore({
    questionsAnswered: 0,
    totalQuestions: 0,
    gameRunning: false,
    currentQuestionBank: [],
    currentAnswers: [],
    currentQuestionIndex: 0,
})