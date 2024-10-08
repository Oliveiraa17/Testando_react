import styles from '../styles/Muralhas_da_China.module.css'
import ComponentProps from './ComponentesProps'
import bandeira from '../images/china.jpeg'
function Muralhas_da_China() {
    return (
        <div className={styles.fundo}>
            <ComponentProps
                lugar="Muralha da China"
                texto="A Muralha da China, também denominada de Grande Muralha, corresponde a uma intrigante construção arquitetônica edificada na época da China Imperial com finalidade militar."
                bandeira_pais={bandeira}
            />
        </div>


    )
}
export default Muralhas_da_China