import Stunda from "./Stunda";
import styles from "./Diena.module.css";

function Diena(props) {

    const stundaJSX = props.stundas.map((stunda, index) => {
        return <Stunda key={index} nosaukums = {stunda}/>
    });

    return (
        <>
            <h2 className={styles.dzeltens}>{props.diena}</h2>
                <ul>
                    {stundaJSX}
                </ul>
        </>
    )
}
  
export default Diena;