import styles from "../style"

import { IoInformationCircle } from "react-icons/io5";

const Overview = () => {
    return (
        <div id="overview" className={`bg-white rounded-lg ${styles.padding}`}>
            <h1 className="font-semibold text-[24px] text-black-10 mb-4">Performance</h1>
            <div className={`${styles.flexCenter} py-6`}>
                <div className="flex-col gap-2">
                    <div className="text-sm text-black-8">
                        Today&apos;s Low
                    </div>
                    <div className="text-black-9 text-[18px]">
                        46,986.22
                    </div>
                </div>
                <div className="flex flex-1 w-full justify-center align-middle px-4">
                    <div className="h-2 w-full rounded-lg bg-gradient-to-r from-red-400 via-yellow-400 to-green-400">
                    </div>
                </div>
                <div className="flex-col gap-2">
                    <div className="text-sm text-black-8">
                        Today&apos;s High
                    </div>
                    <div className="text-black-9 text-[18px]">
                        46,986.22
                    </div>
                </div>
            </div>
            <div className={`${styles.flexCenter} py-6`}>
                <div className="flex-col gap-2">
                    <div className="text-sm text-black-8">
                        52W Low
                    </div>
                    <div className="text-black-9 text-[18px]">
                        46,986.22
                    </div>
                </div>
                <div className="flex flex-1 w-full justify-center align-middle px-4">
                    <div className="h-2 w-full rounded-lg bg-gradient-to-r from-red-400 via-yellow-400 to-green-400">
                    </div>
                </div>
                <div className="flex-col gap-2">
                    <div className="text-sm text-black-8">
                        52W High
                    </div>
                    <div className="text-black-9 text-[18px]">
                        46,986.22
                    </div>
                </div>
            </div>
            <span id="fundamentals" className="text-[18px] font-semibold flex items-center gap-1 mb-4">
                Fundamentals <IoInformationCircle className="text-black-7" />
            </span>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
                <div className="grid grid-rows-5 text-sm gap-2">
                    <div className="flex justify-between border-b-2 mb-1">
                        <div className="text-black-8">Bitcoin Price</div>
                        <div>$ 16,125.23</div>
                    </div>
                    <div className="flex justify-between border-b-2 mb-1">
                        <div className="text-black-8">24h Low / 24h High</div>
                        <div>$ 16,125.23 / $ 16,122.23</div>
                    </div>
                    <div className="flex justify-between border-b-2 mb-1">
                        <div className="text-black-8">7d Low / 7d High</div>
                        <div>$ 10,125.23 / $ 12,122.23</div>
                    </div>
                    <div className="flex justify-between border-b-2 mb-1">
                        <div className="text-black-8">Trading Volume</div>
                        <div>$23,214,202,782</div>
                    </div>
                    <div className="flex justify-between border-b-2 mb-1">
                        <div className="text-black-8">Market Cap Rank</div>
                        <div>#1</div>
                    </div>
                </div>
                <div className="grid grid-rows-5 text-sm gap-2">
                    <div className="flex justify-between border-b-2 mb-1">
                        <div className="text-black-8">Market Cap</div>
                        <div>$232,125,254,124</div>
                    </div>
                    <div className="flex justify-between border-b-2 mb-1">
                        <div className="text-black-8">Market Cap Dominance</div>
                        <div>38.254%</div>
                    </div>
                    <div className="flex justify-between border-b-2 mb-1">
                        <div className="text-black-8">Volume / Market Cap</div>
                        <div>0.0718</div>
                    </div>
                    <div className="flex justify-between border-b-2 mb-1">
                        <div className="text-black-8">All-Time High</div>
                        <div className="flex-col">
                            <div className="flex justify-end">
                                $65,584.01
                                <span className="text-warning-5 ml-1">
                                    -75.9%
                                </span>
                            </div>
                            <div className="text-[10px]">
                                Nov 10, 2021 (about 1 year)
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between border-b-2 mb-1">
                        <div className="text-black-8">All-Time Low</div>
                        <div className="flex-col">
                            <div className="flex justify-end">
                                $65,984.01
                                <span className="text-success-5 ml-1">
                                    125.9%
                                </span>
                            </div>
                            <div className="text-[10px]">
                                Nov 10, 2021 (about 1 year)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Overview