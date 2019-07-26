import { createConnectedStore } from 'undux'

// Create a store with an initial value.
export default createConnectedStore({
    currentSet: [],
    listQuestionsPassed: [],
    answers: [],
    questionsAnswered: 0,
    score: 0,
})