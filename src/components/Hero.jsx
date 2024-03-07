import Chart from "./Chart";
import Breadcrum from "./Breadcrum";
import HeroNavbar from "./HeroNavbar";

import styles from "../style";
import Overview from "./Overview";

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
                </div>
            </div>
        </div>
    )
}

export default Hero
