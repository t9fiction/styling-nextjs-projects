import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Header from "./components/Header";
import {Pricing} from "./components/Pricing";
import Footer from "./components/Features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Pricing />
      <Footer/>
    </div>
  );
}
