import styles from '../styles/ComponentesProps.module.css'
function ComponentProps({ lugar, texto, bandeira_pais }) {

    return (
        <div className={styles.corpo_props}>
            <h2>Venha conhecer esse lugar incrivel: {lugar}!!!</h2>
            <p>{texto}</p>
            <img src={bandeira_pais} alt="" />
        </div>
    )
}
export default ComponentProps