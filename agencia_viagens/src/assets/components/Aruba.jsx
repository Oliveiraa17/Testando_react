import styles from '../styles/Aruba.module.css'
import ComponentProps from './ComponentesProps'
import bandeira from '../images/bandeira_aruba.jpeg'
function Aruba() {
    return (
        <div className={styles.fundo}>
            <ComponentProps
                lugar="Aruba"
                texto="Bem vindo.A Escócia é um país que faz parte do Reino Unido, ocupando o terço norte da ilha da Grã-Bretanha, juntamente com mais de 790 ilhas adjacentes, predominantemente nas Hébridas e nas Ilhas do Norte"
                bandeira_pais={bandeira}
            />

        </div>


    )
}
export default Aruba