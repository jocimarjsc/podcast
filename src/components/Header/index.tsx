import styles from"./styles.module.scss";
import Link from "next/link";

import Toggle from "react-toggle";
import "react-toggle/style.css";

import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import { useTheme } from "../../contexts/themeContext";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
import { BiMoon } from "react-icons/bi";
import { HiOutlineSun } from "react-icons/hi";

export function Header() {
    const currentDate = format(new Date(), "EEEEEE, d MMMM", {
        locale: ptBR
    })

    const { toggleTheme, isDark }  = useTheme();

    return (
        <header className={`${styles.headerContainer} ${!isDark ? "light" : "dark"}`}>
            <Link href="/">
                <img src="./logo.svg" alt="Podcast"/>
            </Link>

            <p>O melhor para você ouvir, sempre</p>

            <span>
                {currentDate}
                {isDark
                ? 
                    <HiOutlineSun 
                        className={`${styles.reactToggle} ${styles.light}`} 
                        onClick={toggleTheme}
                    />
                : 
                    <BiMoon
                        className={`${styles.reactToggle} ${styles.dark}`} 
                        onClick={toggleTheme}
                    />
                }
            </span>
        </header>
    )
}