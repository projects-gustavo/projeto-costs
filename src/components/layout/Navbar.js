import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container customClass="min-height">
                <Link to="/" className={styles.title_navbar}>
                    <h1>Costs</h1>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                      <Link to="/">Início</Link>
                    </li>
                    <li className={styles.item}>
                      <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                      <Link to="/contact">Contato</Link>
                    </li>
                    <li className={styles.item}>
                      <Link to="/company">Empresa</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar