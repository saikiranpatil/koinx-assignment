import { IoInformationCircle, IoNewspaper, IoTrendingUp } from "react-icons/io5"
import styles from "../style"

const Sentiments = () => {
    return (
        <div id="sentiments" className={`bg-white rounded-lg ${styles.padding} my-4`}>
            <h1 className="font-semibold text-[24px] text-black-10 mb-4">Sentiments</h1>
            <span id="fundamentals" className="text-[18px] text-black-8 font-semibold flex items-center gap-1 mb-4">
                Key Events <IoInformationCircle className="text-black-7" />
            </span>
            <div className="flex gap-4 overflow-x-auto mb-4">
                <div className="flex p-4 gap-4 w-[450px] bg-primary-2/50 rounded-lg">
                    <div>
                        <div className="bg-primary-5 p-2 rounded-full">
                            <IoNewspaper size={30} color="#fff" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-[12px]">
                        <h2 className="font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum error nostrum consequatur nam nulla harum!
                        </h2>
                        <div>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eaque cumque dolores autem minima deleniti eveniet odit nam, magni aliquid facilis numquam minus reprehenderit inventore est rerum dignissimos dolor id, accusamus maxime quibusdam dicta sunt!
                        </div>
                    </div>
                </div>
                <div className="flex p-4 gap-4 w-[450px] bg-success-2/50 rounded-lg">
                    <div>
                        <div className="bg-success-5 p-2 rounded-full">
                            <IoTrendingUp size={30} color="#fff" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-[12px]">
                        <h2 className="font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum error nostrum consequatur nam nulla harum!
                        </h2>
                        <div>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eaque cumque dolores autem minima deleniti eveniet odit nam, magni aliquid facilis numquam minus reprehenderit inventore est rerum dignissimos dolor id, accusamus maxime quibusdam dicta sunt!
                        </div>
                    </div>
                </div>
            </div>
            <span id="fundamentals" className="text-[18px] text-black-9 font-semibold flex items-center gap-1 mb-4">
                Analyst Estimates <IoInformationCircle className="text-black-7" />
            </span>
            <div className="flex sm:flex-row flex-col gap-10">
                <div className="flex items-center font-semibold justify-center text-center bg-success-2/50 text-[2rem] text-success-7 p-4 rounded-full h-28 w-28">
                    76%
                </div>
                <div className="flex flex-col gap-4 text-black-7 text-sm">
                    <div className="flex flex-1 items-center justify-between gap-4">
                        <span>Buy</span>
                        <div className="w-[250px] flex gap-2 items-center">
                            <div className="h-2 bg-success-7 w-[80%] rounded-sm"></div>
                            <span>76%</span>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-4">
                        <span>Hold</span>
                        <div className="w-[250px] flex gap-2 items-center">
                            <div className="h-2 bg-black-5 w-[8%] rounded-sm"></div>
                            <span>8%</span>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-between gap-4">
                        <span>Sell</span>
                        <div className="w-[250px] flex gap-2 items-center">
                            <div className="h-2 bg-warning-5 w-[15%] rounded-sm"></div> 
                            <span>16%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sentiments
