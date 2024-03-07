import styles from "../style";

import Chart from "./Chart";
import Breadcrum from "./Breadcrum";
import HeroNavbar from "./HeroNavbar";
import Overview from "./Overview";
import Sentiments from "./Sentiments";
import About from "./About";
import Tokenomics from "./Tokenomics";
import Teams from "./Teams";
import CTA from "./CTA";

const Hero = () => {
    return (
        <div className="flex flex-col">
            <Breadcrum />
            <div className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="grid sm:grid-cols-[70%_30%] grid-cols-1 gap-6">
                        <div>
                            <Chart />
                            <HeroNavbar />
                            <Overview />
                            <Sentiments />
                            <About />
                            <Tokenomics />
                            <Teams />
                        </div>
                        <div>
                            <CTA />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
