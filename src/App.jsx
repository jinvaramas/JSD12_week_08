import { useState } from "react";
import Castle from "./assets/components/01_Castle";
import SimpleAsyncAwait from "./async/SimpleAsyncAwait";


export default function App() {
  // creating state variables
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("")
  
  const handleQuestion = (e) => {
    console.log(e);
    setQuestion(e.target.value);
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p className="text-purple-300">
        Message For JSD12: 
       <span className="text-amber-300" >{question}</span>
      
        
      </p>

      <div className="flex items-center gap-4">
        <textarea
          value={question}
          onChange={handleQuestion}
          className="bg-white text-black rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Type your message here..."
        />
        <div id="pokemon-slot"></div>
      </div>

      <p className="text-green-300">
        Reply from Secret Room:{" "}
        <span className="text-yellow-300">
          {/* answer or waiting for a reply */}
          {answer ? answer : "Waiting for a reply..."}
        </span>
      </p>

      <Castle question={question} answer={answer} handleAnswer={handleAnswer} />
      <SimpleAsyncAwait />
    </div>
  );
}
