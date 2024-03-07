import axios from 'axios'
import { useEffect, useState } from 'react'

import { bitcoin } from '../assets'
import ChangeButton from './ChangeButton'

const Dashboard = () => {
    const [coinData, setCoinData] = useState([]);
    // const coinData = bitcoinDummyData.bitcoin;
    const getCoinData = async () => {
        try {
            const { data } = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true", {params: {"x-cg-demo-api-key": import.meta.env.VITE_COINGEKO_API_KEY}});

            console.log("Get Coin Data Sucess");
            
            setCoinData(data.bitcoin);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCoinData();
    }, []);

    return (
        <div className="mb-4 pb-8 border-b-2 border-black-5">
            <div className={"flex flex-1 gap-2 items-center mb-8"}>
                <img src={bitcoin} alt="bitcoin" />
                <h1 className="font-bold text-[28px]">Bitcoin</h1>
                <span className="font-bold text-black-8">BTC</span>
                <span className="ml-4 p-2 bg-black-7 rounded-xl font-bold text-white">Rank #1</span>
            </div>
            <div className={"flex flex-1 gap-2 items-center mb-2"}>
                <h1 className="font-bold text-[28px] text-black-10">${coinData?.usd}</h1>
                <ChangeButton change={coinData?.usd_24h_change} />
                <span className="text-black-8 text-sm">
                    (24 H)
                </span>
            </div>
            <div className={"flex flex-1 gap-2 items-center font-semibold text-black-10"}>
                ₹ {coinData?.inr}
            </div>
        </div>
    )
}

export default Dashboard
