import { useEffect, useState } from "react";
import Diena from "./Diena";
import "./global.css";


function App() {

  const [stunda, setStundas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getStundas() {
      const response = await fetch('https://cheese-cake.onthewifi.com/api/lessons');
      const data = await response.json();
      setStundas(stunda);
      console.log(data);

      const cleansedData = [
      {
        diena: "Pirmdiena",
        stundas: data.IPb22[0].classes,
      },
      {
      diena: "Otrdiena",
        stundas: data.IPb22[1].classes,
      },
      {
      diena: "Tresdiena",
        stundas: data.IPb22[2].classes,
      },
      {
      diena: "Ceturdiena",
        stundas: data.IPb22[3].classes,
      },
      {
      diena: "Piektdiena",
        stundas: data.IPb22[4].classes,
      }
      ];

      }
      getStundas();
      setLoading(false);
  }, []);

  const stundaJSX = stunda.map((diena, index) => {
    return <p> <Diena key={index} {...diena} /> </p>
  });


return (
    <>
      {loading ? <p>Loading...</p> : stundaJSX}
    </>
  )
}
export default App;