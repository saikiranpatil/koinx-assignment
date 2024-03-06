import TradingViewWidget from "./TradingViewWidget";
import styles from "../style";
import Dashboard from "./Dashboard";

const Chart = () => {
    return (
        <div className={`bg-white rounded-lg ${styles.padding}`}>
            <Dashboard />
            <h1 className="font-bold text-[18px] p-2 text-black-10">Bitcoin Price Chart (USD)</h1>
            <TradingViewWidget />
        </div>
    )
}

export default Chart