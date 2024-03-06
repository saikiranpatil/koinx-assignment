import { BiSolidUpArrow } from 'react-icons/bi'
import { bitcoin } from '../assets'

const Dashboard = () => {
  return (
    <div className="mb-4 pb-8 border-b-2 border-black-5">
    <div className={"flex flex-1 gap-2 items-center mb-8"}>
        <img src={bitcoin} alt="bitcoin" />
        <h1 className="font-bold text-[28px]">Bitcoin</h1>
        <span className="font-bold text-black-8">BTC</span>
        <span className="ml-4 p-2 bg-black-7 rounded-xl font-bold text-white">Rank #1</span>
    </div>
    <div className={"flex flex-1 gap-2 items-center mb-2"}>
        <h1 className="font-bold text-[28px] text-black-10">$46,454,45.12</h1>
        <span className="ml-4 p-2 bg-success-1 rounded-lg flex items-center gap-1 text-success-6">
            <BiSolidUpArrow className="w-[25px] text-success-6" />
            2.51%
        </span>
        <span className="text-black-8 text-sm">
            (24 H)
        </span>
    </div>
    <div className={"flex flex-1 gap-2 items-center font-semibold text-black-10"}>
        ₹ 39,42,457.32
    </div>
</div>
  )
}

export default Dashboard
