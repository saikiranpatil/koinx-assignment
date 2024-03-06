import Chart from "./Chart";
import Breadcrum from "./Breadcrum";
import HeroNavbar from "./HeroNavbar";

import styles from "../style";

const Hero = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Breadcrum />
                    <Chart />
                </div>
            </div>
            <div className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <HeroNavbar />
                </div>
            </div>
        </div>
    )
}

export default Hero
