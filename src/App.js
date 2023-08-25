import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import City from "./City";

function App() {
  const key = "6337c8605e89ed96e1d935c2af66c1d6";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
    <div className="App">
      <p className="head">Hava Durumu </p>
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Placeholder"
          className=" w-[500px] h-[100px] input-box px-3 py-3 placeholder-slate-300 text-white relative bg-black rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
        />
        <City city={city} />
      </div>
    </div>
  );
}

export default App;
