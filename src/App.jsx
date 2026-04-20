import { useState } from "react";
import Castle from "./assets/components/Castle";

export default function App() {
  // creating state variables
  const [question, setQuestion] = useState("");
  
  const handleQuestion = (e) => {
    console.log(e);
    setQuestion(e.target.value);
  };

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p className="text-purple-300">
        Message For JSD12: 
        
      </p>

      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Type your message here..."
      />

      <p className="text-green-300">
        Reply from Secret Room: 
        
      </p>

      <Castle />
    </div>
  );
}
