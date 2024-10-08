import styles from '../styles/Grand_Canyon.module.css'
import ComponentProps from './ComponentesProps'
import bandeira from '../images/estados_unidos.jpeg'
function Grand_Canyon() {
    return (
        <div className={styles.fundo}>
            <ComponentProps
                lugar="Grand_Canyon"
                texto="O Grand Canyon é um espetáculo por si só. Observar essa obra talhada pela natureza já é a maior recompensa para quem se dispõe a enfrentar longas horas de avião e estrada para chegar lá. O desfiladeiro é resultado de um processo natural que acontece há milhões de anos. Ele só é possível porque, em suas entranhas, passa o Rio Colorado, o responsável pelas erosões que modelaram e esculpiram as rochas.."
                bandeira_pais={bandeira}
            />

        </div>


    )
}
export default Grand_Canyon