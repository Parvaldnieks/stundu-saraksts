import Diena from './Diena';
import Stunda from './Stunda';

function App() {
  const PirmdienasStundas = ["Sports", "Dabaszinības", "Vēsture", "Krievu Valoda"];
    const OtrdienasStundas = ["Matemātika", "Datortīkli", "Dabaszinības", "Matemātika"];
     const TresdienasStundas = ["Programmēšana", "Programmēšana", "Datortīkli", "Datortīkli"];
      const CeturdienasStundas = ["Klases Strunda", "Latviešu valoda", "Sports", "Vēsture"];
       const PiektdienasStundas = ["Fizika", "Programmēšana", "Angļu valoda"];
  return (
    <>
      <h1>Te būs stundu saraksts! :)</h1>
      <Diena diena="Pirmdiena" stundas={PirmdienasStundas}/>
      <Diena diena="Otrdiena" stundas={OtrdienasStundas}/>
      <Diena diena="Trešdiena" stundas={TresdienasStundas}/>
      <Diena diena="Ceturdiena" stundas={CeturdienasStundas}/>
      <Diena diena="Piektdiena" stundas={PiektdienasStundas}/>
    </>
  )
}

export default App;
