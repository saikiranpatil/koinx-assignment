import styles from "../style"
import CoinCards from "./CoinCards"

const Footer = ({ trendingCoinData }) => {
    return (
        <div className={`${styles.paddingX} ${styles.flexStart} bg-white`}>
            <div className={`${styles.boxWidth} py-8`}>
                <div>
                    <h1 className="font-semibold text-black-10 text-[20px] my-4">You May Also Like</h1>
                    <CoinCards trendingCoinData={trendingCoinData} />
                    <h1 className="font-semibold text-black-10 text-[20px] my-4">Trending Coins</h1>
                    <CoinCards trendingCoinData={trendingCoinData} />
                </div>
            </div>
        </div>
    )
}

export default Footer
