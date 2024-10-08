import Styles from '../styles/Rodape.module.css'
import insta from '../images/instagram.jpg'
import whats from '../images/whtas.png'
import face from '../images/facebook.jpg'
import tiktok from '../images/tiktok.png'

function Rodape() {
    return(
        <footer className={Styles.corpo}>
            <h3>Siga-nos nas redes sociais</h3>
            <div className={Styles.icones}>
                <img src={insta} alt="" />
                <img src={whats} alt="" />
                <img src={face} alt="" />
                <img src={tiktok} alt="" />
            </div>
            <h3>Telefone de contato - (11) 4002-8922</h3>
        </footer>
    )
}
export default Rodape