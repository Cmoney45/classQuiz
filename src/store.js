import { createConnectedStore } from 'undux'
import dinosaurs from "./dinosaurs.json";

// Create a store with an initial value.
export default createConnectedStore({
    currentSet: dinosaurs,
    currentSetCount: 0,
    highScore: 0,
    score: 0,
    guessedImages: [],
})