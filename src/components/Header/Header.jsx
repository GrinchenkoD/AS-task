import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Container from '../Container/Container';
import styles from "./Header.module.css"



const navArr = [
  { label: "Товары", exact: true, to: "/" },
  { label: "Избранное", exact: false, to: "/favorite" },
];

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.navigation}>
                    <Link to="/" className={styles.brand}>
                        Alvarium <span className={styles.brand_Accent}>shop</span>
                    </Link>
                    <ul className={styles.list}>
                        {navArr.map(({ label, exact, to }) => (
                            <li className={styles.item} key={to}>
                                <NavLink
                                    exact={exact}
                                    to={to}
                                    className={styles.link}
                                    aria-current="page"
                                    activeClassName={styles.link_active}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default Header
