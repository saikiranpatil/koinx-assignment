import { useEffect, useState } from "react";

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
import Trending from "./Trending";
import Footer from "./Footer";
import axios from "axios";


const Hero = () => {
    const [trendingCoinData, setTrendingCoinData] = useState([]);

    const getTrendingCoinData = async () => {
        try {
            const { data } = await axios.get("https://api.coingecko.com/api/v3/search/trending", { params: { "x-cg-demo-api-key": import.meta.env.VITE_COINGEKO_API_KEY } });

            console.log("Get Trending Coin Data Sucess");

            setTrendingCoinData(data.coins);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getTrendingCoinData();
    }, [])

    return (
        <div className="flex flex-col">
            <Breadcrum />
            <div className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="grid md:grid-cols-[70%_30%] grid-cols-1 gap-6">
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
                            <Trending trendingCoinData={trendingCoinData} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer trendingCoinData={trendingCoinData} />
        </div>
    )
}

export default Hero
