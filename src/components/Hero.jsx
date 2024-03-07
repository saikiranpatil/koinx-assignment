import styles from "../style";

import Chart from "./Chart";
import Breadcrum from "./Breadcrum";
import HeroNavbar from "./HeroNavbar";
import Overview from "./Overview";
import Sentiments from "./Sentiments";
import About from "./About";

const Hero = () => {
    return (
        <div className="flex flex-col">
            <Breadcrum />
            <div className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Chart />
                </div>
            </div>
            <div className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <HeroNavbar />
                    <Overview />
                    <Sentiments />
                    <About />
                </div>
            </div>
        </div>
    )
}

export default Hero
