import styles from '../styles/Escocia.module.css'
import ComponentProps from './ComponentesProps'
import bandeira from '../images/bandeira_escocia.jpeg'
function Escocia() {
    return (
        <div className={styles.fundo}>
            <ComponentProps
                lugar="Escocia"
                texto="A Escócia é um país que faz parte do Reino Unido, ocupando o terço norte da ilha da Grã-Bretanha, juntamente com mais de 790 ilhas adjacentes, predominantemente nas Hébridas e nas Ilhas do Norte."
                bandeira_pais={bandeira}
            />

        </div>


    )
}
export default Escocia