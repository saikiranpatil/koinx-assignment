import ChangeButton from "./ChangeButton"

const CoinCards = ({ trendingCoinData }) => {
    return (
        <div className="flex gap-4 overflow-x-auto py-4">
            {
                trendingCoinData.map((coinData) => (
                    <div key={coinData.id} className="flex flex-col items-center p-4 pr-10 border border-black-5 rounded-lg">
                        <div className="flex justify-center items-center gap-8 mb-4">
                            <div className="flex justify-center items-center gap-2">
                                <img src={coinData.item.thumb} alt="" className="h-8" />
                                <h1>{coinData.item.symbol}</h1>
                            </div>
                            <ChangeButton change={coinData?.item?.data?.price_change_percentage_24h?.usd} showArrow={false} />
                        </div>
                        <span className="w-full text-[20px] text-left">{coinData.item.data.price}</span>
                        <img src="https://www.coingecko.com/coins/16548/sparkline.svg" alt="" className="rounded-full" />
                    </div>
                ))
            }
        </div>
    )
}

export default CoinCards
