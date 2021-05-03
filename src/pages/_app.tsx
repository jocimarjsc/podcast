import { Header } from "../components/Header";
import "../styles/theme.scss";
import "../styles/global.scss";
import styles from "../styles/app.module.scss";
import { Player } from "../components/Player";
import { PlayerContextPovider } from "../contexts/PlayerContext";
import { ThemeContextPovider } from "../contexts/themeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextPovider>
      <PlayerContextPovider>
        <div className={`${styles.wrapper} `}>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>

      </PlayerContextPovider>
    </ThemeContextPovider >
  )
}

export default MyApp
