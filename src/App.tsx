import { Header } from "./components/Headers";
import styles from "./app.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main></main>
      </div>
    </div>
  );
}
