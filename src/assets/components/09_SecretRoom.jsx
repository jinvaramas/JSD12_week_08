import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const typeColors = {
  fire: "bg-red-500", water: "bg-blue-500", grass: "bg-green-500",
  electric: "bg-yellow-400 text-black", psychic: "bg-pink-500",
  normal: "bg-gray-400 text-black", poison: "bg-purple-500",
  ground: "bg-yellow-600", flying: "bg-indigo-400", bug: "bg-lime-500 text-black",
  rock: "bg-stone-500", ghost: "bg-purple-700", dragon: "bg-indigo-700",
  dark: "bg-gray-700", steel: "bg-gray-400 text-black", fairy: "bg-pink-300 text-black",
  ice: "bg-cyan-400 text-black", fighting: "bg-orange-600",
}

export default function SecretRoom({question, answer, handleAnswer}) {
  const [pokemon, setPokemon] = useState(null);
  const [showAtTop, setShowAtTop] = useState(false);

  useEffect(() => {
    if (answer.toLowerCase() === "help") {
      const top10 = [25, 6, 150, 94, 133, 143, 1, 7, 448, 197];
      const randomId = top10[Math.floor(Math.random() * top10.length)];
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then((res) => res.json())
        .then((data) => setPokemon(data));
    } else {
      setPokemon(null);
      setShowAtTop(false);
    }
  }, [answer]);


  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gray-700 w-[90%]">
      <h1>SecretRoom</h1>
      <p className="text-purple-300">Message from outside
        <span> {question ? question : "Waiting for a message..."}</span>
      </p>
      <textarea
        value={answer}
        onChange={handleAnswer}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..." />
      <p className="text-green-300">
        Reply to the outside:
        <span className="text-yellow-300"> {answer ? answer : "Waiting for a reply..."}</span>
      </p>

      {pokemon && !showAtTop && (
        <div className="flex flex-col items-center mt-4 gap-2">
          <p className="text-red-400 text-lg font-bold capitalize">🆘 {pokemon.name} มาช่วยแล้ว!</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-32 h-32" />

          <div className="flex gap-2">
            {pokemon.types.map((t) => (
              <span key={t.type.name} className={`px-2 py-0.5 rounded text-white text-xs font-bold capitalize ${typeColors[t.type.name] || "bg-gray-500"}`}>
                {t.type.name}
              </span>
            ))}
          </div>

          <p className="text-white text-sm">
            HP: <span className="text-green-400 font-bold">{pokemon.stats[0].base_stat}</span>
          </p>

          <button
            onClick={() => {
setShowAtTop(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg"
          >
            ⬆ กลับข้างบน
          </button>
        </div>
      )}

      {showAtTop && pokemon && createPortal(
        <div className="flex flex-col items-center gap-1">
          <p className="text-green-400 font-bold text-sm">You are safe</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-20 h-20" />
        </div>,
        document.getElementById('pokemon-slot')
      )}
    </div>
  );
}


