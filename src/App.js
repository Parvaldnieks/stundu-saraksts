import Diena from './Diena';



function App() {

       const visasStundas = [

        {diena: "Pirmdiena", stundas: ["Sports", "Dabaszinības", "Vēsture", "Krievu Valoda"]},
         
        {diena: "Otrdiena", stundas: ["Matemātika", "Datortīkli", "Dabaszinības", "Matemātika"]},
        
        {diena: "Tresdiena", stundas: ["Programmēšana", "Programmēšana", "Datortīkli", "Datortīkli"]},

        {diena: "Ceturdiena", stundas: ["Klases Strunda", "Latviešu valoda", "Sports", "Vēsture"]},

        {diena: "Piektdiena", stundas: ["Fizika", "Programmēšana", "Angļu valoda"]}

       ];

       const dienasJSX = visasStundas.map((diena, index) => {
         return <Diena key={index} diena={diena.diena} stundas={diena.stundas}/>
       });
       
return (
    <>
      <h1>Te būs stundu saraksts! :)</h1>
      {dienasJSX}
    </>
  )
}
export default App;
