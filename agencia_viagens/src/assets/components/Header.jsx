import Lupa from '../images/lupa.png'
import Logo from '../images/viagens.jpg'
import Style from '../styles/Header.module.css'
function Header() {
    return(
        <header className={Style.content}>
            <img src={Logo} alt="Logo" className={Style.log}/>
            <nav className={Style.menu}>
                <ul>
                    <li>Home</li>
                    <li>Escócia</li>
                    <li>Grand Canyon</li>
                    <li>Muralhas da China</li>
                    <li>Aruba</li>
                </ul>
            </nav>

            <div className={Style.login}>
                <input type="search" name="" id="" />
            </div>
            <img src={Lupa} alt="Lupa" className={Style.lupa}/>
        </header>
    )
}
export default Header