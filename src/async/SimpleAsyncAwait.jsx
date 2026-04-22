import { useState, useEffect } from "react";

export default function SimpleAsyncAwait() {
  const [name, setName] = useState("Loading...");

  useEffect(() => {
    const getData = async () => {
      const randomId = Math.floor(Math.random() * 1010) + 1;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await res.json();
      setName(data.name);
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 p-6 bg-gray-800 text-white rounded-xl">
      <h2 className="text-xl font-bold text-yellow-300">Simple async/await</h2>
      <p className="capitalize text-2xl">{name}</p>
    </div>
  );
}

//useEffect(() => {
    //fetch("https://pokeapi.co/api/v2/pokemon/1")
      //.then((res) => res.json())
      //.then((data) => setName(data.name));
  //}, []);