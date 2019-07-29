import { createConnectedStore } from 'undux'

// Create a store with an initial value.
const initialState = {
    questionsAnswered: 0,
    totalQuestions: 0,
    gameRunning: false,
    currentQuestionBank: [],
    currentAnswers: [],
    currentQuestionIndex: 0,
}

export default createConnectedStore(initialState);
