import styles from '../style'
import ChangeButton from './ChangeButton'

const Trending = ({ trendingCoinData }) => {
    trendingCoinData = trendingCoinData.slice(0, 3);
    return (
        <div id="trending" className={`bg-white rounded-lg ${styles.padding} px-2 my-4`}>
            <h1 className="font-semibold text-black-10 mb-4">Trending Coins (24h)</h1>
            <div className="flex flex-col gap-4 justify-between">
                {
                    trendingCoinData.map((coinData) => (
                        <div key={coinData.id} className='flex justify-between'>
                            <div className="flex items-center gap-2">
                                <img src={coinData.item.thumb} alt="" className="h-10 rounded-full" />
                                <h1 className="text-black-10 font-[400]">{coinData.item.name} ({coinData?.item?.symbol})</h1>
                            </div>
                            <ChangeButton change={coinData?.item?.data?.price_change_percentage_24h?.usd} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Trending
