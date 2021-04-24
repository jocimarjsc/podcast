import { Header } from "../components/Header";
import "../styles/global.scss";
import styles from "../styles/app.module.scss";
import { Player } from "../components/Player";
import { PlayerContextPovider } from "../contexts/PlayerContext";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextPovider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextPovider>
  )
}

export default MyApp
