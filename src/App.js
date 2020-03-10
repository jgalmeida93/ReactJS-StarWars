import React, { useState, useEffect } from "react";

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /**
     * função assíncrona para capturar dados dos personagens do star wars
     * quando os dados estiverem prontos (let data = await res.json())
     * setamos o state people com data.results
     */

    async function fetchPeople() {
      let res = await fetch("https://swapi.co/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
    }

    async function fetchPlanets() {
      let res = await fetch("https://swapi.co/api/planets/?format=json");
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPeople();
    fetchPlanets();
  }, []);

  return <div className="App"></div>;
}

export default App;
