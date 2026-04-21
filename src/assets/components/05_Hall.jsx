import Corridor from './06_Coridor';

export default function Hall({question, answer, handleAnswer}) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-blue-400 w-[90%]">
      <h1>Hall</h1>
      {question}
      <Corridor question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}
