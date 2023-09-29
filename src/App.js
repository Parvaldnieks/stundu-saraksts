import Diena from './Diena';
import Stunda from './Stunda';

function App() {
  const PirmdienasStundas = ["Sistēmu Programmēšana", "Dabaszinības", "Sociālās Zinības un Vēsture", "Krievu Valoda"];
    const OtrdienasStundas = ["Matemātika", "Sociālās Zinības un Vēsture", "Latviešu Valoda un Literatūra", "Dabaszinības"];
  return ( 
    <>
      <h1>Te būs stundu saraksts! :)</h1>
      <Diena diena="Pirmdiena" stundas={PirmdienasStundas}/>
      <Diena diena="Otrdiena" stundas={OtrdienasStundas}/>
    </>
  )
}

export default App;
