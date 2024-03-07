import { MdOutlineArrowRightAlt } from "react-icons/md"
import { ctaimg } from "../assets"

const CTA = () => {
    return (
        <div className="bg-[#0052fe] px-14 py-10 gap-4 flex flex-col justify-center items-center rounded-lg text-center">
            <h1 className="font-semibold text-[24px] text-white">Get Started with KoinX for FREE</h1>
            <p className="text-white text-sm">with out range of features that you can equip for free, KoinX allows you to be more educated aware of tax reports.</p>
            <img src={ctaimg} alt="" />
            <div>
                <button className='flex justify-center items-center gap-2 rounded-lg font-semibold bg-white px-4 py-2'>
                    Get Started for FREE <MdOutlineArrowRightAlt size={24} />
                </button>
            </div>
        </div>
    )
}

export default CTA
