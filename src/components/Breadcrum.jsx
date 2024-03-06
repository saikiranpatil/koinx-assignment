import styles from '../style';

import { RiArrowRightDoubleFill } from 'react-icons/ri'

const Breadcrum = () => {
    return (
        <span className={`bg-primary flex text-black-8 items-center ${styles.paddingX} sm:py-4 py-4 gap-1`}>
            <span>
                Cryptocurrencies
            </span>
            <RiArrowRightDoubleFill />
            <h1 className="text-black-10 font-[500]">
                Bitcoin
            </h1>
        </span>
    )
}

export default Breadcrum
