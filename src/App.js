import {Routes, Route} from "react-router-dom"
import './App.css';
import Startpage from './Components/Startpage';
import QuizPage from './Components/QuizPage';
import AnswerPage from './Components/AnswerPage';
import { useState } from "react";

function App() {
  const [selectedOption, setSelectedOption] = useState([])
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Startpage/>}/>
        <Route path = "quiz" element = {<QuizPage selectedOption = {selectedOption} setSelectedOption = {setSelectedOption}/>}/>
        <Route path = "answer" element = {<AnswerPage  selectedOption = {selectedOption} />}/>
      </Routes>
    </div>
  );
}

export default App;
 